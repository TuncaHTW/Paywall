# Paywall-Übung (Level 1-3)

Diese Übung besteht aus drei Levels, in denen du verschiedene Paywall-Mechanismen überwinden sollst. Ziel ist es, typische Schwachstellen zu erkennen und mit den DevTools oder einfachen Scripts zu umgehen.

## Level 1: Einfache HTML-Paywall
- Öffne `level1.html`.
- Die Paywall ist ein simples Overlay im HTML.
- Entferne das Overlay mit den Entwicklertools, um den Artikel zu lesen.

## Level 2: JavaScript-Paywall
- Öffne `level2.html`.
- Nach 2 Sekunden erscheint ein Overlay, das per JavaScript eingeblendet wird und das Scrollen blockiert.
- Entferne das Overlay-Element und setze das Scrollen wieder frei (z.B. `overflow`-Eigenschaft von `<body>`).
- Tipp: Nutze die Entwicklertools deines Browsers.

## Level 3: API-Paywall mit Schwachstelle
- Öffne `level3.html` (funktioniert nur lokal oder auf GitHub Pages wegen Modulimport!).
- Der Artikeltext wird per JavaScript von einer Fake-API geladen.
- Standardmäßig siehst du nur einen Teaser.
- Untersuche die Netzwerk-Requests im DevTools-Netzwerk-Tab.
- Simuliere einen Request mit dem Header `X-Bypass: 1`, um den vollen Artikeltext zu erhalten.
- Tipp: Du kannst im Browser-Konsolenfenster z.B. Folgendes ausführen:
  ```js
  import('./article-api.js').then(m => m.fetchArticle({'X-Bypass': '1'})).then(r => console.log(r.text))
  ```

---

## Deployment auf GitHub Pages
1. Repository auf GitHub anlegen (z.B. `paywall-exercise`).
2. Alle HTML- und JS-Dateien sowie dieses README.md hochladen.
3. In den Repository-Einstellungen unter "Pages" den Branch `main` und das Wurzelverzeichnis (`/`) auswählen.
4. Die Seite ist dann unter `https://<username>.github.io/paywall-exercise/` erreichbar.

---

Viel Erfolg beim Knacken der Paywalls! 🚀