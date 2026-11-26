Here is the result of "fetch" for the Page with URL https://app.notion.com/p/424f73ae951f81248732f99ce212e6a6 as of 2026-11-26T19:56:58.516Z:
<page url="https://app.notion.com/p/424f73ae951f81248732f99ce212e6a6" icon="🗂️">
<ancestor-path>
<parent-page url="https://app.notion.com/p/424f73ae951f8142944ff6f38e741eb7" title="Crosspoke"/>
<ancestor-2-page url="https://app.notion.com/p/3e5f73ae951f808b91dcdfa9d3932ac0" title="Gamifications"/>
<ancestor-3-page url="https://app.notion.com/p/fb4d8127bc5f4155a3312e2046a26377" title="Work "/>
</ancestor-path>
<properties>
{"title":"Fragendatenbank"}
</properties>
<iconMetadata>{"type":"emoji","emoji":"🗂️"}</iconMetadata>
<content>
<b>Version:</b> v0.8 · 30/300 erstellt · 23 Fragen überarbeitet, 7 beibehalten · 0/300 endgültig freigegeben · Quellen-Endprüfung und Playtest offen.

## Zentraler Fragenbestand

<database url="https://app.notion.com/p/424f73ae951f81efab83fcc7c8c0df38" data-source-url="collection://424f73ae-951f-812f-8b29-000bf21ad92b" inline="false">
Crosspoke – Fragenbestand
</database>

Die bisherigen zehn statischen Fragentabellen wurden durch eine einzige echte Notion-Datenbank ersetzt. Jede Frage ist ein eigener Datensatz. Ansichten: Alle Fragen (Schnellfilter Kategorie, Qualitätsstatus, Hinweisprüfung), Nach Kategorie, Hinweisvergleich, Prüfung offen, Freigegeben sowie Frage & Erklärung (neue Kontext- und Erklärungsfelder). Hinweis 2 (alt) und Hinweis 2 (v0.2) bleiben vollständig erhalten, werden aber nicht im Spiel angezeigt. Spaltenfolge: Frage, Hinweis 1, Hinweis 2, Antwortwert, Einheit, Fragen-ID, Kategorie, Unterkategorie, Quelle, Qualitätsstatus. Historie und Prüfmetadaten in der Ansicht Hinweisvergleich.

## Pflegeprozess

- Notion ist die redaktionelle Arbeitsoberfläche; das versionierte JSON/ZIP-Paket ist der technische Datenbestand für Codex.
- Bei jeder vereinbarten Ergänzung oder Korrektur zuerst Notion, dann JSON/ZIP mit identischen IDs, Inhalten und Status aktualisieren. Version und Anzahl abgleichen. Keine automatische Synchronisierung eingerichtet.
- Hinweis 1: ungewöhnlicher Vergleich. Hinweis 2: konkrete, allgemein verständliche Bezugsgrößen, quantitative Fakten, gerundete Werte oder offene Grenzen. Eine einzelne hilfreiche Information genügt (z. B. 64 WM-Spiele). Grobes Rechnen und eigene Interpretation sind erwünscht, zu präzise Berechenbarkeit auch im Zusammenspiel beider Hinweise vermeiden. Reine Antwortintervalle nur ausnahmsweise; keine unbekannten Vergleichsgrößen ohne Referenzzahl.
- Absolute Antwortwerte und beide Hinweise in v0.4 unverändert. Antwortwert bei Maßstabwechsel mathematisch exakt umrechnen. Antwort­einheit von Beginn an ausdrücklich in der Frage oder unmittelbar darunter anzeigen; bei großen, schwer einschätzbaren Zahlen einen sinnvollen Maßstab wie Tausend, Millionen oder Milliarden wählen. Dezimalwerte zulassen, keine erzwungene Rundung auf ganze Tausender. Bei eindeutigen Zählfragen genügt die natürliche Einheit. Einheiten bei der Auflösung erneut anzeigen. Neue Hinweise 2 sind redaktionelle Entwürfe, noch nicht vollständig unabhängig quellengeprüft oder spielgetestet. Technische Detailfelder bleiben im JSON.

