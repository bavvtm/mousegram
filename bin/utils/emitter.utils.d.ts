import { UpdateEvent } from "../types";
export declare type EventMap = Record<string, any>;
export declare type EventKey<T extends EventMap> = string & keyof T;
export declare type EventReceiver<T> = (params: T) => void;
export interface EmitterInterface<T extends EventMap> {
    on<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): void;
    off<K extends EventKey<T>>(eventName: K, fn: EventReceiver<T[K]>): void;
    emit<K extends EventKey<T>>(eventName: K, params: T[K]): void;
}
/** Emitter Handler For 'on' Methods */
export declare function EmitterHandler<T extends EventMap>(): EmitterInterface<T>;
export declare const Emitter: EmitterInterface<UpdateEvent>;
