import { Methods } from "../telegram/methods.telegram";
import { Polling } from "../network/polling.network";
import { UpdatesEntry, UpdatesHelper, UpdatesCallback, isRunWithPolling } from "../handler/updates.handler";
import { getUpdates, UpdateType } from "../types";
import { EventReceiver, Emitter } from "../utils/emitter.utils";
import { DefaultOptions, RunParams } from "../utils/default.utils";
import { DEFAULT_OPTIONS } from '../utils/request.utils';
import { responseTree, RouterSchema, SmartActionSchema } from "../types/common.schema";
import { Composer } from "../telegram/composer.telegram";
import { InlineKeyboard } from "./inlineKeyboard.class";
import { Keyboard } from "./keyboard.class";

const DEFAULT_POLLING_PARAMS: getUpdates = {
    timeout: 50
}

export class Mouse {

    constructor(token: string, options?: DefaultOptions) {
        DEFAULT_OPTIONS.token = token;
        this.params = { isPolling: true };

        if(options) {
            if(options.polling) this.run();
        }
    }

    /** Private */
    private updatesHelper?: UpdatesHelper;
    private params: RunParams;

    /** 
     * Public
     * SubClass
     */
    public method: Methods = new Methods();
    public inline_keyboard: InlineKeyboard = new InlineKeyboard();
    public keyboard: Keyboard = new Keyboard();

    /** Event */
    on(
        event: UpdateType,
        trigger: EventReceiver<any>
    ) {
        Emitter.on(event, trigger);
    }

    /** Instant Command */
    cmd(
        command: string,
        trigger: EventReceiver<SmartActionSchema>
    ) {
        this.on('message', (ctx) => {
            if(ctx.text == "/"+command) trigger(Composer(ctx))
        });
    }

    text(
        text: string,
        trigger: EventReceiver<SmartActionSchema>
    ) {
        this.on('message', (ctx) => {
            if(ctx.text == text) trigger(Composer(ctx))
        });
    }

    regex(
        regex: RegExp,
        trigger: EventReceiver<SmartActionSchema>
    ) {
        this.on('message', (ctx) => {
            if(regex.test(ctx.text)) trigger(Composer(ctx))
        });
    }

    /** Router */
    router(
        routerTarget: RouterSchema
    ) {
        routerTarget.map((i) => {
            let path = i.path;
            let event = i.event;
            let actions = i.action;

            this.on(event, (ctx) => {
                /***/if(event == 'message' && ctx.text == path) actions(Composer(ctx))
                else if(event == 'edited_message' && ctx.edited_message == path) actions(Composer(ctx))
                else if(event == 'channel_post' && ctx.channel_post == path) actions(Composer(ctx))
                else if(event == 'edited_channel_post' && ctx.edited_channel_post == path) actions(Composer(ctx))
                else if(event == 'inline_query' && ctx.inline_query == path) actions(Composer(ctx))
                else if(event == 'chosen_inline_result' && ctx.chosen_inline_result == path) actions(Composer(ctx))
                else if(event == 'callback_query' && ctx.callback_query == path) actions(Composer(ctx))
                else if(event == 'shipping_query' && ctx.shipping_query == path) actions(Composer(ctx))
                else if(event == 'pre_checkout_query' && ctx.pre_checkout_query == path) actions(Composer(ctx))
                else if(event == 'poll' && ctx.poll == path) actions(Composer(ctx))
                else if(event == 'poll_answer' && ctx.poll_answer == path) actions(Composer(ctx))
                else if(event == 'my_chat_member' && ctx.my_chat_member == path) actions(Composer(ctx))
                else if(event == 'chat_member' && ctx.chat_member == path) actions(Composer(ctx));
            });
        });
    }

    /** Polling */
    run() {
        const updatesCallback: UpdatesCallback = (updates, error) => {
            if (error) {
                throw error;
            }
            if (updates) {
                let Entry: UpdatesEntry = new UpdatesEntry();
                return Entry.isAccept(updates);
            }
        };
      
        if (isRunWithPolling(this.params)) {
            const pollingParams = this.params.isPolling === true
                ? DEFAULT_POLLING_PARAMS
                : this.params.isPolling;
            this.updatesHelper = new Polling();
            return this.updatesHelper.loopNow(updatesCallback, pollingParams);
        }
    }

    stop() {
        if (this.updatesHelper) {
          this.updatesHelper.stopNow();
        }
    }
    /** End Polling */
}