import { Methods } from "../telegram/methods.telegram";
import { UpdateType } from "../types";
import { EventReceiver } from "../utils/emitter.utils";
import { DefaultOptions } from "../utils/default.utils";
import { RouterSchema, SmartActionSchema } from "../types/common.schema";
import { InlineKeyboard } from "./inlineKeyboard.class";
import { Keyboard } from "./keyboard.class";
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
    inline_keyboard: InlineKeyboard;
    keyboard: Keyboard;
    /** Event */
    on(event: UpdateType, trigger: EventReceiver<any>): void;
    /** Instant Command */
    cmd(command: string, trigger: EventReceiver<SmartActionSchema>): void;
    text(text: string, trigger: EventReceiver<SmartActionSchema>): void;
    regex(regex: RegExp, trigger: EventReceiver<SmartActionSchema>): void;
    /** Router */
    router(routerTarget: RouterSchema): void;
    /** Polling */
    run(): Promise<void> | undefined;
    stop(): void;
}
