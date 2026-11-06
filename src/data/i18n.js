// Configuration des langues du site. Le français est la langue canonique
// (URLs sans préfixe) ; l'anglais et l'arabe vivent sous /en/ et /ar/.
const LANGUAGES = {
  fr: { code: "fr", label: "FR", name: "Français", htmlLang: "fr", dir: "ltr", prefix: "", locale: "fr_TN" },
  en: { code: "en", label: "EN", name: "English", htmlLang: "en", hreflang: "en-TN", dir: "ltr", prefix: "/en", locale: "en_TN" },
  ar: { code: "ar", label: "AR", name: "العربية", htmlLang: "ar", hreflang: "ar-TN", dir: "rtl", prefix: "/ar", locale: "ar_TN" },
};

const LANGUAGE_LIST = Object.values(LANGUAGES);

// path canonique FR (ex: "/gazon-tunisie/") -> chemin localisé (ex: "/en/gazon-tunisie/")
function localizedPath(path, lang) {
  const prefix = LANGUAGES[lang].prefix;
  if (!prefix) return path;
  return path === "/" ? `${prefix}/` : `${prefix}${path}`;
}

module.exports = { LANGUAGES, LANGUAGE_LIST, localizedPath };