## Kategorienübersicht

| Kategorie | Erstellt | Ziel |
| --- | --- | --- |
| Geografie | 3 | 30 |
| Geschichte | 3 | 30 |
| Food & Drinks | 3 | 30 |
| Wissenschaft & Natur | 3 | 30 |
| Technologie | 3 | 30 |
| Sport | 3 | 30 |
| Wirtschaft | 3 | 30 |
| Film & Musik | 3 | 30 |
| Mensch & Psychologie | 3 | 30 |
| Kurioses Wissen | 3 | 30 |

## Versionshistorie

- v0.1: 30 Fragen, je 3 pro Kategorie.
- v0.2: Native filterbare Datenbank mit 30 eindeutigen IDs und fünf Ansichten; sämtliche zweiten Hinweise neu formuliert, bisherige Hinweise separat archiviert; Revision 2. Endfreigabe und weitere 270 Fragen offen.
- v0.3: Alle 30 Hinweispaare nach neuem Maßstab redaktionell bewertet; Hinweis 2 konkret, aber nicht zu eng; geeignete Hinweise beibehalten. Beide Vorgängerversionen archiviert. Spaltenreihenfolge in allen fünf Ansichten angepasst. Revision 3; unabhängige Quellenprüfung neuer Fakten, endgültige Hinweisfreigabe und Playtest offen.
- v0.4: Alle 30 Fragen auf Antwortformat geprüft, 13 Formulierungen angepasst, davon fünf Maßstäbe exakt umgerechnet (Rekordpuzzle, Gummienten, Mondentfernung, Schokoladentafel, LHC). 17 bereits eindeutig. Geänderte Fragen Revision 4; restliche Revision 3. Notion und JSON aktualisiert. Hinweise, Quellen und absolute Lösungen unverändert.
- v0.5: Alle 30 Fragen redaktionell gestrafft (Zeichenzahl insgesamt von 2.905 auf 2.048; rund 29 % kürzer), 28 optionale Fragekontexte und 30 Antworterklärungen ergänzt. Die reguläre Spaltenreihenfolge bleibt unverändert. Separate Ansicht Frage & Erklärung. Antwortwerte, Einheiten, Hinweise und Quellen unverändert. Schema 1.3; Fragen und Erklärungen in Notion und JSON abgeglichen. Revision pro geändertem Datensatz erhöht. Alte Fragefassungen in JSON-Redaktionsnotizen bewahrt. Kontext und Erklärungen redaktionelle Entwürfe; vollständige unabhängige Faktenprüfung und Playtest offen.

## UX-Entwurf – optionale Erklärungen

Empfehlung zur Umsetzung: Frage und Antworteinheit immer sichtbar; Fragekontext vor dem Notieren der Schätzungen für alle gemeinsam aufklappbar, bei fehlendem Kontext kein Button. Nur Begriffe, Bezugsrahmen und Definitionen klären; keine zusätzlichen numerischen Hinweise. Wesentliche Abgrenzungen dürfen nicht ausschließlich im Kontext stehen. Antworterklärung inklusive Quellenlink erst nach Aufdeckung der Lösung optional anzeigen. Keine zusätzlichen Pflichtschritte, keine Veränderung der vier Spielphasen. UI noch nicht implementiert.

## v0.6 – Hinweis 1: echte überraschende Fakten

CUR-0001: Badewannen-Vergleich durch belegten Vergleich mit durchschnittlicher Studierendenzahl einer deutschen Hochschule ersetzt. Vorheriger Hinweis im Datensatz dokumentiert. Zusatzquellen Destatis in der Datensatzseite; Antworterklärung ergänzt; Revision 6. Frage, Einheit und Lösung unverändert. Qualitätsrichtung für Hinweis 1: echte, überraschende Vergleiche zwischen unterschiedlichen Lebensbereichen bevorzugen; bloß bildliche Aussagen ohne Informationswert vermeiden. Weiterhin 30 Fragen, keine Endfreigabe. Kein UI-Code geändert.

