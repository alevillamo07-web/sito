# Piano d'azione per il lancio del sito — Studio Legale Villa

***

## Fase 1 — Fondamenta & Sicurezza
*Settimana 1–2 · Prerequisiti bloccanti al lancio*

### 🔴 Attività critiche

- **Registrare dominio custom**
  Acquistare `studiolegalevilla.it` (o `.com`) su Namecheap/Porkbun e collegarlo a Cloudflare Pages nelle impostazioni del progetto.

- **Sostituire API key Web3Forms hardcoded**
  Accedere al pannello Web3Forms e configurare whitelist dominio. Valutare migrazione a servizio EU-hosted come Resend o Brevo per conformità GDPR.

- **Self-hosting font Google**
  Installare `@fontsource/inter`, `@fontsource/playfair-display`, `@fontsource/jetbrains-mono` via npm. Rimuovere i tag `<link>` verso `fonts.googleapis.com` da `index.html`.

- **Creare file `_headers` Cloudflare Pages**
  Aggiungere `/public/_headers` con CSP, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, `Permissions-Policy`.

- **Aggiungere checkbox consenso privacy nel form**
  Inserire campo checkbox `required` con link alla Privacy Policy. Aggiungere anche campo "telefono" opzionale per facilitare il ricontatto.

### 🟡 Alta priorità

- **Rimuovere favicon Vite, inserire logo studio**
  Progettare favicon SVG con iniziali SL o logo dello studio. Aggiornare `href` nel `<head>`.

- **Configurare DMARC / SPF / DKIM sul dominio email**
  Una volta ottenuto il dominio, configurare record DNS email per evitare che le email di Web3Forms finiscano in spam e proteggere da spoofing.

***

## Fase 2 — GDPR & Legale
*Settimana 2–3 · Obbligatorio per legge*

### 🔴 Attività critiche

- **Aggiornare Privacy Policy su Iubenda**
  Aggiungere Web3Forms (o alternativa scelta) come sub-processor. Specificare finalità: "gestione richieste di appuntamento". Indicare periodo di conservazione dati.

### 🟡 Alta priorità

- **Configurare Cookie Banner Iubenda correttamente**
  Verificare che Google Fonts (dopo self-hosting) sia rimosso dalla lista. Assicurarsi che il banner blocchi effettivamente i cookie non tecnici prima del consenso.

- **Verificare DPA con il provider di hosting form**
  Ottenere Data Processing Agreement firmato dal provider usato per il form. Cloudflare Pages ne ha già uno automatico.

### ⬜ Media priorità

- **Aggiungere pagina `/note-legali`**
  Per uno studio legale è consigliabile avere anche una pagina con note legali: responsabilità professionale, non costituisce parere legale, ecc.

- **Registro dei trattamenti (art. 30 GDPR)**
  Come titolari del trattamento, lo studio deve tenere un registro interno. Non è un task tecnico del sito ma va fatto in parallelo.

***

## Fase 3 — SEO & Visibilità
*Settimana 3–4 · Trovabilità online*

### 🟡 Alta priorità

- **Aggiungere meta description e Open Graph tags**
  In `index.html`: `<meta name="description">`, `og:title`, `og:description`, `og:image`, `og:url`, `og:locale`. Fondamentale per come il sito appare su Google e social.

- **Implementare JSON-LD structured data (LocalBusiness)**
  Aggiungere `schema.org/LegalService` con nome, indirizzo, telefono, orari. Migliora drasticamente la visibilità locale su Google Maps e Knowledge Panel.

- **Creare `sitemap.xml` e `robots.txt`**
  Aggiungere `/public/sitemap.xml` e `/public/robots.txt`. Vite/Cloudflare Pages serve i file nella cartella `public` automaticamente.

- **Registrare su Google Search Console**
  Dopo aver collegato il dominio, verificare proprietà su Search Console e inviare la sitemap. Monitorare indicizzazione.

- **Creare/ottimizzare Google Business Profile**
  La scheda Google My Business è il principale canale di acquisizione locale per uno studio legale. Foto, orari, categoria "Studio legale".

### ⬜ Media priorità

- **Ottimizzare tag `<title>` e `<h1>`**
  Il titolo attuale "Studio Legale Villa | Tre Generazioni di Rigore" è buono. Assicurarsi che il city name (Treviglio/BG) sia nei meta per la ricerca locale.

***

## Fase 4 — Performance & Accessibilità
*Settimana 4–5 · Qualità tecnica*

### 🟡 Alta priorità

- **Ottimizzare immagine `hero-bg.png`**
  Convertire `hero-bg.png` in formato WebP/AVIF. Aggiungere attributo `loading="lazy"` dove applicabile. Ridurre dimensioni senza perdita visiva apprezzabile.

