"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = exports.IndexedDbStorage = exports.MemoryStorage = void 0;
const game_1 = require("./game");
const quiz_1 = require("./quiz");
function validateState(raw) { const s = raw; if (!s || s.schemaVersion !== 1 || !Number.isSafeInteger(s.version) || s.version < 0 || !s.history || !Array.isArray(s.outbox) || !Array.isArray(s.reports) || !('game' in s))
    throw Error('UNSUPPORTED_OR_CORRUPT_SAVE'); if (s.game && (!s.game.hand?.question || !['active', 'paused', 'finished', 'abandoned'].includes(s.game.status) || !Array.isArray(s.game.seen) || !Array.isArray(s.game.blocked)))
    throw Error('CORRUPT_GAME'); return s; }
class MemoryStorage {
    state = (0, game_1.initialState)();
    async load() { return structuredClone(this.state); }
    async commit(expectedVersion, next) { if (this.state.version !== expectedVersion)
        throw Error('STALE_STATE'); this.state = structuredClone(next); }
}
exports.MemoryStorage = MemoryStorage;
class IndexedDbStorage {
    db;
    constructor(db) {
        this.db = db;
    }
    static open(name = 'crosspoke-core-v1') { return new Promise((resolve, reject) => { const req = indexedDB.open(name, 1); req.onupgradeneeded = () => { if (!req.result.objectStoreNames.contains('state'))
        req.result.createObjectStore('state'); }; req.onerror = () => reject(req.error); req.onblocked = () => reject(Error('STORAGE_BLOCKED')); req.onsuccess = () => resolve(new IndexedDbStorage(req.result)); }); }
    close() { this.db.close(); }
    load() { return new Promise((resolve, reject) => { const tx = this.db.transaction('state', 'readonly'); const req = tx.objectStore('state').get('root'); req.onerror = () => reject(req.error); req.onsuccess = () => { try {
        resolve(req.result === undefined ? (0, game_1.initialState)() : validateState(req.result));
    }
    catch (e) {
        reject(e);
    } }; tx.onabort = () => reject(tx.error ?? Error('STORAGE_ABORT')); }); }
    commit(expectedVersion, next) { return new Promise((resolve, reject) => { const tx = this.db.transaction('state', 'readwrite'); const store = tx.objectStore('state'); const req = store.get('root'); let failure; req.onsuccess = () => { try {
        const current = req.result === undefined ? (0, game_1.initialState)() : validateState(req.result);
        if (current.version !== expectedVersion)
            throw Error('STALE_STATE');
        store.put(next, 'root');
    }
    catch (e) {
        failure = e;
        tx.abort();
    } }; tx.oncomplete = () => resolve(); tx.onabort = () => reject(failure ?? tx.error ?? Error('STORAGE_ABORT')); tx.onerror = () => { failure ??= tx.error; }; }); }
}
exports.IndexedDbStorage = IndexedDbStorage;
class Controller {
    storage;
    env;
    constructor(storage, env) {
        this.storage = storage;
        this.env = { ...env, dataset: (0, quiz_1.importDataset)(env.dataset, env.mode) };
    }
    async load() { return this.storage.load(); }
    async dispatch(cmd) { const prior = await this.storage.load(); const next = (0, game_1.reduce)(prior, cmd, this.env); if (next !== prior)
        await this.storage.commit(prior.version, next); return next; }
}
exports.Controller = Controller;
