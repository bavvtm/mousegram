import Logger from "./logger.utils";
import { UpdateEvent } from "../types";

export type EventMap = Record<string, any>;
export type EventKey<T extends EventMap> = string & keyof T;
export type EventReceiver<T> = (params: T) => void;

export interface EmitterInterface<T extends EventMap> {
    on<K extends EventKey<T>>
        (eventName: K, fn: EventReceiver<T[K]>): void;

    off<K extends EventKey<T>>
        (eventName: K, fn: EventReceiver<T[K]>): void;

    emit<K extends EventKey<T>>
        (eventName: K, params: T[K]): void;
}

/** Emitter Handler For 'on' Methods */
export function EmitterHandler<T extends EventMap>(): EmitterInterface<T> {
    const listeners: {
        [K in keyof EventMap]?: Array<(p: EventMap[K]) => void>;
    } = {};
  
    return {
        on(key, fn) {
            try {
                listeners[key] = (listeners[key] || []).concat(fn);
            } catch(err) {
                Logger.debug(err.message);
            }
        },
        off(key, fn) {
            try {
                listeners[key] = (listeners[key] || []).filter(f => f !== fn);
            } catch(err) {
                Logger.debug(err.message);
            }
        },
        emit(key, data) {
            try {
                (listeners[key] || []).forEach(function(fn) {
                    fn(data);
                });
            } catch(err) {
                Logger.debug(err.message);
            }
        },
    };
}

export const Emitter = EmitterHandler<UpdateEvent>();