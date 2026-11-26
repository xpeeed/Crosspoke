# Crosspoke Core v0.1.0 — M4.3

Erste Implementierung des Table-Mode-Spielkerns. **Kein fertiges Webspiel.** Die Fragenbank v0.7 wird unverändert mitgeliefert. Alle 30 Fragen sind Testbestand; öffentlicher Release ist gesperrt (300 freigegebene Fragen erforderlich).

## Start / Test

Voraussetzungen: Node.js 22+, npm. Auf dem Mac in einem später freigegebenen Projektordner entpacken, dann:

```sh
npm install
npm test
```

Die lokale Umgebung verwendete Node 22.16.0 und TypeScript 5.8.3. Die bereits erstellten JS-Dateien und Typdeklarationen liegen in `dist/`. Laufzeit ohne externe npm-Abhängigkeiten. Der TypeScript-Compiler ist die einzige Entwicklungsabhängigkeit. Vollständige JSON-Schema-Prüfung optional per Python (jsonschema): `python scripts/validate-data.py`. Der reale Browser-Smoke-Test benötigt Python Playwright und Chromium: `CHROMIUM=/pfad/zum/chromium python scripts/browser-test.py`. In der Erstellungsumgebung wurde die Navigation durch eine Browser-Richtlinie blockiert; dieser Test ist **nicht bestanden/nicht ausgeführt**. Testprotokolle unter `tests/`.

## Module

- `src/game.ts`: reine Zustandsübergänge, Presets, Blind-Leiter, Handabschluss, Skip, Pause, All-in, Fold, Ausscheiden, Events, UI-Projektion.
- `src/quiz.ts`: Laufzeitprüfung der Spielfelder, Test-/Release-Filter, Auswahl ohne Wiederholung, History, Projektion der sichtbaren Frage.
- `src/storage.ts`: Controller mit atomarer Speicherung, Memory-Adapter, IndexedDB-Adapter mit transaktionalem Versionsvergleich (ein Root-Datensatz aus Spielstand, History, lokalen Meldungen und Event-Outbox).
- `data/`: unveränderte Fragenbank v0.7 und JSON-Schema 1.4.
- `tests/`: 26 erfolgreich ausgeführte Tests des Kerns und Memory-Adapters, Protokolle.

## Beispiel (Node, nur zu Entwicklungszwecken)

```js
const C = require('./dist');
const dataset = require('./data/crosspoke-fragen-v0.7.json');
const controller = new C.Controller(new C.MemoryStorage(), {
  dataset, mode: 'test', now: Date.now,
  id: () => crypto.randomUUID(), random: Math.random, telemetry: false
});
(async () => {
  let s = await controller.load();
  s = await controller.dispatch({id:crypto.randomUUID(), expectedVersion:s.version,
    action:{type:'start', preset:'Standard', players:4}});
  console.log(C.view(s));
})();
```

Die UI soll **nur** `view(state)` rendern, nicht rohe Fragen-Snapshots oder Archive. Vor dem ersten Render nach Reload `recover` ausführen, solange eine Partie läuft; Heartbeat ca. alle 10 Sekunden bei sichtbarer aktiver Partie, bei Tab-Wechsel/Verlassen best effort sichern. `expectedVersion` bei jeder Aktion aus aktuellem State übernehmen, neuer `command.id` pro Nutzeraktion; bei stale state neu laden. Bei Speicherausfall Fehler anzeigen, keinen ungespeicherten Übergang rendern. Browser-Offline-Caching der Assets erfolgt erst in M4.4. Keine Geheimhaltung gegen Entwicklerwerkzeuge, da die Antworten lokal vorliegen.

## Spielregeln und Annahmen

Quick 1000/3, Standard 2000/3, Deep Stack 4000/4; gemeinsame Blind-Leiter bis 3000/6000, danach Verdopplung (technischer Vorschlag). Nur abgeschlossene Hände zählen, Skip nach Rückgabe aller Einsätze nicht. Bei Poolerschöpfung muss Wiederverwendung bestätigt werden. Physische Pokeraktionen, Gewinner, Side Pots und Chips werden nicht berechnet; Bestätigung am Tisch erforderlich. Melden blockiert die Frage für den Rest der Partie, ersetzt sie aber nicht automatisch. Telemetrie ist ein expliziter Integrationsparameter, in der Beispielintegration deaktiviert; lokale Meldungen bleiben auch ohne Telemetrie erhalten. Kein Backend, keine Übertragung, keine Nutzerdatenbank.

## Grenzen

Browser-IndexedDB wurde implementiert, nicht erfolgreich im realen Browser ausgeführt; Memory-Adapter getestet. Runtime-Import prüft verwendete Felder und die Release-Grenze; vollständige Schema-Validierung separat. Save-Schema 1, keine Migration vorhandener älterer Versionen (inkompatible Saves werden abgewiesen). Aktive Zeit best effort, maximale 15 Sekunden pro Heartbeat-Lücke; keine Timer-Spielregel. Zentrale Analytics, Dashboard, tatsächliche UI, Service Worker, Datenschutz-/Hostingfreigabe und E2E-Tests fehlen. Die redaktionellen Fakten der Fragen wurden in M4.3 nicht neu geprüft.
