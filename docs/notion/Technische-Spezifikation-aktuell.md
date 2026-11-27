Here is the result of "fetch" for the Page with URL https://app.notion.com/p/424f73ae951f816f9da0e84530307823 as of 2026-11-27T18:52:09.264Z:
<page url="https://app.notion.com/p/424f73ae951f816f9da0e84530307823" icon="⚙️">
<ancestor-path></ancestor-path>
<properties>
{"title":"M4.2 – Technische Spezifikation"}
</properties>
<iconMetadata>{"type":"emoji","emoji":"⚙️"}</iconMetadata>
<content>
<b>Status:</b> M4.2 – technische Spezifikation v1.0, Arbeitsgrundlage für Codex; noch keine Implementierung. Stand 26.11.2026. Neuere Entscheidungen ersetzen ältere Entwürfe der Hauptseite. Technische Details unten sind vorgeschlagene Defaults, nicht separat bestätigte Spielregeln.

## 1. Scope und Architektur

V1 Table Mode: ein gemeinsamer Bildschirm, physische Chips/Dealer/Blinds, verdeckte unveränderliche Papierantworten, keine digitale Erfassung von Einsätzen, Pots, Spieleridentitäten oder Schätzungen. 2–8 Spieler; nur Preset und Anzahl konfigurierbar. Keine Registrierung, Rebuys, Kategorienwahl, Zeitlimits oder Online-Multiplayer. Responsive, TV-tauglich, manuelle Weitersteuerung. Modern Premium: Mitternachtsblau, Gold, helle Schrift.<br />Empfohlener Stack: TypeScript, React/Vite, Node.js-API, PostgreSQL; zunächst lokaler Table Mode mit IndexedDB, später statische Webbereitstellung und zentrale API für Analytics. Kein Framework/Hosting verbindlich beschlossen. Kein Zugriff auf Mac ohne gesonderte Anweisung.<br />Module: domain/game (reine Zustandsmaschine und Blind-Konfiguration), domain/quiz (Auswahl und Projektion), content (JSON-Import/Validierung), persistence (IndexedDB-Adapter), analytics (Event-Outbox/API), UI (State-Views), dashboard (geschützte Betreiberansicht), tests. UI darf weder Blind- noch Auswahlregeln duplizieren. Keine Notion-Live-Abhängigkeit. Notion redaktionell, versioniertes JSON technisch.

## 2. Presets und Blinds

| Preset | Startchips pro Person | Hände je Level | Zielzeit |
| --- | --- | --- | --- |
| Quick | 1000 | 3 | 10–20 Min. |
| Standard | 2000 | 3 | 15–30 Min. |
| Deep Stack | 4000 | 4 | 30+ Min. |
| Quick 1000 und Deep 4 sind bisher nicht separat ausdrücklich freigegebene Defaults. Start 25/50 für alle. Blind-Leiter: 25/50, 50/100, 100/200, 200/400, 300/600, 500/1000, 750/1500, 1000/2000, 1500/3000, 2000/4000, 3000/6000. Fortsetzung nach letzter Stufe als technische Annahme: beide Werte je Level verdoppeln, bis Spiel endet; nach Playtests justierbar. Levelindex = floor(completedHands / handsPerLevel). Hands zählen erst nach regulärem oder vorzeitigem Abschluss; keine Erhöhung bei Pause, All-in-Reveal oder ungültiger Frage. Blinds nur beim nächsten Handstart aktualisieren. Kein automatisches Ende nach Handzahl oder Zeit. |  |  |  |

## 3. Zustandsmaschine / Aktionen

Game: setup → active ↔ paused → finished oder abandoned. Handphasen: question → hint1 → hint2 → answer → settled. Zu jeder sichtbaren Phase gehört eine physische Setzrunde, auch nach Antwort; vorher Blinds und verbindliche Schätzungen auf Papier. Fragekontext optional vor Schätzungen; Antworterklärung erst ab answer. Die Bedienperson bestätigt jeweils Abschluss der physischen Setzrunde über Weiter. Kein Zurückspringen nach Reveal.

