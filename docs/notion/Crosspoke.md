Here is the result of "fetch" for the Page with URL https://app.notion.com/p/424f73ae951f8142944ff6f38e741eb7 as of 2026-11-26T19:56:58.516Z:
<page url="https://app.notion.com/p/424f73ae951f8142944ff6f38e741eb7" icon="♠️">
<ancestor-path></ancestor-path>
<properties>
{"title":"Crosspoke"}
</properties>
<iconMetadata>{"type":"emoji","emoji":"♠️"}</iconMetadata>
<content>
## Aktueller Übergabestand – Mac und Sites

<date start="2026-11-26" />: Bestand vor Änderungen geprüft. Aktive lokale Kopie: <code>/Users/peterdo/Documents/ChatGPT/Codex-Gamification/Codex Crosspoke</code>. Vollständiges Übergabepaket (63 Dateien), zehn historische ZIPs, Core/Web-Quellcode, Regeln, Qualitätsstandard und Fragenbank v0.8 übernommen. Struktur: docs, data, development, exports und site. Notion-API-Snapshot umfasst Hauptseite, Dokumentation, Spezifikation, Datenbankschema/Ansichten und alle 30 Datensatzseiten inklusive vorhandener historischer Texte; kein nativer Notion-Export oder interner Versionsverlauf.

