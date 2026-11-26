import {State,initialState,reduce,Command,Env} from './game';
import {importDataset} from './quiz';
export interface Storage {load():Promise<State>;commit(expectedVersion:number,next:State):Promise<void>}
function validateState(raw:unknown):State{const s=raw as State;if(!s||s.schemaVersion!==1||!Number.isSafeInteger(s.version)||s.version<0||!s.history||!Array.isArray(s.outbox)||!Array.isArray(s.reports)||!('game' in s))throw Error('UNSUPPORTED_OR_CORRUPT_SAVE');if(s.game&&(!s.game.hand?.question||!['active','paused','finished','abandoned'].includes(s.game.status)||!Array.isArray(s.game.seen)||!Array.isArray(s.game.blocked)))throw Error('CORRUPT_GAME');return s}
export class MemoryStorage implements Storage{
 private state=initialState();async load(){return structuredClone(this.state)}
 async commit(expectedVersion:number,next:State){if(this.state.version!==expectedVersion)throw Error('STALE_STATE');this.state=structuredClone(next)}
}
export class IndexedDbStorage implements Storage{
 constructor(private db:IDBDatabase){}
 static open(name='crosspoke-core-v1'):Promise<IndexedDbStorage>{return new Promise((resolve,reject)=>{const req=indexedDB.open(name,1);req.onupgradeneeded=()=>{if(!req.result.objectStoreNames.contains('state'))req.result.createObjectStore('state')};req.onerror=()=>reject(req.error);req.onblocked=()=>reject(Error('STORAGE_BLOCKED'));req.onsuccess=()=>resolve(new IndexedDbStorage(req.result))})}
 close(){this.db.close()}
 load():Promise<State>{return new Promise((resolve,reject)=>{const tx=this.db.transaction('state','readonly');const req=tx.objectStore('state').get('root');req.onerror=()=>reject(req.error);req.onsuccess=()=>{try{resolve(req.result===undefined?initialState():validateState(req.result))}catch(e){reject(e)}};tx.onabort=()=>reject(tx.error??Error('STORAGE_ABORT'))})}
 commit(expectedVersion:number,next:State):Promise<void>{return new Promise((resolve,reject)=>{const tx=this.db.transaction('state','readwrite');const store=tx.objectStore('state');const req=store.get('root');let failure:unknown;req.onsuccess=()=>{try{const current=req.result===undefined?initialState():validateState(req.result);if(current.version!==expectedVersion)throw Error('STALE_STATE');store.put(next,'root')}catch(e){failure=e;tx.abort()}};tx.oncomplete=()=>resolve();tx.onabort=()=>reject(failure??tx.error??Error('STORAGE_ABORT'));tx.onerror=()=>{failure??=tx.error}})}
}
export class Controller{
 private env:Env;
 constructor(private storage:Storage,env:Env){this.env={...env,dataset:importDataset(env.dataset,env.mode)}}
 async load(){return this.storage.load()}
 async dispatch(cmd:Command){const prior=await this.storage.load();const next=reduce(prior,cmd,this.env);if(next!==prior)await this.storage.commit(prior.version,next);return next}
}
