# Crosspoke – Fragenübernahme und gezielte Prüfung

Stand: 27.11.2026. Nutzerauftrag: Fehler und Rundungen aus Aufnahmeprüfung beheben und bestehende Testversion aktualisieren.

## Bestand und Inhalte

Notion: 188 eindeutige Einträge. Technischer Testpool v0.9: 186 Fragen. CUR-0012 (M&M-Stapel: eigenständiger H2 offen) und CUR-0013 (Papierboot: Modell/Zählweise/Antwort offen) bleiben in Notion, aber außerhalb des Spielpools. Die bisherigen 30 Fragetexte, Lösungen und Einheiten wurden erhalten. HUM-0001 hatte bereits eine neuere Notion-Hinweisrevision 7; diese wird jetzt technisch nachgezogen. Die übrigen 29 technischen Altfragen bleiben als vollständige Objekte unverändert.

Spoilerkorrekturen: ENT-0009, GEO-0008, TEC-0004/0009/0010/0016, HIS-0007, SPO-0007. Rundungen und Bezugsstand unter anderem ECO-0005 (213 Tausend Tonnen, Bestand Ende 2023), CUR-0005 (6.963 Meter), ENT-0005 (10,2 Millionen Tickets), SCI-0004 (8,3 Minuten). Notwendige Genauigkeit wird bei 22 Zusatzfragen direkt unter der Frage angezeigt; ganze Zahlen erhalten keine zusätzliche Null-Nachkommastellen-Zeile. Europreise werden gegebenenfalls centgenau aufgelöst.

19 fehlende Quellenfelder wurden durch nachvollziehbare Belege ersetzt; 26 fehlende Antworterklärungen ergänzt. WINA war direkt im Wartungsmodus; Nissin-Unterlagen mit ausdrücklicher WINA-Zuordnung belegen die historische Nachfrage. Quellen-Endprüfung sämtlicher unveränderter Nebenfakten bleibt von dieser redaktionellen Aufnahmeprüfung getrennt. 156 zusätzliche Fragen werden als source_checked für den bestehenden Testmodus übernommen, nicht als endgültig approved; reale Playtests bleiben pending. Die anspruchsvolle Orgel-Frage bleibt gemäß Nutzerwunsch erhalten.

## Tatsächlich ausgeführte Prüfungen

- Aktuelle Standalone: beide Skriptblöcke syntaktisch gültig; tatsächlichen eingebetteten Core geladen und v0.9 importiert.
- Alle 186 Fragen ohne Wiederholung gezogen; danach bestehende Wiederholungsbestätigung.
- 744 Phasenprojektionen: Einheit immer vorhanden; H1, H2 und Lösung erst zur jeweiligen Phase sichtbar.
- Fehlerhafte doppelte IDs abgewiesen; Release-Modus bleibt gesperrt.
- Alle zusätzlichen Dezimalantworten haben eine explizite redaktionelle Genauigkeitsvorgabe.
- Browser: Start → Setup → Frage → H1 → H2 → Antwort → Antworterklärung → nächste Hand, außerdem Überspringen. 186-Fragen-Anzeige und neue Inhalte sichtbar.
- Browser bei 390×844: Frage, Einheit, Hinweise und Antwort lesbar; Genauigkeitszeile „Jahre · 1 Nachkommastelle“ geprüft und Screenshot gespeichert. Kein vollständiger Test aller 186 Textlayouts.
- Historisches Core/Web v0.2.0: 31 bestehende Tests erneut bestanden. Diese ergänzen die aktuellen Standalone-Prüfungen und ersetzen sie nicht.

## Grenzen

Kein realer Gruppen-Playtest, keine vollständige Safari-/iPhone-Hardwareprüfung und keine unabhängige neue Faktenzertifizierung jedes vorhandenen Hinweises. Keine Bildassets neu erzeugt oder eingebaut; gespeicherte Bildentscheidungen bleiben Konzeptprüfungen. MemoryStorage verliert die Partie beim Neuladen weiterhin. Kein neues Analytics- oder Persistenzsystem.

## Synchronisierung und Veröffentlichung

Aktive Mac-Kopie: /Users/peterdo/Documents/ChatGPT/Codex-Gamification/Codex Crosspoke. Bestehende Site-ID bleibt erhalten. GitHub-Commits mit [skip render]; keine Render-Änderung. Erst nach verifiziertem Notion-Abgleich und bestandenem Synchronisationscheck veröffentlichen. Konkrete Commit-/Deploymentnachweise werden nach tatsächlichem Abschluss in HANDOVER.md und docs/ZUSAMMENFASSUNG.md ergänzt.

Nachprüfung: Bei GEO-0008 auch die Antworterklärung vom früheren Eiffelturmvergleich auf den neuen hypothetischen Vergleich umgestellt; als zusätzliche Revision in Notion und im Vorher-/Nachher-Verlauf erhalten.

Abschluss: Notion-Korrekturen und Mac/GitHub abgeglichen. Sites-Update mit demselben Spielstand erfolgreich veröffentlicht (succeeded/ready). Live-Browser bestätigt 186 Testfragen und v0.2.3. Details: docs/redaktion/2026-11-27-veroeffentlichung.json.