- **Aggiungere attributi `aria-label` e `alt` mancanti**
  Verificare con axe DevTools: bottoni icon-only, immagini decorative (`aria-hidden`), landmark regions. Lo studio legale ha utenti potenzialmente anziani.

- **Testare su mobile (iOS Safari e Android Chrome)**
  Verificare modal di prenotazione, navbar, hero section. iOS Safari gestisce `dvh` in modo diverso.

### ⬜ Media priorità

- **Aggiungere `vite.config.js` ottimizzazioni build**
  Aggiungere `build.sourcemap: false` (sicurezza), `build.rollupOptions` chunk splitting, `build.minify: true`. Rimuovere `console.log` in produzione.

- **Aggiungere error boundary React**
  Wrappare `<App>` con un `ErrorBoundary` per gestire crash imprevisti con una UI di fallback invece di una pagina bianca.

### ⬜ Bassa priorità

- **Rimuovere file template inutilizzati**
  Eliminare `src/App.css` (stili Vite template non usati), `src/assets/react.svg`, `src/assets/vite.svg` dopo aver aggiunto la favicon custom.

***

## Fase 5 — UX & Contenuti
*Settimana 5–6 · Esperienza utente e credibilità*

### 🟡 Alta priorità

- **Aggiungere sezione "Chi siamo" / Profilo avvocati**
  Per uno studio legale la fiducia è tutto. Foto professionali, breve bio, anni di esperienza, specializzazioni. Aumenta drasticamente le conversioni.

- **Inserire numero di telefono cliccabile in hero**
  Il canale principale per i clienti è la telefonata. Aggiungere `<a href="tel:036348194">` ben visibile nella hero section, non solo nel footer.

### ⬜ Media priorità

- **Aggiungere campo "Telefono" nel form prenotazione**
  Molti clienti preferiscono essere ricontattati telefonicamente. Campo opzionale ma molto utile.

- **Implementare 404 page custom**
  Creare `/public/404.html` per Cloudflare Pages. Una pagina 404 professionale con link di ritorno alla home.

- **Valutare aggiunta sezione Recensioni/Testimonianze**
  Anche anonime ("Cliente nel diritto di famiglia"). Le testimonianze sono il principale driver di fiducia per uno studio legale online.

### ⬜ Bassa priorità

- **Aggiungere link a Google Maps nel footer**
  Linkare l'indirizzo "Viale Alcide De Gasperi, 6, Treviglio" a Google Maps per facilitare la navigazione.

***

## Fase 6 — Analytics & Monitoraggio
*Settimana 6–7 · Prima del lancio*

### 🔴 Attività critiche

- **Test end-to-end del form di prenotazione**
  Inviare 3-4 richieste di test dal sito in produzione. Verificare che le email arrivino allo studio, che il Reply-To sia corretto, che non finiscano in spam.

### 🟡 Alta priorità

- **Configurare Cloudflare Web Analytics (privacy-first)**
  Cloudflare offre analytics senza cookie e senza raccolta PII, integrato nativamente con Pages. Non richiede consenso cookie. Alternativa GDPR-safe a GA4.

- **Audit Lighthouse pre-lancio**
  Eseguire Lighthouse (Performance, Accessibility, Best Practices, SEO). Obiettivo: tutti i punteggi ≥ 90. Correggere i problemi segnalati.

- **Test cross-browser (Chrome, Firefox, Safari, Edge)**
  Verificare che il sito funzioni correttamente su tutti i principali browser. Testare in particolare la modal su mobile Safari.

### ⬜ Media priorità

- **Configurare alert uptime (UptimeRobot gratuito)**
  Monitoraggio gratuito ogni 5 minuti. Notifica via email se il sito va offline. Fondamentale per un sito professionale.

***

## Riepilogo priorità

| Priorità | Attività |
|----------|----------|
| 🔴 Critica | Dominio, API key, font self-hosting, headers sicurezza, consenso privacy form, Privacy Policy, test form |
| 🟡 Alta | Favicon, DMARC/SPF/DKIM, cookie banner, DPA, meta/OG tags, JSON-LD, sitemap, GSC, GBP, ottimizzazione immagini, aria/alt, test mobile, "Chi siamo", tel in hero, Cloudflare Analytics, Lighthouse, test cross-browser |
| ⬜ Media | Note legali, registro trattamenti, vite.config ottimizzazioni, ErrorBoundary, campo telefono form, 404 custom, testimonianze, alert uptime |
| ⬇️ Bassa | Rimozione file template, link Google Maps |