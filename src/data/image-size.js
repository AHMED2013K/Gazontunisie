// Lit les dimensions reelles des images au moment du build, en analysant les
// en-tetes des fichiers (aucune dependance externe).
//
// Pourquoi : une balise <img> sans width/height ne reserve pas sa place pendant
// le chargement. Le texte saute quand l'image arrive — c'est le "Cumulative
// Layout Shift", que Google mesure et qui pese sur le classement. En posant les
// dimensions reelles, le navigateur reserve le bon espace des le premier rendu.
//
// Les dimensions sont lues sur le disque plutot qu'ecrites a la main : elles ne
// peuvent donc jamais diverger du fichier reellement servi.
const fs = require("fs");
const path = require("path");

const RACINE = path.join(__dirname, "..", "..");
const cache = new Map();

/** Dimensions d'un PNG : elles sont dans le bloc IHDR, a offset fixe. */
function taillePng(buf) {
  if (buf.length < 24) return null;
  if (buf.readUInt32BE(0) !== 0x89504e47) return null;
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

/** Dimensions d'un JPEG : il faut parcourir les segments jusqu'au SOF. */
function tailleJpeg(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null;
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) {
      i++;
      continue;
    }
    const marqueur = buf[i + 1];
    // SOF0..SOF15, en excluant DHT (c4), JPGA (c8) et DAC (cc) qui ne portent
    // pas de dimensions.
    if (marqueur >= 0xc0 && marqueur <= 0xcf && marqueur !== 0xc4 && marqueur !== 0xc8 && marqueur !== 0xcc) {
      return { height: buf.readUInt16BE(i + 5), width: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}

/**
 * Dimensions d'une image du site, a partir de son chemin public ("/gazon.jpg").
 * Renvoie null si le fichier est absent ou d'un format non gere : l'appelant
 * omet alors les attributs plutot que d'en inventer.
 */
function imageSize(src) {
  if (!src || !src.startsWith("/")) return null;
  const clef = src.split("?")[0];
  if (cache.has(clef)) return cache.get(clef);

  let res = null;
  try {
    const buf = fs.readFileSync(path.join(RACINE, clef));
    const ext = path.extname(clef).toLowerCase();
    res = ext === ".png" ? taillePng(buf) : ext === ".jpg" || ext === ".jpeg" ? tailleJpeg(buf) : null;
  } catch (e) {
    res = null;
  }
  cache.set(clef, res);
  return res;
}

/** Attributs width/height prets a inserer, ou chaine vide si inconnus. */
function sizeAttrs(src) {
  const d = imageSize(src);
  return d ? ` width="${d.width}" height="${d.height}"` : "";
}

module.exports = { imageSize, sizeAttrs };
