// Liste des plantes d'intérieur du catalogue (miroir des noms définis dans app.js,
// dans les 3 langues) utilisée pour générer du contenu texte sur les pages
// catégorie. Le catalogue interactif (recherche, images, WhatsApp) reste piloté
// par app.js sur la page d'accueil.
const plantesInterieur = {
  fr: [
    "Arbre du voyageur", "Cactus oursin", "Cactus vieillard du Pérou", "Châtaignier de la Guyane",
    "Cintha", "Dragonnier de Madagascar", "Dragonnier de Massange", "Echeveria 'Dionysos'",
    "Faux philodendron", "Figuier caoutchouc", "Figuier pleureur", "Fleur de lune",
    "Gymnocalycium baldianum", "Palmier nain", "Palmier éventail", "Plante maïs",
    "Plante mosaïque", "Plante zèbre", "Scindapsus doré", "Yucca d'intérieur",
  ],
  en: [
    "Travelers Tree", "Sea urchin cactus", "Old man cactus of Peru", "Guyana chestnut",
    "Cinta", "Madagascar dragon tree", "Massange dragon tree", "Echeveria 'Dionysos'",
    "False philodendron", "Rubber fig", "Weeping fig", "Peace lily",
    "Gymnocalycium baldianum", "Dwarf palm", "Fan palm", "Corn plant",
    "Mosaic plant", "Zebra plant", "Golden pothos", "Indoor yucca",
  ],
  ar: [
    "شجرة المسافر", "صبار القنفذ البحري", "صبار عجوز بيرو", "كستناء غيانا",
    "سينثا", "شجرة تنين مدغشقر", "شجرة تنين ماسانج", "إشفيرية ديونيسوس",
    "فيلوديندرون مزيف", "فيكس مطاطي", "فيكس باكي", "زنبق السلام",
    "جمنوكاليسيوم بالدينوم", "نخيل قزم", "نخيل مروحي", "نبات الذرة",
    "نبات الفسيفساء", "نبات الحمار الوحشي", "بوتس ذهبي", "يوكا داخلية",
  ],
};

module.exports = { plantesInterieur };
