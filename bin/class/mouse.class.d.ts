import { Methods } from "../telegram/methods.telegram";
import { UpdateType } from "../types";
import { EventReceiver } from "../utils/emitter.utils";
import { DefaultOptions } from "../utils/default.utils";
export declare class Mouse {
    constructor(token: string, options?: DefaultOptions);
    /** Private */
    private updatesHelper?;
    private params;
    /**
     * Public
     * SubClass
     */
    method: Methods;
    /** Event */
    on(event: UpdateType, trigger: EventReceiver<any>): void;
    /** Polling */
    run(): Promise<void> | undefined;
    stop(): void;
}
