# Miixi – Sportkläder

Projektuppgift i kursen DT224G – Webbutveckling med HTML, CSS och JavaScript vid Mittuniversitetet.

**Skapad av:** Maida Erovic  
**Termin:** HT2026

## Publicerad webbplats

[Besök webbplatsen](https://maida1991.github.io/dt224g_maida_erovic_projekt/)

## Om projektet

Webbplatsen presenterar sportkläder med anknytning till Miixi.
Syftet är att ge inspiration för träning, en aktiv vardag och föreningsliv
samt hänvisa besökare till miixi.se för köp.

Målgruppen är personer som söker sportkläder samt lag och föreningar
som är intresserade av gemensamma kläder.

Webbplatsen är ett studentprojekt. Köp genomförs inte på projektsidan.

## Sidor

- **Hem:** introduktion, kategorier och presentation av verksamheten.
- **Kollektion:** information om träning, aktiv vardag och teamkläder.
- **Kontakt:** kontaktuppgifter och ett kontaktformulär.

## Tekniker

- HTML5 för semantisk struktur.
- CSS3 med Flexbox, Grid och media queries för responsiv layout.
- JavaScript för mobilmeny och formulärvalidering.
- Git och GitHub för versionshantering.
- GitHub Pages för publicering.

## Funktionalitet

- Responsiv layout för mobil och desktop.
- Mobilmeny som öppnas och stängs med JavaScript.
- Möjlighet att stänga mobilmenyn med Escape.
- JavaScript-validering av namn, e-postadress och meddelande.
- Felmeddelanden vid respektive formulärfält.
- Fokus flyttas till det första felaktiga fältet.
- Navigation mellan tre HTML-sidor.
- Länkar till Miixis webbshop och kundservice.

Kontaktformuläret är en demonstration. Inga meddelanden skickas
eller sparas av webbplatsen.

## Tillgänglighet

Webbplatsen använder bland annat:

- Semantiska HTML-element och en strukturerad rubrikhierarki.
- Alternativtexter för bilder.
- Etiketter kopplade till formulärfält.
- Synliga fokusmarkeringar.
- aria-current för den aktuella sidan.
- aria-expanded och aria-controls för mobilmenyn.
- aria-invalid och kopplade felmeddelanden vid formulärfel.

## Projektstruktur

- index.html – startsida.
- kollektion.html – kollektionssida.
- kontakt.html – kontaktsida.
- css/styles.css – webbplatsens stilmall.
- js/main.js – mobilmeny och formulärvalidering.
- images/ – logotyp och fotografier.
- design/ – exporterade wireframes och mockup.
- README.md – projektbeskrivning.

## Design

Webbplatsen planerades med ett wireframe för desktop, ett wireframe
för mobil och en mockup i Figma.

Exporterade designunderlag finns i mappen design.

## Versionshantering

Projektet har utvecklats stegvis med beskrivande commits.

- dev används för utveckling.
- main innehåller versionen som publiceras via GitHub Pages.
- Feature-grenar har använts för vissa avgränsade ändringar.

## Köra projektet lokalt

1. Klona repozitoriet:

   git clone https://github.com/maida1991/dt224g_maida_erovic_projekt.git

2. Öppna projektmappen i en kodredigerare.
3. Starta en lokal webbserver, exempelvis Live Server i VS Code.
4. Öppna index.html via den lokala webbservern.

Projektet kräver inga npm-paket eller byggkommandon.

## Genomförda funktionstester

Den lokala versionen vid commit 368f4c6 testades via file://
i en integrerad webbläsare.

Följande kontroller godkändes:

- Alla tre sidor kunde öppnas.
- Alla bilder visades utan trasiga bildlänkar.
- Mobilmenyn fungerade vid 375 px skärmbredd.
- Escape stängde menyn och flyttade fokus till menyknappen.
- Desktopnavigationen fungerade vid 1280 px skärmbredd.
- Ett tomt formulär gav felmeddelanden.
- En ogiltig e-postadress gav ett felmeddelande.
- Ett korrekt ifyllt formulär gav en demonstrationsbekräftelse.
- Inga konsolfel eller varningar registrerades på de tre sidorna.

Vid den första kontrollen efter ändrad skärmbredd behövde testet
vänta på att matchMedia-händelsen hade behandlats.

Testresultaten avser den angivna versionen. Senare ändringar
och den publicerade versionen behöver kontrolleras separat.

## Bilder och logotyp

Logotyp och fotografier har hämtats från Miixi:

https://miixi.se/

## Avgränsningar

- Ingen varukorg eller betalningsfunktion.
- Ingen backend eller databas.
- Kontaktformuläret skickar inga meddelanden.
- Köp och verklig kundservice hanteras på miixi.se.