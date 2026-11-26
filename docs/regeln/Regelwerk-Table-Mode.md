# Table Mode – Regeln und aktueller UI-Stand
Quellen: Notion Crosspoke und M4.2, ergänzt durch neuere Entscheidung M4.4 v0.2.2. Keine eigenmächtige Neufestlegung von Regeln.

| Preset | Startchips | Hände pro Blind-Level | Zielzeit |
| --- | ---: | ---: | --- |
| Quick | 1.000 | 3 | 10–20 Min. |
| Standard | 2.000 | 3 | 15–30 Min. |
| Deep Stack | 4.000 | 4 | 30+ Min. |
Quick 1.000/3 und Deep 4 sind technische Defaults, nicht separat ausdrücklich bestätigte Detailparameter; Zeitziele sind Playtest-Hypothesen. Maximal 2–8 Spieler.

Start 25/50. Blind-Leiter: 25/50, 50/100, 100/200, 200/400, 300/600, 500/1000, 750/1500, 1000/2000, 1500/3000, 2000/4000, 3000/6000. Danach Verdopplung als technische Annahme. Wechsel ausschließlich vor der nächsten Hand; Skip zählt nicht.

## Handablauf
1. Blinds physisch setzen. Frage anzeigen, optionalen neutralen Kontext gemeinsam ansehen, verbindliche verdeckte Schätzung notieren. Erste Setzrunde.
2. Hinweis 1 aufdecken; zweite Setzrunde.
3. Hinweis 2 aufdecken; dritte Setzrunde.
4. Antwort aufdecken; letzte Setzrunde; Showdown. Kleinste absolute Abweichung gewinnt, Gleichstand Split Pot; Side Pots nach Pokerprinzip unter berechtigten Spielern.
5. Physische Potvergabe, Hand abschließen; Dealer weitergeben. Bei Blind-Wechsel zeigt die Website vor der nächsten Hand die neuen SB/BB-Werte an.

Vorzeitiges Handende: bis auf einen gefoldet, Pot physisch vergeben; keine automatische Elimination durch Fold. Bei All-in ohne weitere Setzentscheidung restliche Hinweise/Lösung aufdecken; sonst bei Side-Pot-Setzentscheidungen normal weiterspielen. Ungültige Frage: Einsätze inkl. Blinds zurückgeben, Skip bei gleicher Handnummer und Blinds, Frage für Partie sperren. Meldung allein ändert den Ablauf nicht. Pausenfunktion.

## Neueste UI-Entscheidung
Während physischer Partie nur SB/BB, keine Hand-/Spieler-/Level-/Timeranzeige. Keine Eliminationsabfrage; Spieler scheiden am Tisch aus. Sonderaktionen im !-Menü neben Regeln und Vollbild: All-in, Fold bis auf einen, Pause/Fortsetzen, Melden, Skip, manuelles Partieende bei feststehendem Sieger und Abbruch. Frage/Hinweise/Antwort kumulativ und möglichst gemeinsam lesbar, Zusatzinfos optional. Diese Entscheidung ersetzt die frühere digitale Eliminationszählung im Standalone-Prototyp.

Die Spielstands-/Historienpersistenz war als Anforderung bestätigt, ist im älteren Core/Web-Paket umgesetzt, aber im aktuellen Standalone nicht dauerhaft über Reload vorhanden. Vollständige Zusammenführung offen.
