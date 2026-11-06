// Source unique de vérité pour la tarification du gazon et des packs terre végétale.
//
// Ce module est utilisé à trois endroits, pour qu'il n'existe jamais deux règles
// de prix divergentes dans le projet :
//   1. la génération des pages (build) ;
//   2. les tests (scripts/test-pricing.js) ;
//   3. le calculateur de devis côté navigateur, qui reçoit ces constantes
//      sérialisées dans window.GG_PRICING (voir templates/page.js et quote.js).
//
// Règle de prix du gazon : le tarif dépend de la surface TOTALE commandée,
// pas du type de gazon. Les deux types sont au même prix.

const GAZON_TYPES = [
  { key: "americain", t: { fr: "Gazon américain", en: "American lawn", ar: "عشب أمريكي" } },
  { key: "paspalum", t: { fr: "Gazon Paspalum", en: "Paspalum lawn", ar: "عشب باسبالوم" } },
];

// Seuil (en m²) à partir duquel le tarif dégressif s'applique.
const GAZON_TIER_THRESHOLD = 50;
const GAZON_PRICE_BELOW = null; // Sur devis pour une surface < 50 m²
const GAZON_PRICE_FROM = 9; // DT/m² pour une surface >= 50 m²

// Packs terre végétale : la terre n'est jamais vendue seule, uniquement
// adossée à une surface de gazon. Volume = surface x épaisseur.
const PACK_BASE_SURFACE = 50; // m² de gazon couverts par les packs de référence
const TERRE_PACKS = [
  { key: "10cm", epaisseurCm: 10, volumeM3: 5 },
  { key: "15cm", epaisseurCm: 15, volumeM3: 7.5 },
  { key: "20cm", epaisseurCm: 20, volumeM3: 10 },
];

/** Prix unitaire du gazon (DT/m²) pour une surface totale donnée. */
function gazonUnitPrice(surfaceM2) {
  return surfaceM2 >= GAZON_TIER_THRESHOLD ? GAZON_PRICE_FROM : null;
}

/** Montant total du gazon pour une surface donnée. */
function gazonTotal(surfaceM2) {
  const unitPrice = gazonUnitPrice(surfaceM2);
  return unitPrice === null ? null : round2(surfaceM2 * unitPrice);
}

/**
 * Volume de terre végétale (m³) pour une surface et une épaisseur données.
 * Généralise les packs de référence à toute surface : volume = surface x (cm/100).
 */
function terreVolume(surfaceM2, epaisseurCm) {
  return round2((surfaceM2 * epaisseurCm) / 100);
}

/** Montant de la terre végétale, au prix au m³ fourni. */
function terreTotal(surfaceM2, epaisseurCm, prixM3) {
  return round2(terreVolume(surfaceM2, epaisseurCm) * prixM3);
}

/**
 * Devis complet. `epaisseurCm` vaut null si le client ne prend pas de terre.
 * La livraison n'est jamais chiffrée ici : elle dépend de l'adresse et est
 * communiquée par le vendeur avant confirmation (choix client assumé).
 */
function quote({ surfaceM2, epaisseurCm = null, prixTerreM3 }) {
  const gazon = {
    surfaceM2,
    unitPrice: gazonUnitPrice(surfaceM2),
    total: gazonTotal(surfaceM2),
  };
  const terre = epaisseurCm
    ? {
        epaisseurCm,
        volumeM3: terreVolume(surfaceM2, epaisseurCm),
        prixM3: prixTerreM3,
        total: terreTotal(surfaceM2, epaisseurCm, prixTerreM3),
      }
    : null;
  return {
    gazon,
    terre,
    sousTotal: gazon.total === null ? null : round2(gazon.total + (terre ? terre.total : 0)),
    livraison: null, // sur devis, selon l'adresse
  };
}

function round2(n) {
  return Math.round(n * 100) / 100;
}

module.exports = {
  GAZON_TYPES,
  GAZON_TIER_THRESHOLD,
  GAZON_PRICE_BELOW,
  GAZON_PRICE_FROM,
  PACK_BASE_SURFACE,
  TERRE_PACKS,
  gazonUnitPrice,
  gazonTotal,
  terreVolume,
  terreTotal,
  quote,
};
