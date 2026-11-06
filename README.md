# Gazon Tunisie

Site vitrine e-commerce minimaliste en HTML/CSS/JavaScript pur, avec une
architecture SEO multi-pages (gazon, palmier, villes, blog) générée par un
petit script Node.js.

## Lancer le site

Ouvrez `index.html` dans un navigateur, ou servez le dossier avec un petit serveur local.

## Architecture SEO & build des pages

Le site compte ~150 pages statiques réelles (50 pages x 3 langues : FR sans
préfixe, `/en/`, `/ar/`), générées depuis `src/data/` et `src/templates/` par
`scripts/build.js`. Chaque page existe dans les 3 langues avec balises
hreflang et un sélecteur de langue (liens réels, pas de bascule JS). Le
catalogue de plantes d'intérieur sur la page d'accueil (recherche, commande
WhatsApp) reste géré par `app.js`, qui lit la langue de la page via
`window.GG_LANG` (défini par un `<script>` inline propre à chaque variante
`/`, `/en/`, `/ar/` de l'accueil).

```
src/
  data/
    i18n.js        # config langues (fr/en/ar), prefixes URL, localizedPath()
    ui-strings.js  # nav/footer/breadcrumb traduits + noms de villes
    site.js        # NAP, prix, réseaux
    villes.js, produits.js, blog.js   # contenu traduit (clé `t: {fr,en,ar}`)
  templates/       # layout (hreflang, RTL, nav/footer), breadcrumb, schema.org, composants
  pages/           # un module par type de page, `build(registerPage, lang)`
scripts/
  build.js       # génère les 150 pages (3x50) + sitemap.xml (avec hreflang) + robots.txt
  verify.js      # contrôle qualité : liens internes, H1 unique, JSON-LD valide
docs/seo/        # checklist Google Business Profile (à appliquer manuellement)
```

Pour ajouter une langue supplémentaire : l'ajouter dans `src/data/i18n.js`
(`LANGUAGES`), puis compléter les dictionnaires `t: {...}` de chaque page.
Pour ajouter du contenu dans une langue déjà traduite (ville, article...), il
faut compléter les 3 variantes `fr`/`en`/`ar` de l'entrée concernée.

### Régénérer le site après une modification de contenu

```
npm run build     # régénère toutes les pages HTML, sitemap.xml et robots.txt
npm run verify    # vérifie liens internes cassés, balises H1/canonical/JSON-LD
npm test          # build + verify
```

Pour ajouter une ville de livraison, un article de blog ou une page produit,
il suffit d'ajouter une entrée dans le fichier `src/data/` correspondant puis
de relancer `npm run build` — aucune page n'a besoin d'être écrite à la main.

Le site reste 100% statique : les fichiers générés sont commités normalement
et servis tels quels par GitHub Pages, sans étape de build côté serveur.

## Configurer Google Sheets

Le navigateur ne peut pas écrire directement dans Google Sheets sans authentification. Le site attend donc une URL Web App Google Apps Script.

1. Créez un Google Sheet avec les colonnes: `Nom du client`, `Plantes`, `Bouquet`, `Numéro`, `Détail commande`, `Prix Total`, `Date`, `Statut`.
2. Dans Google Sheets, ouvrez `Extensions > Apps Script`.
3. Collez ce script complet en remplaçant `SHEET_NAME` si besoin:

```js
const SHEET_NAME = "Sheet1";
const HEADER_ROW = 4;
const FIRST_DATA_ROW = 5;
const FIRST_DATA_COLUMN = 2;
const PRICE_COLUMN = 7;
const HEADERS = [
  "Nom du client",
  "Plantes",
  "Bouquet",
  "Numéro",
  "Détail commande",
  "Prix Total",
  "Date",
  "Statut",
];

function getOrCreateOrdersSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  const headerRange = sheet.getRange(HEADER_ROW, FIRST_DATA_COLUMN, 1, HEADERS.length);
  const currentHeaders = headerRange.getValues()[0].join("");

  if (!currentHeaders) {
    headerRange.setValues([HEADERS]);
  }

  sheet.getRange(FIRST_DATA_ROW, PRICE_COLUMN, sheet.getMaxRows() - FIRST_DATA_ROW + 1, 1)
    .setNumberFormat('#,##0 "DT"');

  return sheet;
}

function getNextEmptyOrderRow(sheet) {
  const maxRows = sheet.getMaxRows();
  const customerColumnValues = sheet
    .getRange(FIRST_DATA_ROW, FIRST_DATA_COLUMN, maxRows - FIRST_DATA_ROW + 1, 1)
    .getValues();

  const firstEmptyIndex = customerColumnValues.findIndex((row) => !row[0]);
  return firstEmptyIndex === -1
    ? maxRows + 1
    : FIRST_DATA_ROW + firstEmptyIndex;
}

function parsePrice(value) {
  const price = Number(String(value || "").replace(",", ".").replace(/[^\d.]/g, ""));
  return Number.isFinite(price) ? price : 0;
}

function doGet(e) {
  const sheet = getOrCreateOrdersSheet();
  const params = e && e.parameter ? e.parameter : {};

  if (params.test === "1") {
    const nextRow = getNextEmptyOrderRow(sheet);
    sheet.getRange(nextRow, FIRST_DATA_COLUMN, 1, HEADERS.length).setValues([[
      "Client Test",
      "Plante Test (Qté: 1)",
      "2x Fleur Test",
      "+216 58 233 020",
      "TEST URL APPS SCRIPT",
      99,
      new Date().toISOString(),
      "Test",
    ]]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, testInserted: true, row: nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  if (params.customerName) {
    const nextRow = getNextEmptyOrderRow(sheet);
    sheet.getRange(nextRow, FIRST_DATA_COLUMN, 1, HEADERS.length).setValues([[
      params.customerName || "",
      params.plants || "",
      params.bouquet || "",
      params.customerPhone || params.phone || "",
      params.orderDetails || "",
      parsePrice(params.totalPrice),
      params.date || new Date().toISOString(),
      params.status || "Nouvelle commande",
    ]]);

    if (params.redirectUrl) {
      return HtmlService.createHtmlOutput(`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Redirection Gazon Tunisie</title>
            <style>
              body {
                margin: 0;
                display: grid;
                min-height: 100vh;
                place-items: center;
                background: #FDFBF7;
                color: #1A331E;
                font-family: Arial, sans-serif;
                text-align: center;
              }
              a { color: #1A331E; font-weight: 700; }
            </style>
          </head>
          <body>
            <main>
              <h1>Commande enregistrée</h1>
              <p>Redirection vers WhatsApp...</p>
              <p><a href="${params.redirectUrl}">Ouvrir WhatsApp</a></p>
            </main>
            <script>
              window.setTimeout(function () {
                window.location.replace(${JSON.stringify(params.redirectUrl)});
              }, 1200);
            </script>
          </body>
        </html>
      `);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, row: nextRow, method: "GET" }))
      .setMimeType(ContentService.MimeType.JSON);
  }

  return ContentService
    .createTextOutput(
      JSON.stringify({
        ok: true,
        message: "Gazon Tunisie Google Sheets endpoint is active.",
        sheetName: sheet.getName(),
        lastRow: sheet.getLastRow(),
      })
    )
    .setMimeType(ContentService.MimeType.JSON);
}

function doPost(e) {
  try {
    const sheet = getOrCreateOrdersSheet();
    const data = JSON.parse(e.postData.contents || "{}");
    const nextRow = getNextEmptyOrderRow(sheet);

    sheet.getRange(nextRow, FIRST_DATA_COLUMN, 1, HEADERS.length).setValues([[
      data.customerName || "",
      data.plants || "",
      data.bouquet || "",
      data.customerPhone || data.phone || "",
      data.orderDetails || "",
      parsePrice(data.totalPrice),
      data.date || new Date().toISOString(),
      data.status || "Nouvelle commande",
    ]]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true, row: nextRow }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Déployez en `Application Web`, avec ces options:
   - `Exécuter en tant que`: `Moi`
   - `Qui a accès`: `Tout le monde`
5. Copiez l’URL de déploiement dans `app.js`:

```js
const GOOGLE_SHEETS_WEBHOOK_URL = "VOTRE_URL_APPS_SCRIPT";
```

6. Ouvrez l’URL de déploiement dans votre navigateur. Si tout est bon, vous devez voir un message JSON avec `ok: true`.
7. Pour tester l’écriture dans le tableau, ajoutez `?test=1` à la fin de l’URL. Exemple: `VOTRE_URL_APPS_SCRIPT?test=1`. Une ligne test doit apparaître dans `B:I`.
8. Si vous modifiez le script Apps Script après un premier déploiement, cliquez sur `Déployer > Gérer les déploiements > Modifier`, puis choisissez une `Nouvelle version`.

Sans URL configurée, les commandes sont sauvegardées dans `localStorage` pour tester le flux.
