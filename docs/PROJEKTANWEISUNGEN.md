# Crosspoke – Projektanweisungen

Autorisiert am 26.11.2026: vollständige lokale Übernahme, GitHub-/Notion-Abgleich und Sites-Testveröffentlichung.

## Verbindlicher Arbeitsablauf
- Aktive Mac-Kopie: `/Users/peterdo/Documents/ChatGPT/Codex-Gamification/Codex Crosspoke`.
- Vor Änderungen Notion-Hauptseite, Fragendatenbank, technische Spezifikation und lokale Übergabe lesen. Neuere bestätigte Entscheidungen ersetzen ältere Entwürfe; historische Pakete bleiben unverändert.
- Redaktionelle Quelle: Notion. Technischer Versionsstand: GitHub xpeeed/Crosspoke, main. Hosting: bestehende Crosspoke-Site. Keine automatische Vier-Wege-Synchronisierung behaupten.
- Vereinbarte Inhaltsänderungen zuerst in Notion pflegen, dann JSON mit identischen IDs, Revisionen und Status. Fragenänderungen benötigen ihre fachliche Freigabe; diese Migration ändert keine Fragen oder Spielregeln.
- `questions-v0.9.json` ist der aktuelle technische Datensatz (v0.8 bleibt als Historie erhalten); `data/` enthält Schema und Leseübersicht. `index.html` ist die aktuelle Standalone-Testseite. `site/dist/` wird daraus kopiert; mit `node scripts/check-sync.cjs` vor jedem Commit prüfen.
- Nach Änderungen Mac, GitHub, Notion-Snapshot und Sites abgleichen; Prüfergebnisse, Version und bestätigten Deploymentstatus in HANDOVER und Zusammenfassung pflegen. Nur unveränderte, getestete Artefakte veröffentlichen.
- Render nicht aktiv aktualisieren, Dienst nicht löschen. Auto-Deploy war aktiviert und wird durch diesen Auftrag nicht umkonfiguriert. Alle GitHub-Commits mit `[skip render]` versehen, damit sie kein Auto-Deployment auslösen. https://render.com/docs/deploys#skipping-an-auto-deploy
- Sites-ID: `appgprj_6b088e014a708191901daa5359dc984d`. Bestehende Site wiederverwenden; Zugang zunächst privat. Keine neue Site pro Änderung.

## Qualität und Abgrenzung
- Regeln: docs/regeln/Regelwerk-Table-Mode.md. Redaktionelle Anforderungen: data/Qualitaetsstandard.md und docs/notion/Fragendatenbank.md.
- Aktuell 186 Testfragen, zehn Kategorien, v0.9; zwei weitere Notion-Einträge zurückgestellt, keine abschließende Release-/Playtestfreigabe. Keine weiteren Fragen ohne Auftrag; Ziel 300 bleibt Release-Aufgabe.
- Hinweise einzeln und gemeinsam auf Informationsgewinn, Fakten, Kürze und Lösungslecks prüfen. H1 ungewöhnliche grobe Orientierung, H2 zusätzlicher konkreter Nutzen; keine präzise Berechenbarkeit.
- Bestehende Tests und gezielte Prüfungen je Änderung; historische Tests nicht als Tests der aktuellen Standalone ausgeben. Browser-, Geräte- und Playtestgrenzen ausdrücklich nennen.
- Standalone v0.2.3 nutzt MemoryStorage, verliert die Partie bei Reload. Core/Web v0.2.0 besitzt eine andere Persistenz-/UI-Architektur und v0.7-Daten. Das Paket unter development/ bleibt historisch und darf nicht als aktueller Release ausgegeben werden.
- Analytics-Backend, vollständige Geräteprüfung, Quellen-Endprüfung und spätere Zusammenführung der Entwicklungsstände bleiben offen.


## Nutzerauftrag vom 27.11.2026

Aufnahmeprüfung und anschließende Behebung der Fehler/Rundungen sowie Aktualisierung der bestehenden Testversion ausdrücklich beauftragt. Die zugestimmten Korrekturen sind damit autorisiert. Vollständige Revisionen: docs/redaktion/2026-11-27-aufnahme-korrekturen.json. Die ersten 30 Fragen werden nicht erneut redaktionell bearbeitet; eine bereits in Notion dokumentierte Hinweisrevision wird technisch synchronisiert.
