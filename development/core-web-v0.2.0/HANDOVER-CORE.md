# Codex Handover – Crosspoke M4.3

**Stand:** 26.11.2026, Core v0.1.0. Notion M4.2: https://app.notion.com/p/424f73ae951f816f9da0e84530307823. Fragenbestand: https://app.notion.com/p/424f73ae951f81efab83fcc7c8c0df38.

## Übergabe

1. Erst nach Nutzerfreigabe den Mac-Projektordner anlegen und dieses Paket übernehmen. Keine bestehenden Ordner überschreiben. Fragenbank v0.7 und Schema 1.4 als technische Grundlage bewahren.
2. `npm install`, `npm test`; 26 Kernprüfungen müssen wieder erfolgreich sein. Optional `python scripts/validate-data.py` und Browser-Smoke-Test nach Installation von Playwright/Chromium ausführen. Browser-Test hier blockiert, nicht als PASS werten.
3. M4.4: responsive React/TypeScript-Oberfläche (Vite vorgeschlagen), Start/Fortsetzen, Preset/Spielerzahl, gemeinsame Spielansicht, Pause, Meldung/Skip, All-in, Fold, Handabschluss mit Anzahl ausgeschiedener Spieler, Abschlussstatistik. Vier sichtbare Phasen Frage/Hinweis 1/Hinweis 2/Antwort. Moderne dunkelblaue/goldene Optik, große Schrift, keine Pflicht-Timer. Optionale Fragekontexte vor Schätzung, Antworterklärung nach Auflösung. Regeln/Einheiten immer eindeutig anzeigen. Vorhandene Engine verwenden statt Logik duplizieren.
4. Storage: IndexedDbStorage.open(), Controller mit Browser-Zeit und UUID, `view` für Rendering; keine rohen Daten im UI. Heartbeat / Recover und Fehlerzustände umsetzen. Aktionen erst nach erfolgreicher Speicherung darstellen. Wiederholung nur nach Bestätigung. Mehrfachklick-Guard im UI zusätzlich zur Versionsprüfung. UI darf keine zukünftigen Hinweise anzeigen. Test-Mode sichtbar kennzeichnen. Offline-App-Shell/Caching in M4.4 ergänzen.
5. M4.5: eventuelle Node-API + PostgreSQL, Outbox-Upload mit Retry/Backoff, eventId eindeutig, Dashboardzugang schützen. Telemetrie erst bei geeigneter Rechtsgrundlage und transparenter Information aktivieren. Kein Cloud-Service eingerichtet. M4.6 Browser/E2E/Deployment; M5 Playtests; M6 Balancing; M7 300 freigegebene Fragen.

## Entwicklungsrollen (Vorschlag)
Game Designer: Regeln/Blind-Balancing; Software Engineer: Architektur/Implementierung; QA: Zustands- und Regressionsprüfungen; UX Designer: gemeinsame Anzeige; Data Analyst: Events/KPIs; Content Editor: Fragequalität. Keine neuen externen Agenten angelegt.

## Changelog
- v0.1.0: Spielkern, Blind-/Quizlogik, Speicheradapter, lokale Berichte und Analytics-Outbox; Datenbank v0.7 importiert, unverändert. TypeScript Build und 26 Node-Tests bestanden, JSON-Schema bestanden. Browser-Smoke-Test nicht ausführbar (Navigationsrichtlinie), keine Website implementiert.

## Offene technische Entscheidungen
Framework/Hosting/Backend finalisieren; Blind-Leiter nach Level 5 und nach letzter Stufe sowie Quick/Deep Defaults im Playtest validieren; Skip-Verhalten und Poolwiederholung wie M4.2 vorgeschlagen. Browser-Speicherprüfung auf Mac ausführen. Zusätzlich in späteren Versionen vollständige Save-Validierung und Migration, Outbox-Limits/Retention, Datenschutzentscheidung. Keine Veröffentlichung oder Mac-Dateiänderung erfolgt.
