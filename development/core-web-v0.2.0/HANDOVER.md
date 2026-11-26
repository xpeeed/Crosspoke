# Codex Handover – M4.4 / v0.2.0

Notion: https://app.notion.com/p/424f73ae951f8142944ff6f38e741eb7
Technische Spezifikation: https://app.notion.com/p/424f73ae951f816f9da0e84530307823

- Projekt später an vom Nutzer ausdrücklich freigegebenem Mac-Pfad entpacken. Dieses Paket enthält vollständigen Core, Fragenbank v0.7 und neue UI. Kein bestehendes Projekt überschreiben. M4.3-Dokumente als historische Referenz (`README-CORE.md`, `HANDOVER-CORE.md`).
- `npm start` (lokaler Server, Port 4173) und Browser öffnen. Bei Änderungen `npm install && npm run build:web && npm test`. Datenprüfung und Browsertest siehe README. UI verwendet bestehenden Controller und View-Projektion, kein zweiter Spielkern.
- Bewusste Architekturentscheidung: schlankes browsernatives JavaScript statt React/Vite, damit ohne zusätzliche Laufzeitabhängigkeiten testbar. UI kann später ausgetauscht werden. `web/ui.js` ist Quelle, `web/app.js` generiertes Bundle, nicht separat bearbeiten. Core in `src/`, kompiliert in `dist/`, Daten in `data/`.
- 31/31 Node-Tests: 26 Core, 5 UI-Integration mit MemoryStorage/DOM-Stubs. Browserprüfung blockiert; IndexedDB, Offline-Cache, TV/Mobil, Fullscreen und vollständiger Browserablauf noch offen. Keine Screenshots oder visueller Abnahmetest behauptet.
- M4.5: Zentrale Analytics-API, PostgreSQL oder alternative Datenhaltung abstimmen, Outbox/Batch-Upload idempotent, Dashboard geschützt. Telemetrie nur nach Datenschutzentscheidung, lokale Frageberichte weiterhin verfügbar. M4.6: E2E, visuelle Prüfung, Offline und Mehrtab, Hosting/Bereitstellung. M5: echte Runden; M6: Balancing; M7: Fragenbank 300 freigegebene Fragen.
- Keine Mac-Dateiänderung, kein Deployment. Version v0.2.0 ist interner Testprototyp. Blind-/Spielregeln und v0.7-Fragen unverändert gegenüber Core.