- startGame(preset,playerCount): validieren, Session-ID erzeugen, erste Frage auswählen, Spielstand atomar persistieren.
- advancePhase: nur nächster Schritt, nicht bei Pause. Bei answer: Setzrunde/Showdown physisch abwickeln, anschließend Handabschluss bestätigen.
- finishHand(eliminatedCount): nach physischer Potvergabe; ausgeschiedene Spieler als Anzahl 0 bis activePlayers-1 bestätigen; completedHands genau einmal erhöhen; wenn noch 1 Spieler → finished, sonst neue Hand mit aktualisierten Blinds. Keine Spieleridentitäten erforderlich.
- earlyFinish: falls alle bis auf einen folden, Pot physisch vergeben, Handabschluss ohne erzwungene Auflösung. Optional Antwort ansehen ohne weitere Setzrunde; separate Abschlussbestätigung. Kein automatischer Rückschluss auf Ausscheiden durch Fold.
- allInRunout: nur wenn am Tisch keine weiteren Setzentscheidungen möglich sind; Bestätigung erforderlich, übrige Hinweise und Antwort aufdecken; physischer Showdown und Side Pots, erst danach finishHand. Falls Side-Pot-Aktionen noch möglich, normal weiterspielen.
- reportQuestion(reason): optional Grund aus festen Kategorien (falscher Wert, unklar, Hinweis, sonstiges); Bericht mit Frage-ID/Revision/Phase speichern. Melden allein ändert Spiel nicht. skipQuestion: nur als ausdrücklich ungültig erklärte Hand; Einsätze inkl. Blinds physisch zurückgeben, keine Eliminierung, keine Handzählung, gleiche Blinds und Handnummer, neue Frage; alte Frage für diese Partie sperren. Auch nach Reveal nur vor Handabschluss möglich; keine rückwirkende Potkorrektur in App.
- pause/resume: Zustand vollständig erhalten, aktive Zeit stoppt; kein Timer als Spielregel. abandon: Bestätigung, Session als abgebrochen markieren; nicht als regulär beendet zählen.
- Fehlbedienung: Guard gegen doppelte Klicks (commandId und erwartete stateVersion); keine stillen Rücksprünge nach Offenlegung; beim Neustart aktive Partie fortsetzen oder bewusst abbrechen.<br />Pokerregeln (Split Pots, Side Pots, Heads-up, Raise-Regeln) physisch nach vereinbartem Pokerprinzip; Hilfeseite erläutert Regeln. Gewinner pro Pot = kleinste absolute Abweichung unter für den Pot berechtigten Spielern; Gleichstand splitten. Keine automatisierte Gewinnerberechnung in V1.

## 4. Quiz Engine

Basis: Fragenbank v0.7, Schema 1.4, 30 Testfragen, je drei aus zehn Kategorien, stabile IDs. Relevante aktive Felder laut Paket: id, categoryId/category/subcategory, question, unit, answerValue, hint1, hint2, source, referenceDate, revision, questionContext/answerExplanation gemäß Schema (exakte Namen im Paket maßgeblich); historische Hinweise und Editorial Notes nur redaktionell. Import mit JSON-Schema, eindeutigen IDs, endlichen numerischen Antwortwerten, Pflichtfeldern, Quellen und Kategorie prüfen. Testmodus explizit markiert: source\_checked-Entwürfe erlaubt. Release-Modus ausschließlich approved und releaseReady; bei unzureichendem Pool Start verhindern. Releaseziel 300/30 je Kategorie, nicht Voraussetzung für internen Prototyp.<br />Auswahl: zufällig aus noch nie gezeigten, zulässigen IDs auf dem Gerät, unabhängig von Kategorie; anschließend least-recently-shown unter noch nicht in dieser Partie gezeigten Fragen, zufällige Auswahl bei Gleichstand. Historie anhand ID (Revision zählt nicht als neue Frage); Revision und Datasetversion für Analytics zusätzlich speichern. Bei erschöpftem Pool innerhalb einer Partie Wiederverwendung erst nach Warnung/Bestätigung, älteste zuerst; gemeldete/übersprungene bleiben für diese Partie gesperrt. Wenn keine zulässige Frage existiert: verständlicher Hinweis, kein automatischer Spielverlust. Keine erneute Anzeigezählung beim Reload.<br />Ausgabe nach Phase: question + unit + optionaler neutraler Kontext immer; hint1 ab hint1; hint2 ab hint2; answerValue, source, Erklärung ab answer. Keine Archivtexte im Spiel. Kurzfrage muss ohne Kontext verständlich bleiben. Für Offline-V1 liegt der Datensatz lokal vor: Antworten sind über Entwicklerwerkzeuge technisch auffindbar, keine Anti-Cheat-Garantie. Später digital: serverseitige Geheimhaltung und autoritativer Spielzustand.