## v0.7 – Prototypbestand vorläufig abgeschlossen

Alle 30 Fragen redaktionell geprüft: 15 erste Hinweise gegenüber v0.6 ersetzt, 15 beibehalten. Geänderte Fassungen in Hinweis 1 (v0.6) archiviert; Begründung in Hinweis-Review; Zusatzquellen separat hinterlegt. 30 erweiterte Antworterklärungen direkt in den jeweiligen Fragedatensätzen (Eigenschaft Antworterklärung), zugänglich über Frage & Erklärung. UX bestätigt: nach Aufdeckung der Antwort optional aufklappbar, inklusive Hintergrundgeschichte, Fakten und Quellen; kein Pflichtschritt. Kurze Frage und Einheit immer sichtbar, Fragekontext optional. Reale überraschende Fakten bevorzugen; bildliche Vergleiche nur wenn nützlich und nachvollziehbar; Hinweis 2 konkreter, ohne genaue Berechnung zu ermöglichen. TEC-0003: historische Kapazitätsangabe in Mio. Zeichen statt MB, Hinweis 2 angepasst; Vorgängerversion im Paket v0.6 erhalten. Keine Änderung der übrigen Antwortwerte. Zusatzinformationen redaktionell ausgearbeitet und teilweise anhand von Quellen nachgeprüft, noch keine vollständige unabhängige Endprüfung oder Spielfreigabe. JSON v0.7, Schema 1.4 technisch validiert. Nutzerentscheidung: Fragenarbeit bei 30 vorläufig beenden; weitere 270 und vollständige Freigabe später vor Release. M4.1 für Prototyp abgeschlossen, M4.2 technische Spezifikation als nächster Schritt. Keine Mac-Änderungen.

## Verbindlicher redaktioneller Qualitätsstandard – 26.11.2026

Gilt für sämtliche bestehenden und zukünftigen Crosspoke-Fragen (Table Mode und spätere digitale Variante). Ergänzt und präzisiert die Qualitätsregeln v0.1–v0.7; keine Freigabe oder Änderung einzelner Fragen durch diesen Eintrag.

