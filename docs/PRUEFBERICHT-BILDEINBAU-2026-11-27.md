# Crosspoke v0.2.4 – Bildeinbau

Auf Nutzerauftrag „Bau sie ein“ wurden die 20 zuvor erstellten Motive in die passenden Spiel-Fragen integriert. Zuordnung unter data/question-images.json; identische Dateien unter assets/questions/ und site/dist/assets/questions/. Vorschau und ihre Assets bleiben erhalten.

Bilder erscheinen unter Frage und Einheit bereits vor H1 und bleiben bei H1, H2 und Auflösung sichtbar. 166 Fragen ohne Bild haben keinen Bildplatzhalter. Bei Ladefehler wird das Bild ausgeblendet und eine kurze Meldung gezeigt; die Frage bleibt bedienbar. Pause blendet Frage samt Bild aus. Keine Änderungen an Fragetexten, Antworten, Hinweisen, Revisionen, Auswahl, Wertung oder Blinds. Fragenbank v0.9 bytegleich mit dem vorherigen Stand.

## Tatsächlich geprüft

- Script-Syntax, bestehender Standalone-Import, 186 Fragen ohne Wiederholung und 744 geschützte Phasenprojektionen bestanden.
- Synchronisationsprüfung um 20 Bildzuordnungen und root/Sites-Assetgleichheit ergänzt; bestanden.
- Im tatsächlichen Standalone-Bildschirm mit deterministischer lokaler Testauswahl alle 20 Motive geladen. QA-Auswahl verändert nur den lokalen Testdatensatz und wird nicht veröffentlicht.
- Giraffenfrage von Frage über H1/H2 bis Antwort geprüft: Bild und Einheit bleiben sichtbar; vorhandener Doppelklickschutz unverändert.
- Reine Textfrage ohne Bildbereich geprüft.
- Absichtlich fehlende Bilddatei geprüft: Meldung sichtbar, danach H1 erfolgreich aufgedeckt.
- Pause geprüft: keine Frage und kein Bild im Pausenbildschirm.
- Handyansicht 390×844 und Desktopdarstellung geprüft; bei langen Kombinationen kann weiterhin vertikal gescrollt werden.
- 31 historische Core/Web-Tests erneut aus ihrem Paketverzeichnis bestanden; sie ersetzen die aktuellen UI-Prüfungen nicht.
- 20 Notion-Bildprüfungsfelder mit Nutzerfreigabe und Umsetzungsstand ergänzt und zurückgelesen, keine Abweichung.

## Grenzen

Keine reale Gruppen-Spielrunde, keine vollständige Safari-/iPhone-Hardwareabnahme oder neue unabhängige Motiv-/Modellfachprüfung. Bestehende MemoryStorage-Reload-Grenze unverändert. Bilder sind die vom Nutzer zum Einbau freigegebenen Motivstudien. Render unverändert, GitHub-Commit mit [skip render].

Veröffentlichung auf bestehender Site vorbereitet; tatsächlichen Sites-Rückgabestatus im Abschlussnachweis dokumentieren.

## Veröffentlichung v0.2.4 beauftragt · 27.11.2026

20 Bilder im Spiel, 186 Fragen unverändert. Letzter Sites-Status: pending/publishing; noch kein bestätigter Live-Erfolg der neuen Version. URL: https://crosspoke-test.do-peter.chatgpt.site . Deployment: appgprj_6b088e014a708191901daa5359dc984d~appgdep_a99c5162ed9081918fe9930912b09efc. Sites-Quellcommit: d2080386ac40cac57d00bd753ea1834f031e1844. GitHub-Inhaltscommit: 202fb7b4d049ce6772eec3dee0fb8ac8fa519454. Bei Statusnachfrage dieses Deployment prüfen, nicht erneut veröffentlichen. Nachweis: docs/redaktion/2026-11-27-bildeinbau-veroeffentlichung.json. Render unverändert.
