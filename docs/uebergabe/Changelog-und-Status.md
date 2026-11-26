# Changelog – konsolidierter Projektstand
Quellen: Notion-Hauptseite und Fragendatenbank; GitHub Readback. Stand 26.11.2026.

| Phase | Stand |
| --- | --- |
| M1 | Konzept, zehn Kategorien, Ziel 300, Qualitätsstandard, separates Analytics-Dashboard vereinbart. |
| M2 | Table-Mode-Regeln und feste Presets konzeptionell abgeschlossen. |
| M3 | Modern Premium und sichtbare Phasen Frage/Hinweis 1/Hinweis 2/Antwort freigegeben. |
| M4.1 | 30 Testfragen; v0.1–v0.7 historisch archiviert, v0.8 nach erneutem Qualitätsreview. |
| M4.2 | Technische Spezifikation v1.0 mit 17 Akzeptanztests. |
| M4.3 | TypeScript Core v0.1.0: Game/Blind Engine, Quiz Engine, Memory/IndexedDB Storage, Ereignis-Outbox. 26/26 Node-Tests; Browserprüfung offen. |
| M4.4 v0.2.0 | Native JS Web-UI statt React, TypeScript Core, Service Worker, lokaler Server. 31/31 Node-Tests, Build/Schema/Syntax/HTTP/ZIP geprüft; echter Browsertest damals blockiert. |
| M4.4 v0.2.1 | Standalone HTML, GitHub und Render. Kein dauerhaftes Reload-Persistenz-/Analytics-Backend. |
| M4.4 v0.2.2 | Kompakter Table Mode, SB/BB, Blind-Dialog, !-Menü, manuelles Ende. Chromium-Test laut Notion (390×844) bestanden, Safari und alle Textlängen offen. |
| Fragen v0.8 | 23 geändert, 7 unverändert, 30 IDs. GitHub JSON und eingebetteter Stand abgeglichen. Keine Endfreigabe. |
| M4.5 | Analytics/API/Dashboard offen. |
| M4.6 | Vollständige Browser-/Gerätetests, Bereitstellung offen. |
| M5/M6/M7 | Playtests, Balancing, 300 freigegebene Fragen und Release offen. |

## GitHub-Revisionen
- v0.2.1: f28e2dfe0e758f559c0bb1041506a0bd7a8538d7
- v0.2.2: 95fe1acadbbc4f3711223b80b960a83e3c87f998
- v0.8 eingebettete Fragen: 814fd7d225391c4dd25a7407d613573455f0f744
- v0.8 separate JSON: 621d584542423d2ddb04bb6752a45480191b154d

Render: v0.2.2 (ursprünglicher Deploy) live bestätigt; danach Nutzerentscheidung, keine aktive Render-Synchronisierung mehr. Auto-Deploy wurde nicht deaktiviert. Sites als neue Testumgebung gewünscht; keine Site veröffentlicht.