| Prüffeld | Anforderung |
| --- | --- |
| Frage | Kurz, eindeutig, allgemein verständlich, interessant und ohne Expertenwissen schätzbar; wesentliche Abgrenzungen und ggf. Stichtag direkt in Frage/Einheit. |
| Antwortformat | Numerischer Schätzwert; eindeutige, von Beginn an sichtbare Einheit, auch bei Auflösung. Sinnvoller Maßstab (Tausend/Millionen/Milliarden), exakte Umrechnung bei Maßstabwechsel, Dezimalwerte zulässig, keine unnötige Rundung. Rundung/Schätzung kenntlich machen. |
| Hinweis 1 | Kurz, kurios, witzig, überraschend oder ungewöhnlicher Vergleich, vorzugsweise realer und belegbarer Zusammenhang. Muss zugleich eine nachvollziehbare indirekte Orientierung zur gesuchten Größe geben. Thematisch passender, aber lösungsirrelevanter Fun Fact reicht NICHT. |
| Hinweis 2 | Kurze, konkrete, allgemein verständliche, lösungsrelevante Bezugsgröße/Teilzahl/gerundeter Fakt; konkretere Annäherung als Hinweis 1. Eine hilfreiche Information genügt. |
| Vergleichsmaßstab | Anschauliche bekannte Größen oder ausdrückliche Referenzzahl; keine unbekannten Bezugsgrößen ohne Orientierung. Hypothetische Vergleiche sind zulässig, wenn rechnerisch korrekt, anschaulich und nützlich; reale überraschende Fakten bevorzugen. |
| Zusammenspiel | Beide Hinweise gemeinsam prüfen: grobe Schätzungen/Kopfrechnen und unterschiedliche Interpretationen erwünscht; keine exakte oder zu enge Ableitung, kein verstecktes Verraten der Lösung. Reine Antwortintervalle nur ausnahmsweise. |
| Textlänge | Frage und beide Hinweise so kurz wie möglich; möglichst ein Satz je Hinweis, neue Hinweise grundsätzlich nicht länger als die jeweilige bisherige Fassung. Keine überladene Spielfläche. Frage, beide Hinweise und Antwort sollen nach Aufdeckung möglichst gemeinsam auf einen Bildschirm passen. Richtwerte (nicht starre Grenzwerte): Frage 6–18 Wörter, H1 6–15, H2 6–20. |
| Antwort | Sachlich korrekt, Einheit/Bezugsgröße/Zeitpunkt konsistent, mit belastbarer Quelle; nachprüfbare Zahlen und ggf. Rundungsregel. |
| Erweiterte Frage | Optional, kurz (Richtwert 1–2 Sätze); klärt Definition und Bezugsrahmen, keine zusätzlichen numerischen Hinweise; wesentliche Abgrenzungen nicht allein hier verstecken. |
| Erweiterte Antwort | Optional erst nach Aufdeckung; kurze Hintergrundgeschichte, echte zusätzliche Aha-Fakten, Quellen. Lösungsirrelevante, aber interessante Fakten hier statt in H1/H2 unterbringen. Richtwert 2–5 Sätze. |
| Spielqualität | Spannung, Spaß, unterschiedliche Vergleiche/Lebensbereiche, Aha-Momente, Bluffpotenzial. Keine unnötige Häufung gleicher Vergleichsmuster oder trivialer Wissensfragen. |
| Konsistenz | Frage, Einheit, H1, H2, Antwort, Kontext, Erklärung und Quellen beziehen sich auf denselben Sachverhalt/Stichtag; alle Umrechnungen und Vergleiche nachvollziehbar. |

### Prüfgates pro Frage

1. Fakten, Quelle, Bezugsgröße, Datum, Einheit und Umrechnung prüfen.
2. Fragekontext und Antworterklärung auf Widersprüche, Verständlichkeit und Mehrwert prüfen.
3. Jeden Hinweis isoliert prüfen: Hilft er wirklich bei der Schätzung? Verständlich? Kurz? H1 zusätzlich überraschend; H2 konkret. Wenn kein nachvollziehbarer Rückschluss auf die gesuchte Größe möglich ist, in die Antworterklärung verschieben oder ersetzen.
4. Hinweisfolge gemeinsam auf Informationszuwachs, zu enge Berechenbarkeit, Abwechslung, Spielspaß und Bildschirmplatz prüfen.
5. Unabhängige Quellenfreigabe und Playtest vor endgültiger Freigabe. Vorschläge zuerst zur Entscheidung vorlegen; vereinbarte Änderungen erst dann in Notion und anschließend identisch im technischen Datenbestand umsetzen.

Status: Qualitätsstandard aktualisiert; 30 bestehende Fragedatensätze v0.7, JSON, GitHub und Render bleiben bis zur ausdrücklichen Freigabe von Frageänderungen unverändert.

### Präzisierung: progressive Annäherung und Informationsgewinn pro Setzrunde

26.11.2026 – Nutzeranforderung: H1 darf nicht deutlich einfacher oder genauer zur gesuchten Antwort führen als H2. H1 vermittelt eine gröbere, überraschende, lösungsrelevante Orientierung; H2 soll konkreter sein oder in Kombination mit H1 einen klaren zusätzlichen Erkenntnisgewinn liefern. Zwei zulässige Muster: progressive Annäherung (grober Vergleich → konkretere Bezugsgröße) und kombinative Annäherung (verschiedene, sich ergänzende Informationen → bessere Schätzung). Nicht zulässig: H1 grenzt die Lösung bereits stark ein, H2 ist schwächer, redundant oder für die Plausibilitätsprüfung kaum hilfreich. H2 darf auch gemeinsam mit H1 die Lösung nicht zu genau berechenbar machen.

