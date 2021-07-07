import { UpdateSchema } from "../types";
import { getUpdates } from "../types";
import { RunParams } from "../utils/default.utils";
export declare type UpdatesHelper = {
    loopNow(callback: UpdatesCallback, params?: getUpdates): Promise<void>;
    stopNow(): Promise<void>;
};
export declare type UpdatesCallback = (updates?: UpdateSchema[], error?: Error) => void;
export declare class Context {
    /**
     * Get and Send Context
     * @param update update message
     * @param index number af array
     */
    getContext(update: UpdateSchema, index: number): void;
}
/** Entry Update */
export declare class UpdatesEntry {
    private context;
    isAccept(up: UpdateSchema[]): void;
}
/** Run With Polling Function */
export declare function isRunWithPolling(params: RunParams): params is RunParams;
