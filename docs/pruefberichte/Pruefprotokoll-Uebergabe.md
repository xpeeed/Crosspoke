# Prüfprotokoll Übergabe – 26.11.2026
Neu ausgeführt in der Arbeitsumgebung, nicht auf dem Mac:
- Git-Blob-SHA-1 der rekonstruierten `04 – Entwicklung/index.html`: `72eb9fef89cf3007c13a7bb8f76bae63efa4db6f` – identisch mit GitHub main Readback.
- Git-Blob-SHA-1 der `03 – Fragendatenbank/questions-v0.8.json`: `7e456de658e08aa7d8fd9cc9b33ec0df13fb7e7e` – identisch mit GitHub main Readback.
- Eingebettetes DATA-Objekt in HTML und externe JSON identisch.
- JSON Schema Draft 2020-12 aus v0.7-Paket: 0 Fehler; 30 eindeutige IDs, 10 Kategorien mit je 3 Fragen, releaseReady=false.
- Zwei Script-Blöcke per Node syntaktisch geprüft.
- 10 ursprüngliche ZIP-Pakete per CRC/Testzip geprüft.

Historische Tests laut Notion: Core 26/26; Web v0.2.0 31/31; Chromium-HTML-Injektion v0.2.2 mit drei Standard-Händen, Hinweisen, Antwort, Blind-Dialog, Menü, Pause, All-in und manuellem Ende erfolgreich. Diese früheren Tests sind keine neue vollständige Browserprüfung der v0.8-Fragen.

Offen: Safari/iPhone, alle 30 Frage-/Hinweislängen, echte Browser-Persistenz im aktuellen Standalone, Analytics/Dashboard, unabhängige vollständige Quellenprüfung, Playtests, Sites-Publikation, vollständiger Notion-Rohexport und tatsächliche Mac-Ablage.
