# Crosspoke – Table Mode v0.2.0 (M4.4)

Lokaler Web-Prototyp mit 30 Testfragen, integriertem M4.3-Kern, responsive dunkelblau-goldene UI. Nicht für öffentliche Veröffentlichung freigegeben.

## Start
Node.js 22+; ZIP später am freigegebenen Mac-Speicherort entpacken. Im Projektordner:

```sh
npm start
```

Im Browser http://127.0.0.1:4173 öffnen. Fertiges Bundle enthalten; für den Start kein npm install und keine Internetverbindung erforderlich. Kein `file://`-Start. Der Server bindet bewusst nur lokal. Für Änderungen: `npm install`, `npm run build:web`, `npm test`. Die einzige Entwicklungsabhängigkeit ist TypeScript; kein React/Vite benötigt. UI als dependency-freies JavaScript, Core TypeScript; ein späterer React-Adapter ist möglich.

## Umfang
Start/Fortsetzen, feste Presets Quick/Standard/Deep Stack, 2–8 Spieler, vier Phasen, Einheit, Kontext, Antworterklärung und Quellen, Blind-Level und Spielerzahl, Pause, All-in, Fold, Report/Skip, Handabschluss, Ausscheiden, Spielende, Vollbild falls Browser unterstützt, Regeln. IndexedDB über vorhandenen Controller, Service Worker für Offline-Caching nach erfolgreichem ersten Laden. Keine Online-Synchronisierung. Keine Garantie bei Speicherlöschung; erster Offline-Aufruf benötigt vorhandenen Cache. Testbestand v0.7 bleibt unverändert; alle 30 Fragen redaktionelle Entwürfe. Keine digitalen Schätzungen/Chips, keine Registrierung, keine öffentliche Bereitstellung.

## Verifikation
- `npm test`: 26 Core-Tests und 5 DOM-light UI-Integrationstests mit MemoryStorage. Kein echter Browser-E2E-Test.
- `python scripts/validate-data.py` (jsonschema): Schema 1.4.
- `python scripts/ui-browser-test.py` (Python Playwright, Chromium über CHROMIUM-Pfad): tatsächlicher Browserablauf, Reload, Desktop/Mobil, All-in und Spielabschluss. In Arbeitsumgebung Navigation zu localhost durch Administrationsrichtlinie blockiert; nicht als bestanden werten. `scripts/browser-test.py` älterer Core-Speichertest, ebenfalls offen. Screenshots werden erst bei erfolgreichem Browserlauf erstellt.
- Service Worker, echte IndexedDB-Transaktionen, responsives Layout und Fullscreen noch auf realen Geräten verifizieren. Die Zeit ist eine aktive Nutzungszeit-Schätzung. Lokale Frageberichte gespeichert; kein zentraler Versand. Analytics-Telemetrie deaktiviert; M4.5 ergänzt API/Dashboard.
