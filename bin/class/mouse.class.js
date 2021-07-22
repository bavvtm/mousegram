"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mouse = void 0;
const methods_telegram_1 = require("../telegram/methods.telegram");
const polling_network_1 = require("../network/polling.network");
const updates_handler_1 = require("../handler/updates.handler");
const emitter_utils_1 = require("../utils/emitter.utils");
const request_utils_1 = require("../utils/request.utils");
const composer_telegram_1 = require("../telegram/composer.telegram");
const inlineKeyboard_class_1 = require("./inlineKeyboard.class");
const keyboard_class_1 = require("./keyboard.class");
const DEFAULT_POLLING_PARAMS = {
    timeout: 50
};
class Mouse {
    constructor(token, options) {
        /**
         * Public
         * SubClass
         */
        this.method = new methods_telegram_1.Methods();
        this.inline_keyboard = new inlineKeyboard_class_1.InlineKeyboard();
        this.keyboard = new keyboard_class_1.Keyboard();
        request_utils_1.DEFAULT_OPTIONS.token = token;
        this.params = { isPolling: true };
        if (options) {
            if (options.polling)
                this.run();
        }
    }
    /** Event */
    on(event, trigger) {
        emitter_utils_1.Emitter.on(event, trigger);
    }
    /** Instant Command */
    cmd(command, trigger) {
        this.on('message', (ctx) => {
            if (ctx.text == "/" + command)
                trigger(composer_telegram_1.Composer(ctx));
        });
    }
    text(text, trigger) {
        this.on('message', (ctx) => {
            if (ctx.text == text)
                trigger(composer_telegram_1.Composer(ctx));
        });
    }
    regex(regex, trigger) {
        this.on('message', (ctx) => {
            if (regex.test(ctx.text))
                trigger(composer_telegram_1.Composer(ctx));
        });
    }
    /** Router */
    router(routerTarget) {
        routerTarget.map((i) => {
            let path = i.path;
            let event = i.event;
            let actions = i.action;
            this.on(event, (ctx) => {
                /***/ if (event == 'message' && ctx.text == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'edited_message' && ctx.edited_message == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'channel_post' && ctx.channel_post == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'edited_channel_post' && ctx.edited_channel_post == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'inline_query' && ctx.inline_query == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'chosen_inline_result' && ctx.chosen_inline_result == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'callback_query' && ctx.callback_query == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'shipping_query' && ctx.shipping_query == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'pre_checkout_query' && ctx.pre_checkout_query == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'poll' && ctx.poll == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'poll_answer' && ctx.poll_answer == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'my_chat_member' && ctx.my_chat_member == path)
                    actions(composer_telegram_1.Composer(ctx));
                else if (event == 'chat_member' && ctx.chat_member == path)
                    actions(composer_telegram_1.Composer(ctx));
            });
        });
    }
    /** Polling */
    run() {
        const updatesCallback = (updates, error) => {
            if (error) {
                throw error;
            }
            if (updates) {
                let Entry = new updates_handler_1.UpdatesEntry();
                return Entry.isAccept(updates);
            }
        };
        if (updates_handler_1.isRunWithPolling(this.params)) {
            const pollingParams = this.params.isPolling === true
                ? DEFAULT_POLLING_PARAMS
                : this.params.isPolling;
            this.updatesHelper = new polling_network_1.Polling();
            return this.updatesHelper.loopNow(updatesCallback, pollingParams);
        }
    }
    stop() {
        if (this.updatesHelper) {
            this.updatesHelper.stopNow();
        }
    }
}
exports.Mouse = Mouse;