[Crosspoke – Sites-Testversion](https://crosspoke-test.do-peter.chatgpt.site): private Testseite angelegt; Veröffentlichung beauftragt, letzte Rückmeldung <code>pending/publishing</code>, noch keine bestätigte erfolgreiche Bereitstellung. Site-ID <code>appgprj_6b088e014a708191901daa5359dc984d</code>, Quellcommit <code>3ed1e7c7e2916b4cb8a5171e30f864b29b56c130</code>. Aktuelle Spielversion v0.2.2, Daten v0.8 unverändert.

Prüfung: alle 30 Fragen bei aktiven Inhalten und Revisionen identisch mit GitHub/Übergabe; HTML und JSON bytegleich mit GitHub. Zwei Scriptblöcke syntaktisch gültig. 31/31 historische Core/Web-Tests auf Mac bestanden. Aktuelle Standalone im Browser von Start über beide Hinweise bis Antwort und bei 390×844 geprüft. Keine vollständige Safari-/Geräte-/E2E-Abnahme.

Künftig: Notion redaktionell → identisches versioniertes JSON/HTML → GitHub → Sites, lokalen Stand und Prüfbericht mitführen. Keine automatische Hintergrundsynchronisierung eingerichtet. Render bleibt bestehen und wird nicht aktiv aktualisiert; GitHub-Übernahme mit <code>[skip render]</code>, Auto-Deploy-Einstellung unverändert.

Offen bleiben Persistenz der aktuellen Standalone (Partie geht bei Reload verloren), Zusammenführung der aktuellen Änderungen mit dem historischen Core/Web-Paket, Analytics/Dashboard, vollständige Geräteprüfung und unabhängige Fragen-Endfreigabe. Nachstehende ältere Statusangaben bleiben als Entwicklungshistorie erhalten.

<b>Status:</b> Konzeptphase

## Vision Board

Crosspoke (Arbeitstitel) ist ein Quiz-Poker-Gesellschaftsspiel. Die Website ersetzt den Quizmaster, während Freunde gemeinsam am Tisch mit physischen Pokerchips, Dealer-Button, Small Blind und Big Blind spielen. Die Website ist auf Handy, Laptop, PC und Fernseher bzw. per Projektion nutzbar. Kein separater Quizmaster nötig.

## Bestätigte Anforderungen

- Zentrale Website präsentiert Fragen und später die Auflösung.
- Physische Pokermechaniken und Rollen werden von den Spielern am Tisch verwaltet und weitergegeben.
- Alle Teilnehmer können mitspielen; kein zusätzlicher Spielleiter erforderlich.
- Inspiration: Quiz-Poker im Stil einer TV-Show.

## Vorschläge (noch nicht beschlossen)

- Schätzfragen, verdeckte Antworten auf Papier, Setzphasen und anschließende Auflösung auf dem gemeinsamen Bildschirm.
- Vollbildmodus, große Schrift, manuelles Weiterklicken und optionaler Timer.
- Vollständig digitaler Online-Modus allenfalls später als Erweiterung.

## Offene Entscheidungen

- Genaue Reihenfolge von Frage, Antwortabgabe, Setzrunden, möglichen Hinweisen und Auflösung.
- Fragenformate, Kategorien, Quellen und Schwierigkeit.
- Umgang mit Gleichständen, Chips, Blinds und Spielende.
- Bedienung der gemeinsamen Anzeige und technische Umsetzung.

## Change log

- Projektname Crosspoke und Hybridkonzept erfasst. Website noch nicht implementiert.

## Mechanik-Analyse – Arbeitsstand

<b>Nutzerpräferenz:</b> Keine feste Anzahl an Fragen als primäre Spielbegrenzung. Startbudget und anfängliche Small/Big Blinds sollen einstellbar sein; Blind-Erhöhungen nach gespielten Fragen oder Zeitintervall sind gewünscht. Mac-Projektordner erst auf gesonderte Anweisung anlegen.

<b>Regelvorschlag zur Diskussion:</b> Turnier mit gleich großen Startstacks und Ausscheiden bei Chipverlust; Blind-Wechsel erst zur nächsten Hand. Eine Hand besteht aus Blinds, Frage, verbindlicher verdeckter Schätzung, Setzrunde, Hinweis 1, Setzrunde, Hinweis 2, Setzrunde, Auflösung, letzter Setzrunde und Showdown. Bei einem einzigen verbleibenden Spieler endet die Hand sofort. Kleinste absolute Abweichung gewinnt, Gleichstand führt zum Split Pot. All-in und Side Pots nach Pokerlogik. Diese Details sind noch nicht beschlossen.

<b>Referenzen:</b> [TV-Konzept](https://de.wikipedia.org/wiki/Das_Duell_um_die_Geld), [bestehende Quizpoker-Spielanleitung](https://quizpoker.app/de/instruction), [Poker-Turnierregeln](https://www.pokertda.com/view-poker-tda-rules/).

## Game Design – Zustimmung und Hinweisqualität

Der Nutzer bewertet das zuvor vorgestellte Regelkonzept insgesamt als passend (Last Man Standing, numerische Schätzfragen, unveränderliche verdeckte Antworten, zwei Hinweise, vier Setzrunden, River-Auflösung vor der letzten Setzrunde, kleinste absolute Abweichung, konfigurierbare Blind-Progression, optionale Zeitlimits/Rebuy, geprüfte Fragenbank und Pokerregeln inklusive Side Pots und Heads-up). Detailparameter bleiben offen.

<b>Neue verbindliche Designanforderung:</b> Hinweise dürfen weder einzeln noch in Kombination die richtige Antwort unmittelbar oder mit hoher Genauigkeit errechenbar machen. Sie sollen die Einschätzung der ursprünglichen Schätzung verbessern, aber Unsicherheit und Bluffpotenzial bis zur Auflösung erhalten.

<b>Vorgeschlagener Qualitätsstandard:</b> Flop = grobe Orientierung; Turn = zusätzlicher, stärkerer Kontext ohne rechnerische Auflösung. Beide Hinweise gemeinsam auf indirekte Lösungslecks prüfen. River = richtige Antwort mit Quelle. Bei der Fragenerstellung und Freigabe die Hinweise als Paar beurteilen; keine Kombination aus Teilwert und präzisem Prozentanteil, die den Gesamtwert offenlegt.

Beispiel Erdoberfläche: Landfläche plus genauer Wasseranteil ist ungeeignet, da der Gesamtwert daraus berechenbar ist. Besser: Wasserfläche ist größer als Landfläche; Landfläche ca. 149 Mio. km². Letzteres ist ein Entwurfsbeispiel, noch nicht für die Fragenbank freigegeben.

## Fragendesign – Flop und Turn

<b>Nutzerentscheidung:</b> Der erste Hinweis (Flop) soll ein absurder, kurioser oder überraschender Vergleich sein (beispielsweise Flächen in Fußballfeldern), der zweite Hinweis (Turn) eine sachliche Zusatzinformation (beispielsweise ein Prozentanteil). Die Hinweise bleiben faktisch korrekt. Die bereits vereinbarte Regel gegen unmittelbare oder hochpräzise rechnerische Lösbarkeit gilt weiterhin für beide Hinweise gemeinsam.

<b>Redaktionelle Empfehlung:</b> Grobe Vergleiche oder unterschiedliche Bezugsgrößen verwenden. Beispiel Erdoberfläche: Flop – Der Pazifik allein ist größer als die gesamte Landfläche der Erde; Turn – Rund 71 % der Erdoberfläche sind mit Wasser bedeckt; River – rund 510 Mio. km². Beispiel noch nicht für die Fragenbank freigegeben.

## Präzisierung – Crazy Fact

Der Nutzer möchte beim Flop wirklich ungewöhnliche Maßeinheiten oder absurde Größenvergleiche, nicht bloß überraschende geografische Fakten. Korrigiertes Beispiel: Frage nach gesamter Erdoberfläche in Mio. km²; Flop: Auf die gesamte Landfläche der Erde passen ungefähr 20 Milliarden Fußballfelder (grob gerundet, Referenzfeld 105 × 68 m); Turn: Die Landfläche macht ungefähr ein Drittel der Erdoberfläche aus (tatsächlich rund 29 %); River: rund 510,1 Mio. km². Die bewusste Rundung lässt nur eine grobe Annäherung zu. Beispiel ersetzt den bisherigen Pazifik-Vergleich als Designillustration; noch kein freigegebener Fragenbankeintrag.

## M1 – Fragendatenbank: Umfang und Qualitätsziele

<b>Nutzeranforderungen:</b> Mindestens 30 numerische Schätzfragen pro Kategorie zum Start; möglichst wenige Wiederholungen; dauerhaft erweiterbare Fragendatenbank. Zehn bisherige Kategorien erscheinen dem Nutzer ausreichend. Schwierigkeitsgrade haben aus Nutzersicht geringe Bedeutung.

<b>Empfehlung (noch nicht abschließend bestätigt):</b> Zehn Kategorien mit mindestens je 30 freigegebenen Fragen (mindestens 300 insgesamt): Geografie, Geschichte, Food & Drinks, Wissenschaft & Natur, Technologie, Sport, Wirtschaft, Film & Musik, Mensch & Psychologie, Kurioses Wissen. Weitere Themen als Unterthemen integrieren. Keine verpflichtende Schwierigkeitsauswahl im Setup.

<b>Wiederholungslogik (Vorschlag):</b> Stabile eindeutige Fragen-IDs, keine Wiederholung innerhalb einer Partie; bereits gespielte Fragen auch über Partien hinweg lokal pro Browser/Gerät merken, ungespielte Fragen bevorzugen, neue Fragen sofort in den Pool aufnehmen. Bei erschöpftem Pool transparent Wiederverwendung erlauben oder Kategorie wechseln. Optional später geräteübergreifende Synchronisierung. Auch inhaltlich fast identische Fragen vermeiden.

<b>Qualitätsstandard (Vorschlag):</b> Crazy Fact = ungewöhnliche, anschauliche, faktisch korrekte Vergleichsgröße mit grober Orientierung; Hard Fact = verständliche, relevante sachliche Zusatzinformation, die den Schätzbereich sinnvoll einschränkt. Beide gemeinsam dürfen keine zu präzise Berechnung der Lösung ermöglichen. Frage, Einheit, Lösung, beide Hinweise, Quellen, Bezugsdatum (falls nötig), Kategorie und stabile ID strukturiert speichern. Quellen und Rundungen redaktionell prüfen; nur freigegebene Fragen ausspielen. Die 300 Fragen sind noch nicht erstellt.

## M1 – Konzept abgeschlossen

<b>Bestätigte Entscheidungen:</b> Zehn Hauptkategorien mit mindestens 30 Schätzfragen je Kategorie (mindestens 300 zum Start). Die fünf zusätzlichen Themen Gaming, Mobilität, Architektur, Gesellschaft und Lifestyle werden in bestehende Kategorien integriert. Keine verpflichtende Schwierigkeitsauswahl. Crazy Fact und Hard Fact gemäß vereinbartem Qualitätsstandard; strukturierte Frage-ID, Kategorie, Unterkategorie, Frage, Antwortwert, Einheit, Hinweise, Quelle, ggf. Bezugsdatum und Qualitätsstatus. Fragendatenbank kontinuierlich erweiterbar, Wiederholungen möglichst vermeiden; keine Wiederholung innerhalb einer Partie. Die Fragen sind noch nicht erstellt.

<b>Neue bestätigte Anforderung:</b> Ein separates Crosspoke-Analytics-Dashboard analog Stichwerk, mit Spielanzahl, Fragenhistorie und Häufigkeit je Frage zur laufenden Analyse und Bewertung; später auch für eine vollständig digitale Version nutzbar.

<b>Ausgestaltungsvorschläge:</b> Architektur als Unterkategorie von Geografie, Gaming und Mobilität unter Technologie, Gesellschaft und Lifestyle unter Mensch & Psychologie. Geräte-/Gruppenhistorie für die Fragenauswahl von aggregierter Dashboard-Statistik trennen; zentrale anonymisierte Ereignisse für Spielstart, Spielende, Frage angezeigt, Frage beendet, übersprungen oder gemeldet, sowie Blind-Level. Keine Pflicht zur Erfassung physischer Einsätze und Schätzungen. Digitale Version kann später zusätzliche Poker-KPIs liefern. Beispiel-KPIs sind Entwürfe, keine realen Daten.

## M2 – Beginn

Offen zur Abstimmung: Setup, Startstack und Blind-Progression, Kategorienauswahl, Timer und Pausen, optionale Rebuy-Regel, vorzeitiges Handende, All-in, Gleichstand, Fragenfehler und Wiederaufnahme. Keine Implementierung oder Mac-Ordner-Erstellung freigegeben.

## M2 – Überarbeitete Startwerte und Blind-Progression

<b>Nutzerentscheidungen:</b> Start-Blinds 25/50 (Small/Big), Standard-Startbudget 2.000 Chips pro Spieler, Deep Stack 5.000 Chips pro Spieler; Startbudget begrenzen, handbasierte Blind-Erhöhungen ausschließlich alle 3, 4 oder 5 Hände. Presets gewünscht, übrige M2-Themen später diskutieren.

<b>Konkretisierung zur Abstimmung:</b> Maximaler Startstack 5.000 pro Spieler; Quick 1.000 Chips / 3 Hände pro Level (20 BB), Standard 2.000 / 4 Hände (40 BB), Deep Stack 5.000 / 5 Hände (100 BB). Alle beginnen mit 25/50. Presets individuell anpassbar innerhalb der vereinbarten Grenzen. Rebuy vorläufig deaktiviert; Zeitmodus und weitere Modi noch zu klären. Neue Blinds gelten erst ab der nächsten Hand.

<b>Vorgeschlagene gemeinsame Blind-Leiter (SB/BB):</b> 25/50, 50/100, 75/150, 100/200, 150/300, 200/400, 300/600, 400/800, 600/1200, 800/1600, 1000/2000, 1500/3000, 2000/4000, 3000/6000; bei Bedarf fortsetzen. Nur die erste Stufe verdoppelt (bei kleinster Chip-Einheit 25); danach meist +33–50 %. Standard: Level 2 ab Hand 5, Level 3 ab Hand 9, Level 4 ab Hand 13 usw. Reale Spieldauer und Blind-Leiter durch Playtests validieren. Keine feste Rundenzahl als Spielende. Kein Code geändert.

## M2 – Presets V3 und Zielspieldauer

<b>Nutzerentscheidungen / aktualisierte Zielwerte:</b> Standard 2.000 Chips und Blind-Erhöhung alle 3 Hände; Deep Stack 4.000 Chips und Erhöhung alle 4 oder 5 Hände. Quick-Ziel 10–20 Minuten, Standard 15–30 Minuten (im Schnitt etwa 15 Hände, abhängig von Spieleranzahl), Deep Stack 30+ Minuten. Aggressive frühe Blind-Progression ausdrücklich gewünscht: Level 1 25/50, Level 2 50/100, Level 3 100/200, Level 4 200/400, Level 5 300/600 (SB/BB). Diese Angaben ersetzen die betreffenden älteren Entwürfe.

<b>Ergänzende Vorschläge zur Freigabe:</b> Quick 1.000 Chips / 3 Hände; Deep Stack standardmäßig 4 Hände, alternativ 5; maximales Startbudget 4.000 pro Spieler; Fortsetzung der Blind-Leiter 500/1000, 750/1500, 1000/2000, 1500/3000, 2000/4000, 3000/6000 und bei Bedarf weiter. Keine feste Handzahl oder harte Zeitbegrenzung. Blind-Wechsel erst zur nächsten Hand. Zeitziele sind Hypothesen für Playtests: Standard 15 Hände in 15–30 Min. erfordert durchschnittlich 1–2 Min. pro Hand, einschließlich Schätzung, bis zu vier Setzrunden und Abwicklung; frühe Folds und All-in-Abkürzungen helfen. Spielanzahl, Dauer, Hände und anfängliche Spielerzahl im Dashboard auswerten, um Presets zu validieren. Keine übrigen M2-Themen entschieden; kein Code oder Mac-Ordner geändert.

## M2 – Vereinfachter V1.0-Umfang

<b>Nutzerentscheidungen:</b> 2–8 Spieler (zur Bestätigung empfohlen und ausreichend); ausschließlich feste Presets Quick, Standard, Deep Stack, nur Spieleranzahl konfigurierbar; individuelle Preset-Konfiguration später möglich. Nur handbasierte Blind-Erhöhung. Keine Kategorieauswahl, zufälliger Fragenmix aus allen zehn Kategorien. Kein Rebuy/Wiedereinstieg, keine Antwort- oder Setzzeitlimits im Table Mode (später ggf. digital). Pausenfunktion, fehlerhafte Fragen melden und überspringen. Keine Registrierung/Nutzerkonten für V1.0. Zeitbasierte Blinds, Kategorieauswahl und Konten allenfalls spätere Erweiterungen.

<b>Noch zu bestätigen:</b> Automatische lokale Wiederherstellung einer laufenden Partie (Preset, Spieleranzahl, Handnummer, Blind-Level, aktuelle Frage-ID, bereits aufgedeckte Phase, Fragenhistorie und Pausenstatus; keine Erfassung physischer Chipstände oder Antworten). Vorzeitiges Handende: Bei Folds bis auf einen Spieler Pot physisch vergeben und zur nächsten Hand wechseln, Auflösung optional; bei All-in ohne weitere mögliche Setzentscheidungen verbleibende Hinweise/Lösung ohne Setzrunden aufdecken, Showdown am Tisch; bei möglichen Side-Pot-Setzentscheidungen regulär fortfahren. Fragenpool: ungespielte Fragen bevorzugen, keine Wiederholung innerhalb einer Partie solange möglich, bei erschöpftem gerätebezogenen Pool die am längsten nicht gezeigten Fragen wiederverwenden, neue Fragen priorisieren, gemeldete/problematische Fragen für die aktuelle Partie ausschließen und zur Prüfung ins Dashboard übernehmen. Deep Stack standardmäßig 4 Hände pro Blind-Level vorgeschlagen; 5 nur als frühere Alternative, nicht als V1.0-Setup-Einstellung. Keine Implementierung oder Änderung am Mac.

## M2 – Konzeptabschluss

<b>Bestätigt:</b> Automatische lokale Spielstandspeicherung, verkürzter All-in-Ablauf (Szenario B: keine weiteren möglichen Setzentscheidungen; sonst regulär fortfahren), intelligente Fragenpool-Wiederverwendung nach zuvor beschriebener Priorisierung. Der Nutzer möchte zu M3 wechseln. M2 ist konzeptionell ausreichend abgeschlossen. Vorzeitiges Handende bei Folds bis auf einen Spieler analog Poker und Deep Stack mit fest 4 Händen pro Level bleiben naheliegende, aber nicht separat ausdrücklich bestätigte Detailannahmen. Keine Implementierung.

## M3 – UI, UX & Branding: Entwurf

Vorgeschlagene Seiten: Startseite mit Neu/Fortsetzen und Spielregeln; Game Setup nur Preset und Spieleranzahl; zentrale responsive Spielansicht für Question, Crazy Fact, Hard Fact, Reveal und Showdown; Spielabschluss mit Sitzungsstatistik; separates Analytics-Dashboard. Designrichtung zur Diskussion: hochwertiges dunkles Poker-/Quizshow-Design, große TV-lesbare Schrift, wenige Bedienelemente, Animationen bei Enthüllungen, Vollbildmodus. Fortschritt und Blinds persistent sichtbar; Frage und bereits veröffentlichte Hinweise gemeinsam lesbar, keine zukünftigen Hinweise sichtbar. Manuelle Weitersteuerung ohne verpflichtende Eingabe physischer Aktionen. Offene M3-Entscheidungen: visuelle Richtung, Layout, Animationen/Sound, Steuerung und Branding. Mac-Ordner weiterhin erst auf gesonderte Anweisung.

## M3 – Konzeptabschluss und Designfreigabe

<b>Nutzerentscheidungen:</b> Sichtbare Phasenbezeichnungen ausschließlich Frage, Hinweis 1, Hinweis 2, Antwort; auch Timeline und Hinweisüberschriften entsprechend. Crazy Fact/Hard Fact bzw. Flop/Turn/River bleiben interne Konzepte, nicht sichtbare Phasennamen. Inhaltliche Hinweisstandards unverändert. Branding gemäß Vorschlag Modern Premium (Mitternachtsblau, Gold, helle Typografie) mit TV-Quizshow-Elementen. Weitere UI-/UX-Details dürfen eigenständig grob entworfen werden, orientiert an Pokerspielen und Quizspielen wie Quizduell. Logo, Sound, Animationen und Detailoptimierung später anhand des Prototyps. M3 konzeptionell abgeschlossen, keine finale Designabnahme oder Implementierung.

## M4 – Vorbereitung des spielbaren Prototyps

Empfohlener Umfang zur Abstimmung: responsive Table-Mode-Webapp mit Spielstart/Fortsetzen, drei festen Presets, 2–8 Spielern, handbasierten Blinds, zufälliger Fragenfolge, vier sichtbaren Phasen, verkürztem All-in, Handende, Spielerelimination, Pause, Fragenmeldung und Überspringen, lokalem Spielstand und Fragenhistorie, Abschlussstatistik. Separates Analytics-Dashboard mit persistenten anonymisierten Ereignissen und Fragenstatistik. Fragebank als unabhängig erweiterbarer strukturierter Datenbestand mit mindestens 300 freigegebenen Fragen zum vorgesehenen Start; kleinere Testmenge nur für interne technische Tests. Empfohlene Reihenfolge: technische Architektur und Datenschema, Kernlogik, Spieloberfläche, Fragenbank und Qualitätsprüfung, Dashboard-Anbindung, technische Tests, Bereitstellung für M5. Mac-Projektordner erst nach gesonderter Nutzeranweisung; keine Programmierung oder Bereitstellung in diesem Schritt.

## M4 – Fragenbank v0.1: erstes Datenpaket

Erstellt: 30 strukturierte Schätzfragen, jeweils 3 in allen 10 Hauptkategorien. Antwortwerte mit recherchierten Quellen (u. a. NASA, NOAA, FIFA, CERN, Nintendo, Guinness, NIH, Weltbank), zwei redaktionelle Hinweise, stabile IDs, numerische Werte in der angezeigten Einheit, Quellenlink, Bezugsdatum, Revision und getrennte Prüfstatus. Formales JSON-Schema und technische Strukturprüfung erfolgreich. Antwortwerte quellengeprüft; Hinweise teilweise noch verbesserungsbedürftig und nicht vollständig unabhängig verifiziert; keine Spielfreigabe. Die 300 freigegebenen Fragen sind noch nicht erreicht (30/300 Entwürfe, 0/300 abschließend freigegeben).

Dateipaket im Chat bereitgestellt: [Crosspoke-Fragenbank-v0.1.zip](http://Crosspoke-Fragenbank-v0.1.zip) (JSON-Daten, JSON-Schema, README). Keine Ablage auf dem Mac vorgenommen; die Dateien sind nicht als Notion-Anhang gespeichert. Nächste Aufgaben: weitere 270 Fragen (27 je Kategorie), Hint-Paar-Prüfung und Quellenprüfung, Dublettenprüfung, Freigabe, Import in Prototyp. Fragenhistorie/Analytics getrennt von Inhaltsdaten halten; stabile IDs und Revision referenzieren. Nur freigegebene Fragen im Release ausspielen.

<page url="https://app.notion.com/p/424f73ae951f81248732f99ce212e6a6">
Fragendatenbank
</page>

## M4.1 – Prototyp-Fragenbestand abgeschlossen

Nutzerentscheidung: bei 30 Fragen vorerst stoppen, weitere Fragen später ergänzen. Fragenbestand v0.7 in der Unterseite Fragendatenbank und im versionierten JSON/ZIP-Paket dokumentiert. 30 Fragen (3 je Kategorie), überarbeitete Hinweise, eindeutige Antwortmaßstäbe, Kurzfragen und optionale Fragekontexte sowie 30 erweiterte Antworterklärungen nach Reveal. Vollständige Quellen-/Hinweisfreigabe und Ausbau auf 300 bleiben Release-Aufgaben. M4.2 folgt: technische Spezifikation der Game Engine, Quiz Engine, Spielstand und Analytics, dann Implementierung und Tests. Mac-Projektordner und Bereitstellung weiterhin erst nach gesonderter Anweisung.

<page url="https://app.notion.com/p/424f73ae951f816f9da0e84530307823">
M4.2 – Technische Spezifikation
</page>

## M4.2 – Technische Spezifikation vorbereitet

Die separate Unterseite M4.2 – Technische Spezifikation enthält die konsolidierte Architektur, Zustandsmaschine, Blind-Konfiguration, Fragenlogik, Persistenz, Analytics, Datenschutzanforderungen und 17 Akzeptanztests. Spezifikation als Arbeitsgrundlage fertig; technische Defaults und einzelne Sonderfälle als Annahmen gekennzeichnet. M4.3 (Implementierung Game Engine und Quiz Engine) folgt nach Freigabe der technischen Grundlage und gesonderter Anweisung zum Mac-Projektordner. Keine Implementierung, keine Änderungen an der Fragenbank v0.7 oder Bereitstellung.

## M4.3 – Game Engine & Quiz Engine: Core v0.1.0

Implementierung in separater Arbeitsumgebung abgeschlossen, kein Mac-Zugriff. Paket im Chat: [Crosspoke-M4.3-Core-v0.1.0.zip](http://Crosspoke-M4.3-Core-v0.1.0.zip); enthält TypeScript-Quellcode, kompiliertes JS, Typdeklarationen, unveränderte Fragenbank v0.7 samt Schema 1.4, Tests, Testprotokolle, README und [HANDOVER.md](http://HANDOVER.md) für Codex.

Module: Game/Blind Engine (Presets, Phasen, All-in, Fold, Handabschluss, Eliminierung, Skip, Pause), Quiz Engine (Test-/Release-Filter, Auswahl und Historie, phasengerechte Inhalte), Storage (Memory und IndexedDB mit atomarem Versionsvergleich), lokale Meldungen und Analytics-Event-Outbox. 26/26 Node-Tests bestanden, TypeScript-Build und vollständige JSON-Schema-Prüfung erfolgreich. Browser-Smoke-Test mit Chromium vorbereitet, jedoch durch lokale Navigationsrichtlinie blockiert; echte IndexedDB-Browserprüfung bleibt offen. Kein UI, keine API/Dashboard, kein Service Worker oder Deployment. Zeitmessung best effort, inkompatible Saves werden abgewiesen; Migration später. Telemetrie im Integrationsbeispiel deaktiviert. Fragenbank für internen Test, keine Release-Freigabe.

Annahmen gemäß M4.2: Quick 1000/3, Standard 2000/3, Deep 4000/4, Blind-Leiter nach letzter Stufe verdoppelt, Skip zählt nicht, Wiederholung innerhalb Partie nur nach Bestätigung. Keine automatische Berechnung physischer Pots, Antworten, Chipstände. M4.3 Kern implementiert und auf Modulebene getestet; Browserprüfung noch offen. Nächster Schritt M4.4 Website und UI, danach M4.5 Analytics und M4.6 E2E/Bereitstellung. Mac-Ordner weiterhin erst später auf Nutzeranweisung.

## M4.4 – Website & Benutzeroberfläche: v0.2.0

Lokaler Table-Mode-Webprototyp implementiert. Vollständiges Paket im Chat: [Crosspoke-M4.4-Web-v0.2.0.zip](http://Crosspoke-M4.4-Web-v0.2.0.zip). Enthält bisherigen TypeScript-Core, unveränderte Fragenbank v0.7, Web-Quellcode und fertiges Bundle, lokalen HTTP-Server, Service Worker, README/HANDOVER und Testprotokolle. Start nach späterer Übernahme: Node 22+, npm start, [http://127.0.0.1:4173](http://127.0.0.1:4173). Keine Mac-Dateiänderung und keine Veröffentlichung.

UI: Startseite/Weiterführen, feste Presets und 2–8 Spieler, Frage/Hinweis 1/Hinweis 2/Antwort, Einheiten, optionaler Fragekontext und erweiterte Lösung mit Quellen, Blind-Level, Pause, All-in/Fold, Meldung/Skip, Handabschluss und Eliminierung, Abschlussstatistik, Regeln und Vollbild. Mitternachtsblau/Gold, responsive CSS. Lokale IndexedDB über vorhandenen Controller, Offline-Caching per Service Worker implementiert. Keine Registrierung oder Erfassung physischer Chipstände/Schätzungen. Entscheidung: browsernatives JavaScript statt vorgeschlagenem React/Vite, um zusätzliche Laufzeitabhängigkeiten zu vermeiden. Core bleibt TypeScript.

Verifikation: 31/31 Node-Tests (26 Core + 5 UI-Integration mit MemoryStorage und DOM-Stubs) bestanden; TypeScript-Build, JSON-Schema 1.4, JS-Syntax, vier lokale HTTP-Ressourcen (200) und ZIP-Integrität erfolgreich. Echter Chromium-Browserlauf durch Administrationsrichtlinie blockiert ([localhost](http://localhost)); keine visuelle Abnahme oder Browser-E2E behauptet. IndexedDB, Service Worker, Fullscreen, responsives Layout und Reload im echten Browser offen; Browsertest beigelegt. Telemetrie deaktiviert, Frageberichte lokal. Nächster Schritt M4.5 Analytics-API und Dashboard; M4.6 Browser-/Gerätetests und Bereitstellung. M4.4 Implementierung fertig, Geräteprüfung offen.

## M4.4 – Öffentliche Web-Testversion v0.2.1

26.11.2026: Eigenständige HTML-Testversion in GitHub-Repository [xpeeed/Crosspoke](https://github.com/xpeeed/Crosspoke) auf main hochgeladen (Commit f28e2dfe0e758f559c0bb1041506a0bd7a8538d7). Render Static Site crosspoke-webtest, automatische Deployments bei Änderungen auf main; erstes Deployment dep-dc432aeq1p3s73cpbcag bestätigt live. [Spielbare Web-Testversion](https://crosspoke-webtest.onrender.com) · [Render-Verwaltung](https://dashboard.render.com/static/srv-dc432a6q1p3s73cpbb9g). Repository derzeit public; private Sichtbarkeit empfohlen. Nur eigenständige Vorschau, nicht vollständiges Core-/Web-Entwicklungspaket; kein persistenter Spielstand beim Reload, kein Analytics-Backend; 30 Testfragen. Safari/iPhone noch nicht direkt geprüft. Mac unverändert. M4.5 Analytics Dashboard und M4.6 vollständige Browser-/Gerätetests bleiben offen.

## M4.4 – Playtest-Feedback: kompakter Table Mode v0.2.2

Nutzerentscheidungen: Render bleibt vorerst Testumgebung. Während physischer Partie nur SB/BB anzeigen, keine Handnummer, Spieleranzahl, Blind-Level oder Timer. Frage, beide Hinweise und Antwort kompakter und zusammen sichtbar; optionale Erläuterungen bleiben. Hand abschließen ohne Eliminationsabfrage. Nur wenn Blinds steigen, vor nächster Hand Info-Dialog mit neuen SB/BB-Werten. Untere Sonderaktionsleiste entfernen; Aktionen über ! neben Regeln/Vollbild zugänglich. Spielerzahl im Setup bleibt; Ausscheiden am Tisch. Ergänzung zur Umsetzung: ! enthält All-in, Fold bis auf einen, Pause, Fragenmeldung/Skip, reguläres manuelles Partieende bei Sieger und Abbruch. Statistiken intern unverändert bis auf manuelles Spielende/keine Eliminationserfassung.

Web-Testversion v0.2.2 als index.html im Repository main aktualisiert, Commit 95fe1acadbbc4f3711223b80b960a83e3c87f998. Lokal Syntaxprüfung und Chromium-Test per HTML-Injektion bei 390 × 844: drei Standard-Hände, kumulierte Hinweise/Antwort, Blind-Dialog 25/50 → 50/100, Menü, Pause, All-in, manuelles Ende bestanden; keine JS-Fehler. Lokale Dateinavigation und externer HTTP-Zugriff in Testumgebung blockiert; Safari und alle Textlängen noch nicht geprüft. Render-Auto-Deploy aktiviert; Live-Status dieser Revision separat prüfen. Fragenbank unverändert, kein Mac-Zugriff; Änderung am Webtest-Standalone, noch in vollständiges Core-/Web-Paket zu übernehmen.
</content>
</page>