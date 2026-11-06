// Tests de la logique de tarification (gazon par palier + calcul interne de devis).
// Zéro dépendance, cohérent avec le reste du projet. Usage : node scripts/test-pricing.js
const P = require("../src/data/pricing");
const { SITE } = require("../src/data/site");

let passed = 0;
const failures = [];

function eq(actual, expected, label) {
  if (actual === expected) {
    passed++;
  } else {
    failures.push(`${label}\n      attendu : ${expected}\n      obtenu  : ${actual}`);
  }
}

function ok(condition, label) {
  eq(Boolean(condition), true, label);
}

// --- 1. Palier de prix du gazon : < 50 m² -> sur devis ---
eq(P.gazonUnitPrice(1), null, "1 m² -> sur devis");
eq(P.gazonUnitPrice(10), null, "10 m² -> sur devis");
eq(P.gazonUnitPrice(25), null, "25 m² -> sur devis");
eq(P.gazonUnitPrice(49), null, "49 m² -> sur devis");
eq(P.gazonUnitPrice(49.99), null, "49,99 m² -> sur devis");

// --- 2. Palier de prix du gazon : >= 50 m² -> 9 DT/m² ---
eq(P.gazonUnitPrice(50), 9, "50 m² -> 9 DT/m² (borne incluse)");
eq(P.gazonUnitPrice(51), 9, "51 m² -> 9 DT/m²");
eq(P.gazonUnitPrice(60), 9, "60 m² -> 9 DT/m²");
eq(P.gazonUnitPrice(100), 9, "100 m² -> 9 DT/m²");

// --- 3. Montants totaux du gazon ---
eq(P.gazonTotal(1), null, "1 m² -> total sur devis");
eq(P.gazonTotal(10), null, "10 m² -> total sur devis");
eq(P.gazonTotal(49), null, "49 m² -> total sur devis");
eq(P.gazonTotal(50), 450, "50 m² -> 450 DT");
eq(P.gazonTotal(51), 459, "51 m² -> 459 DT");
eq(P.gazonTotal(100), 900, "100 m² -> 900 DT");

// --- 4. Les deux types de gazon suivent exactement la même règle ---
eq(P.GAZON_TYPES.length, 2, "2 types de gazon definis");
ok(P.GAZON_TYPES.some((t) => t.key === "americain"), "type 'americain' present");
ok(P.GAZON_TYPES.some((t) => t.key === "paspalum"), "type 'paspalum' present");
// La fonction de prix ne prend pas le type en paramètre : l'égalité est structurelle.
eq(P.gazonUnitPrice.length, 1, "le prix ne depend que de la surface, pas du type");

// --- 5. Packs terre végétale : volume = surface x epaisseur ---
eq(P.TERRE_PACKS.length, 3, "3 packs definis");
const pack10 = P.TERRE_PACKS.find((p) => p.epaisseurCm === 10);
const pack15 = P.TERRE_PACKS.find((p) => p.epaisseurCm === 15);
const pack20 = P.TERRE_PACKS.find((p) => p.epaisseurCm === 20);
eq(pack10.volumeM3, 5, "50 m² / 10 cm -> 5 m³");
eq(pack15.volumeM3, 7.5, "50 m² / 15 cm -> 7,5 m³");
eq(pack20.volumeM3, 10, "50 m² / 20 cm -> 10 m³");

// Les volumes annonces doivent correspondre au calcul generique
eq(P.terreVolume(50, 10), 5, "calcul 50 m² x 10 cm -> 5 m³");
eq(P.terreVolume(50, 15), 7.5, "calcul 50 m² x 15 cm -> 7,5 m³");
eq(P.terreVolume(50, 20), 10, "calcul 50 m² x 20 cm -> 10 m³");
P.TERRE_PACKS.forEach((p) => {
  eq(P.terreVolume(P.PACK_BASE_SURFACE, p.epaisseurCm), p.volumeM3, `pack ${p.key} coherent avec le calcul`);
});

// --- 6. Generalisation des packs au-dela de 50 m² ---
eq(P.terreVolume(100, 10), 10, "100 m² / 10 cm -> 10 m³");
eq(P.terreVolume(75, 20), 15, "75 m² / 20 cm -> 15 m³");

// --- 7. Devis complet : sous-total = gazon + terre ---
// La terre n'est plus un produit public du catalogue. Cette valeur ne sert ici
// qu'à conserver la couverture du calculateur de devis historique.
const prixTerre = 100;
const q1 = P.quote({ surfaceM2: 50, epaisseurCm: 10, prixTerreM3: prixTerre });
eq(q1.gazon.total, 450, "devis 50 m² : gazon = 450 DT");
eq(q1.terre.volumeM3, 5, "devis 50 m² / 10 cm : 5 m³ de terre");
eq(q1.terre.total, 5 * prixTerre, `devis 50 m² : terre = ${5 * prixTerre} DT`);
eq(q1.sousTotal, 450 + 5 * prixTerre, "devis 50 m² : sous-total = gazon + terre");

const q2 = P.quote({ surfaceM2: 20, epaisseurCm: null, prixTerreM3: prixTerre });
eq(q2.gazon.total, null, "devis 20 m² sans terre : total sur devis");
eq(q2.terre, null, "devis sans terre : aucune ligne terre");
eq(q2.sousTotal, null, "devis 20 m² sans terre : sous-total sur devis");

// --- 8. Livraison : jamais chiffree automatiquement (sur devis) ---
eq(q1.livraison, null, "livraison non chiffree (sur devis selon l'adresse)");
eq(q2.livraison, null, "livraison non chiffree meme sans terre");

// --- 9. La terre vegetale ne peut pas etre commandee seule ---
// Le devis part toujours d'une surface de gazon : il n'existe aucun chemin
// permettant d'obtenir une ligne terre sans ligne gazon.
const q3 = P.quote({ surfaceM2: 0, epaisseurCm: 20, prixTerreM3: prixTerre });
eq(q3.terre.volumeM3, 0, "0 m² de gazon -> 0 m³ de terre (pas de vente seule)");
eq(q3.sousTotal, null, "0 m² de gazon -> sous-total sur devis");

// --- Rapport ---
console.log(`Tests de tarification : ${passed} assertions passees, ${failures.length} echec(s).`);
if (failures.length) {
  failures.forEach((f) => console.error("  ECHEC : " + f));
  process.exit(1);
}
