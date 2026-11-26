# Crosspoke

Table Mode **v0.2.2**, Fragenbestand **v0.8** (30 Testfragen, kein Release).

- [Sites-Testversion](https://crosspoke-test.do-peter.chatgpt.site) – privat; Veröffentlichung am 26.11.2026 angefordert, letzte Rückmeldung `pending/publishing`.
- [Notion](https://app.notion.com/p/424f73ae951f8142944ff6f38e741eb7)
- [GitHub](https://github.com/xpeeed/Crosspoke)

## Ablage
- `index.html`, `questions-v0.8.json`: unveränderter aktueller GitHub-Spielstand.
- `site/`: Sites-Quellrepository, Hostingmanifest und statische Ausgabe.
- `data/`: Fragenbank, Schema, Übersicht, Qualitätsstandard.
- `docs/konzept`, `docs/regeln`, `docs/pruefberichte`: Konzept, Regeln und überprüfbare Prüfberichte.
- `docs/notion`: 34 abgerufene Notion-Entitäten (Hauptseite, zwei Dokumentseiten, Datenbankschema und 30 Fragedatensätze), Markdown/JSON sowie CSV mit allen abgefragten Eigenschaften. API-Snapshot, kein nativer Notion-Export oder Versionsverlauf.
- `development/core-web-v0.2.0`: vollständiges historisches Entwicklungspaket, einschließlich TypeScript, kompilierten Modulen, UI und Tests.
- `exports/`: unverändertes Übergabe-ZIP und zehn historische Pakete.

## Lokal starten
`python3 -m http.server 4173 --bind 127.0.0.1`, anschließend http://127.0.0.1:4173 öffnen.

Der aktuelle Standalone speichert laufende Partien nur im Arbeitsspeicher. Nach Neuladen ist die Partie weg. Keine zentrale Analytics-Anbindung. Historische Entwicklungspakete besitzen abweichende Funktionen und bleiben getrennt.

Vor Änderungen `AGENTS.md` lesen. Sync-Prüfung: `node scripts/check-sync.cjs`.