Zusätzliches Prüfgate: Frage allein, Frage + H1 und Frage + H1 + H2 aus Sicht eines durchschnittlichen Spielers gedanklich durchspielen. Prüfen, ob jede Aufdeckung die Plausibilität der eigenen Schätzung besser beurteilbar macht und die folgende Setzrunde einen echten Informationsgewinn bietet. Keine starren mathematischen Intervallvorgaben; tatsächliche Schätzbarkeit im Playtest prüfen. Falls nötig Hinweise tauschen, umformulieren oder ersetzen, ohne deren jeweilige Funktion (H1 Überraschung, H2 Orientierung), Kürze und Lösungsrelevanz zu verlieren. Keine Änderung einzelner Fragedatensätze ohne Nutzerfreigabe.

## v0.8 – Qualitätsreview und Synchronisierung

26.11.2026: Alle 30 Fragen nach erweitertem Qualitätsstandard redaktionell geprüft; 23 überarbeitet, 7 beibehalten. Zwei Fragen mit gleichem ID ersetzt (HUM-0001 Hände/Füße; SPO-0002 Kanakuris symbolischer Marathonabschluss). Übrige Antwortwerte unverändert. 10 Kategorien à 3 Fragen, Freigabestatus weiterhin offen. GitHub main: [index.html](https://github.com/xpeeed/Crosspoke/blob/main/index.html) und [questions-v0.8.json](https://github.com/xpeeed/Crosspoke/blob/main/questions-v0.8.json) aus Notion synchronisiert; eingebettetes JSON und separate JSON-Datei per Readback identisch, 30 eindeutige IDs. Commits 814fd7d225391c4dd25a7407d613573455f0f744 und 621d584542423d2ddb04bb6752a45480191b154d. Vollständige unabhängige Quellenprüfung, Playtest und Übernahme in ältere lokale Pakete offen. Historische Fassung v0.7 zusätzlich im Git-Verlauf erhalten.

### Veröffentlichungsentscheidung

Nutzerentscheidung: Testumgebung künftig ChatGPT Sites analog zu Stichwerk; keine aktive Synchronisierung oder manuelle Veröffentlichung über Render mehr. Notion bleibt redaktionelle Quelle, GitHub der technische Versionsstand. Bei jeder Änderung beide abgleichen, anschließend Sites-Version veröffentlichen und testen. Bestehenden Render-Dienst nicht löschen; dessen bisher aktivierte GitHub-Auto-Deploy-Einstellung wurde nicht geändert. Sites-Veröffentlichung noch offen, da in diesem Chat kein Sites-Publikationstool verfügbar ist. Keine Mac-Dateiänderung.

## Übernahme in Mac-Projekt und Sites

<date start="2026-11-26" />: Alle 30 Datensätze erneut mit technischer v0.8 verglichen; aktive Fragen, Hinweise, Antworten, Einheiten, Kontexte, Erklärungen und Revisionen identisch. Unverändert in <code>Codex-Gamification/Codex Crosspoke</code> übernommen, Notion-Snapshot und vollständige historische Pakete gesichert. [Sites-Testversion](https://crosspoke-test.do-peter.chatgpt.site) privat angelegt; Veröffentlichung angefordert, zuletzt <code>pending/publishing</code>. Weitere Übergabedetails auf <mention url="https://app.notion.com/p/424f73ae951f8142944ff6f38e741eb7">Crosspoke</mention>. Freigabestatus unverändert: 30 Testfragen, keine Release-Freigabe. Künftiger Abgleich über dokumentierten Arbeitsablauf; keine automatische Synchronisierung. Render-Deployments durch Übernahme-Commits mit <code>[skip render]</code> unterdrückt.
</content>
</page>