## 5. Persistenz

IndexedDB: gameSessions (sessionId, schemaVersion, datasetVersion, preset, initialPlayers, activePlayers, completedHands, handId, handNumber, questionId, questionRevision, questionSnapshot, phase, status, stateVersion, startedAt, activeElapsedMs, pause state, lastUpdatedAt), questionHistory (id, shownCount, lastShownAt), sessionSeenIds/blockedIds, eventOutbox. Jede gültige Aktion schreibt State, History und Events atomar in einer Transaktion, bevor neue Phase sichtbar wird. Frage-Snapshot für laufende Hand unverändert halten. Beim Laden kompatiblen Spielstand wiederherstellen, aktive Phase/Frage nicht neu würfeln, kein Doppelzählen. Zeit bei Browser-Schließung nicht als aktive Spielzeit werten; aktiver Zeitabschnitt über Heartbeat/Visibility best effort sichern, bei Reload fortsetzen. Versionsmigration oder verständliche Fehlermeldung; kein stilles Löschen. Storage-Ausfall sichtbar, kein Versprechen dauerhafter Wiederherstellung nach Browserdatenlöschung. Eine aktive Partie je Browserprofil; parallele Tabs über Sperre/Stateversion absichern. Offline nach Laden und erfolgreichem Caching; keine Garantie beim ersten Offline-Besuch.

## 6. Analytics und Datenschutz

Lokale Fragenhistorie steuert Auswahl; zentrale Statistik ist davon getrennt. Events: game\_started, question\_shown, phase\_revealed, context\_opened (optional), explanation\_opened (optional), hand\_completed (normal/early\_fold/all\_in), question\_reported, question\_skipped, players\_eliminated (Anzahl), game\_paused/resumed, game\_finished, game\_abandoned. IDs: eventId UUID, sessionId UUID, handId, questionId/Revision wo relevant, datasetVersion, preset, initial/activePlayers, phase, elapsedMs, timestamp, eventSchemaVersion. Keine Namen, Antworten, Chipstände oder dauerhafte Geräte-ID an Backend. Zufällige Session-IDs sind pseudonyme technische Kennungen, nicht garantiert anonym. Keine Telemetrie ohne transparente Information und geeignete Rechtsgrundlage/Einwilligungsentscheidung vor öffentlichem Release; lokale Partie funktioniert auch ohne Telemetrie. Keine IP-Speicherung als Analytics-Feld; Hosting-Logs separat prüfen. Dashboardzugang geschützt, öffentliche Spielwebsite ohne Konto.<br />API: POST /api/events (Batch, Schema/Größe validieren, Rate Limit, eventId UNIQUE, idempotente Annahme, serverReceivedAt), Betreiber-API für Aggregate/Reports, Health-Endpoint. Lokale Outbox bei Offline/Fehler, erneuter Versuch mit Backoff, bestätigte Events entfernen. Aufbewahrung und Löschregeln vor Release festlegen; keine doppelte Zählung.<br />KPIs: gestartete/beendete/abgebrochene Sessions separat; Abschlussquote; Ø/Median aktive Dauer, Hände pro abgeschlossener Partie, Dauer pro Hand, Preset und Anfangsspielerzahl; Fragenanzeigen und abgeschlossene Hände je ID/Revision, letzte Anzeige, Poolabdeckung/Kategorienmix, Skip-/Meldequote pro Anzeige, Kontext-/Erklärungsöffnungen optional. Testdaten separat kennzeichnen/filtern. Physische Fold-Rate, Potgröße und Schätzfehler nicht messbar; erst digital.

