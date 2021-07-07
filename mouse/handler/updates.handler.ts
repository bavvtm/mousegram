import { UpdateSchema } from "../types";
import { getUpdates } from "../types";
import { Emitter } from './../utils/emitter.utils';
import { RunParams } from "../utils/default.utils";
import {
    isMessageUpdate,
    isEditedMessage,
    isChannelPost,
    isEditedChannelPost,
    isInlineQuery,
    isChosenInlineResult,
    isCallbackQuery,
    isShippingQuery,
    isPreCheckoutQuery,
    isPoll,
    isPollAnswerQuery,
    isMyChatMember,
    isChatMember
} from '../utils/distinguish.utils';

/// Helper Polling
export type UpdatesHelper = {
    loopNow( callback: UpdatesCallback, params?: getUpdates ): Promise<void>,
    stopNow(): Promise<void>
}

/// Callback Polling
export type UpdatesCallback = (
    updates?: UpdateSchema[],
    error?: Error
) => void;

export class Context {

    /**
     * Get and Send Context
     * @param update update message
     * @param index number af array
     */
    public getContext(update: UpdateSchema, index: number) {
        /** Send Type */
        /***/if(isMessageUpdate(update)) Emitter.emit('message', update.message)
        else if(isEditedMessage(update)) Emitter.emit('edited_message', update.edited_message) 
        else if(isChannelPost(update)) Emitter.emit('channel_post', update.channel_post)
        else if(isEditedChannelPost(update)) Emitter.emit('edited_channel_post', update.edited_channel_post)
        else if(isInlineQuery(update)) Emitter.emit('inline_query', update.inline_query)
        else if(isChosenInlineResult(update)) Emitter.emit('chosen_inline_result', update.chosen_inline_result)
        else if(isCallbackQuery(update)) Emitter.emit('callback_query', update.callback_query)
        else if(isShippingQuery(update)) Emitter.emit('shipping_query', update.shipping_query)
        else if(isPreCheckoutQuery(update)) Emitter.emit('pre_checkout_query', update.pre_checkout_query)
        else if(isPoll(update)) Emitter.emit('poll', update.poll)
        else if(isPollAnswerQuery(update)) Emitter.emit('poll_answer', update.poll_answer)
        else if(isMyChatMember(update)) Emitter.emit('my_chat_member', update.my_chat_member)
        else if(isChatMember(update)) Emitter.emit('chat_member', update.chat_member);
    }  
}

/** Entry Update */
export class UpdatesEntry {
    private context: Context = new Context();
    isAccept(up: UpdateSchema[]) {
        up.forEach(this.context.getContext);
    }
}

/** Run With Polling Function */
export function isRunWithPolling(
    params: RunParams,
): params is RunParams {
    return !!(params as RunParams).isPolling;
}