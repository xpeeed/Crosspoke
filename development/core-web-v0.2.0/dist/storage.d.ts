import { State, Command, Env } from './game';
export interface Storage {
    load(): Promise<State>;
    commit(expectedVersion: number, next: State): Promise<void>;
}
export declare class MemoryStorage implements Storage {
    private state;
    load(): Promise<State>;
    commit(expectedVersion: number, next: State): Promise<void>;
}
export declare class IndexedDbStorage implements Storage {
    private db;
    constructor(db: IDBDatabase);
    static open(name?: string): Promise<IndexedDbStorage>;
    close(): void;
    load(): Promise<State>;
    commit(expectedVersion: number, next: State): Promise<void>;
}
export declare class Controller {
    private storage;
    private env;
    constructor(storage: Storage, env: Env);
    load(): Promise<State>;
    dispatch(cmd: Command): Promise<State>;
}