## 7. Akzeptanztests (vor M5)

| ID | Test | Erwartung |
| --- | --- | --- |
| T01 | Setup 1/2/8/9 Spieler | Nur 2–8 zulässig |
| T02 | Quick/Standard Hände 1–4 | 25/50 bis Hand 3; Hand 4 50/100 |
| T03 | Deep Hände 1–5 | 25/50 bis Hand 4; Hand 5 50/100 |
| T04 | Phase advance / Doppelklick | Je gültiger Aktion genau ein Schritt, keine verdeckten Inhalte |
| T05 | Regulärer Abschluss | Eine Hand zählt; neue Frage und ggf. Blinds |
| T06 | Early fold | Ein Abschluss; kein Zwang zur Lösung; kein automatischer Ausschluss |
| T07 | All-in ohne weitere Aktion / mit Side Pot | Runout nur im ersten Fall; ansonsten regulär |
| T08 | Meldung / Skip | Bericht allein kein Wechsel; Skip neue Frage bei gleicher Hand/Blinds |
| T09 | Elimination / letzter Spieler | Anzahl nie \<1; bei 1 Game finished; keine weitere Frage |
| T10 | Pause und Reload in jeder Phase | Frage/Phase/Blinds/Spielerzahl erhalten, keine doppelte History |
| T11 | 30 unterschiedliche Fragen / neue Partie | Keine Wiederholung bis erschöpft, danach Warnung; ungespielte zuerst |
| T12 | Defekte Daten / Release-Filter | Ungültige Datei nicht importieren; Draft nur im Testmodus |
| T13 | Offline + Retry / Duplikat | Spiel bleibt bedienbar; Events idempotent |
| T14 | Neuer Datensatz / Migration | Historie nach ID bleibt; aktive Frage unverändert |
| T15 | Kleine/TV-Ansicht, Kontext/Erklärung | Kein Clipping, Einheit sichtbar, Antworterklärung erst bei Antwort |
| T16 | Parallele Tabs / Storagefehler | Kein doppelter Abschluss; sichtbare Fehlermeldung |
| T17 | Session-Abbruch / Dashboard | Abbruch getrennt vom regulären Ende; KPI-Nenner korrekt |
| Tests: Unit für pure Engine und Auswahl, Integration für Storage/API, E2E für Setup→Finish und Reload, manuelle Table-Mode-Playtests in M5. Keine Tests bisher ausgeführt, da Code noch nicht geschrieben. |  |  |

## 8. Umsetzung und Freigaben

M4.3: Core-Module, Datenimport, Storage, Tests. M4.4: UI und optionale Erklärungen. M4.5: Event-API/Dashboard, Zugriffsschutz. M4.6: E2E, Testbereitstellung. M5: echte Spielrunden; M6: Blinds/Fragenqualität optimieren; M7: mindestens 300 freigegebene Fragen und Release-Checks.<br />Noch zu bestätigen: Quick-Stack 1000/3 und Deep fest 4 (bisher vorgeschlagen), Blind-Leiter nach Stufe 5 und Fortsetzung, Early-Fold-Handabschluss, Skip zählt keine Hand, Wiederholungswarnung bei >30 Händen. Technische Defaults (React/Node/Postgres/IndexedDB, Event-API) als Vorschlag, ohne Hostingfestlegung. Datenschutz und tatsächliche Hostingkosten vor Release prüfen. Keine weiteren Fragen erstellen, kein Mac-Ordner, kein Deployment in diesem Schritt.

