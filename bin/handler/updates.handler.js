"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRunWithPolling = exports.UpdatesEntry = exports.Context = void 0;
const emitter_utils_1 = require("./../utils/emitter.utils");
const distinguish_utils_1 = require("../utils/distinguish.utils");
class Context {
    /**
     * Get and Send Context
     * @param update update message
     * @param index number af array
     */
    getContext(update, index) {
        /** Send Type */
        /***/ if (distinguish_utils_1.isMessageUpdate(update))
            emitter_utils_1.Emitter.emit('message', update.message);
        else if (distinguish_utils_1.isEditedMessage(update))
            emitter_utils_1.Emitter.emit('edited_message', update.edited_message);
        else if (distinguish_utils_1.isChannelPost(update))
            emitter_utils_1.Emitter.emit('channel_post', update.channel_post);
        else if (distinguish_utils_1.isEditedChannelPost(update))
            emitter_utils_1.Emitter.emit('edited_channel_post', update.edited_channel_post);
        else if (distinguish_utils_1.isInlineQuery(update))
            emitter_utils_1.Emitter.emit('inline_query', update.inline_query);
        else if (distinguish_utils_1.isChosenInlineResult(update))
            emitter_utils_1.Emitter.emit('chosen_inline_result', update.chosen_inline_result);
        else if (distinguish_utils_1.isCallbackQuery(update))
            emitter_utils_1.Emitter.emit('callback_query', update.callback_query);
        else if (distinguish_utils_1.isShippingQuery(update))
            emitter_utils_1.Emitter.emit('shipping_query', update.shipping_query);
        else if (distinguish_utils_1.isPreCheckoutQuery(update))
            emitter_utils_1.Emitter.emit('pre_checkout_query', update.pre_checkout_query);
        else if (distinguish_utils_1.isPoll(update))
            emitter_utils_1.Emitter.emit('poll', update.poll);
        else if (distinguish_utils_1.isPollAnswerQuery(update))
            emitter_utils_1.Emitter.emit('poll_answer', update.poll_answer);
        else if (distinguish_utils_1.isMyChatMember(update))
            emitter_utils_1.Emitter.emit('my_chat_member', update.my_chat_member);
        else if (distinguish_utils_1.isChatMember(update))
            emitter_utils_1.Emitter.emit('chat_member', update.chat_member);
    }
}
exports.Context = Context;
/** Entry Update */
class UpdatesEntry {
    constructor() {
        this.context = new Context();
    }
    isAccept(up) {
        up.forEach(this.context.getContext);
    }
}
exports.UpdatesEntry = UpdatesEntry;
/** Run With Polling Function */
function isRunWithPolling(params) {
    return !!params.isPolling;
}
exports.isRunWithPolling = isRunWithPolling;
