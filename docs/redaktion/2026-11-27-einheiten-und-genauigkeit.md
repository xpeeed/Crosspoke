# Einheiten, Genauigkeit und acht redaktionelle Überarbeitungen

Stand: 27.11.2026.

Notion-Fragenbestand: 120 Fragen; technische Standalone und questions-v0.8.json weiterhin 30. Redaktioneller Snapshot und historische Daten sind keine neue technische Fragenbankversion. Keine Runtime-Datei verändert und kein Deployment ausgeführt.

## Einheiten – tatsächliche Prüfung

Alle 120 Notion-Fragen besitzen eine nichtleere Einheit. Die aktuelle index.html überträgt q.unit in questionView() bereits ab Phase question; das Fragetemplate gibt direkt unter der Frage bedingungslos „Gesuchte Einheit: …“ aus. 120 Datensätze × 4 Phasen wurden gegen die echte Projektionsfunktion geprüft (480 Datenprojektionen, keine Spielsimulationen). Code-/Datenprüfung, kein neuer Browser- oder Live-Sites-Durchlauf. Die lokalen HTML-/JSON-/Sites-Artefaktkopien sind laut scripts/check-sync.cjs konsistent; das ist keine Bestätigung eines aktuellen Serverdeployments.

Schätzungen werden auf Papier notiert und am Tisch verglichen. Die Website besitzt keine digitale Antwort-Eingabe und keine automatische Bewertung individueller Schätzwerte. Der vorhandene Zahlenformatter erlaubt bis zu zwölf Nachkommastellen, definiert aber keine redaktionell geforderte Genauigkeit.

## Bedingte Genauigkeitsangabe

Einheit bleibt immer sichtbar. Eine feste Nachkommastellenangabe nur bei tatsächlich erforderlicher Präzision anzeigen, etwa „in m · 2 Nachkommastellen“ bei einer ausdrücklich auf Hundertstel festgelegten Frage. Bei ganzen Zählwerten bleibt allein die Einheit stehen. Nicht automatisch aus allen Dezimalstellen eines Quellenwertes ableiten; sinnvolle Einheit, Schätzbarkeit, Lösung und Rundungs-/Vergleichsregel gemeinsam festlegen. Keine automatische Änderung bestehender Antwortwerte oder Skalierungen. Die bedingte UI-Anzeige ist als Vorgabe in Notion Fragenqualität und M4.2 dokumentiert, noch nicht implementiert.

## Acht Fragen

Ausdrückliche Nutzerfreigabe: „die 8 kannst du überarbeiten“. Freigegebene Arbeitsfassungen werden zuerst in Notion übernommen; bisherige Frage/H1/H2/Antwort/Einheit/Erklärung bleiben je Datensatz mit Revision archiviert. Die Wortlautübernahme ist keine unabhängige Quellen-/Spielfreigabe. Insbesondere die verbleibenden Schwächen der SMS- und M&M-Frage bleiben sichtbar; Playtests und Quellen-Endprüfung nicht als bestanden ausgeben. Technische Fragenbank/Spielstand werden nicht automatisch auf 120 Entwürfe erweitert.

Notion: https://app.notion.com/p/424f73ae951f81efab83fcc7c8c0df38
Prüfbericht: https://app.notion.com/p/425f73ae951f81deac5ec0ca3d596acf