## Präzisierung · Einheit und erforderliche Genauigkeit

Nutzerauftrag vom <date start="2026-11-27" />. Die Einheit bleibt auf dem Fragebildschirm ab der ersten Anzeige sichtbar, direkt unter der Frage und auch bei H1/H2 sowie der Auflösung. Diese Angabe ist nicht nur optionaler Fragekontext.

Ein zusätzlicher Nachkommastellenhinweis soll nur erscheinen, wenn die jeweilige Frage Dezimalgenauigkeit benötigt. Beispiele: „in kg · 1 Nachkommastelle“ oder „in m · 2 Nachkommastellen“. Bei ganzen Stückzahlen und Fragen ohne notwendige Dezimalgenauigkeit bleibt allein die Einheit stehen; keine zusätzliche Zeile „keine Nachkommastellen nötig“.

Die geforderte Genauigkeit wird redaktionell pro Frage anhand von Größe, Einheit und sinnvoller Schätzbarkeit festgelegt. Sie darf nicht blind aus der Anzahl der Dezimalstellen der Quellenzahl abgeleitet werden. Unnötig kleinteilige Einheiten-/Skalierungen, etwa Tausend Stück mit drei Nachkommastellen, zuerst auf einen verständlicheren Maßstab prüfen. Änderungen bestehender Einheiten oder Antwortwerte separat prüfen; hier nicht automatisch umrechnen oder runden.

Wenn eine feste Rundung vorgegeben wird, müssen Fragetext, sichtbare Angabe, veröffentlichte Lösung und Vergleichsregel denselben gerundeten Referenzwert verwenden. Keine heimliche Umstellung der Wertung durch reine Anzeigeformatierung; physische Schätzungen werden weiterhin am Tisch verglichen. Die Angabe der Nachkommastellen darf keine unnötige Lösungshilfe werden.

<b>Technischer Ist-Stand bei Prüfung:</b> Lokale Standalone zeigt „Gesuchte Einheit: …“ generell an; alle 120 Notion-Fragen haben eine Einheit. Der lokale technische Datenbestand hat noch 30 Fragen. Keine eigene strukturierte Präzisionsangabe oder bedingte Nachkommastellenanzeige implementiert; neue Vorgabe für die kommende UI-/Datenübernahme, keine Behauptung bereits erfolgter Umsetzung.

## Umsetzungsstand · <date start="2026-11-27" />

Aktuelle Standalone v0.2.3 mit Fragenbestand v0.9: 186 Testfragen aus 188 redaktionellen Einträgen. CUR-0012 und CUR-0013 bleiben zurückgestellt. Die Einheit steht in jeder Phase direkt unter der Frage. Die bedingte Genauigkeitsanzeige ist jetzt für 22 Zusatzfragen umgesetzt; ganze Zahlen erhalten keine zusätzliche Null-Nachkommastellen-Zeile. Festgelegte Rundung und aufgedeckter Referenzwert stimmen überein; Europreise gegebenenfalls centgenau. Physische Schätzungen und Potverteilung bleiben am Tisch.

Die ersten 30 Fragetexte, Antwortwerte und Einheiten wurden nicht neu bearbeitet; die bereits vorhandene Notion-Hinweisrevision von HUM-0001 wurde synchronisiert. Aktuelle Standalone gesondert auf Import, vollständigen 186-Fragen-Pool und 744 Phasenprojektionen geprüft; Browserablauf und Handyansicht geprüft. Die zusätzlich erneut bestandenen 31 historischen Core/Web-Tests sind keine vollständige Prüfung der aktuellen Standalone. MemoryStorage/Reload-Grenze bleibt bestehen; reale Playtests und unabhängige Endprüfung bleiben offen. Keine Änderungen an Spielregeln, Blinds, Wertung, Analytics oder Render.
</content>
</page>
