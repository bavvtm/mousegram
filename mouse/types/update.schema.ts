import { 
    CallbackQuery,
    Chat,
    ChatMemberUpdated,
    ChosenInlineResult,
    InlineQuery,
    Message,
    Poll,
    PollAnswer,
    PreCheckoutQuery,
    ShippingQuery,
    Update
} from "./generated/components.interfaces";

import { ChatSchema } from "./chat.schema";

export namespace UpdateSchema {

    /** Channel Type Schema */
    interface Channel {
        chat: ChatSchema.ChannelChat;
        author_signature?: string;
        form?: never;
    }

    /** Non Channel Type Schema */
    interface NonChannel {
        chat: Exclude<Chat, ChatSchema.ChannelChat>;
        author_signature?: string;
        form?: never;
    }

    /** Internal Holding Update Where New Message Share */
    interface NewMessage {
        edit_date?: never
    }

    /** Internal Holding Update Where Edited Message Share */
    interface EditedMessage {
        edit_date: number;
        forward_from?: never;
        forward_from_chat?: never;
        forward_from_message_id?: never;
        forward_signature?: never;
        forward_sender_name?: never;
        forward_date?: never;
    }

    /**
     * =================================================== Internal
     */
    export interface MessageUpdate extends Update {
        message: NewMessage & NonChannel & Message
    }
    export interface EditedMessageUpdate extends Update {
        edited_message: EditedMessage & NonChannel & Message;
    }
    export interface ChannelPostUpdate extends Update {
        channel_post: NewMessage & Channel & Message;
    }
    export interface EditedChannelPostUpdate extends Update {
        edited_channel_post: EditedMessage & Channel & Message;
    }
    export interface InlineQueryUpdate extends Update {
        inline_query: InlineQuery;
    }
    export interface ChosenInlineResultUpdate extends Update {
        chosen_inline_result: ChosenInlineResult;
    }
    export interface CallbackQueryUpdate extends Update {
        callback_query: CallbackQuery;
    }
    export interface ShippingQueryUpdate extends Update {
        shipping_query: ShippingQuery;
    }
    export interface PreCheckoutQueryUpdate extends Update {
        pre_checkout_query: PreCheckoutQuery;
    }
    export interface PollUpdate extends Update {
        poll: Poll;
    }
    export interface PollAnswerUpdate extends Update {
        poll_answer: PollAnswer;
    }
    export interface MyChatMemberUpdate extends Update {
        my_chat_member: ChatMemberUpdated;
    }
    export interface ChatMemberUpdate extends Update {
        chat_member: ChatMemberUpdated
    }

}

/** All Update Type */
export type UpdateSchema =
    | UpdateSchema.CallbackQueryUpdate
    | UpdateSchema.ChannelPostUpdate
    | UpdateSchema.ChatMemberUpdate
    | UpdateSchema.ChosenInlineResultUpdate
    | UpdateSchema.EditedChannelPostUpdate
    | UpdateSchema.EditedMessageUpdate
    | UpdateSchema.InlineQueryUpdate
    | UpdateSchema.MessageUpdate
    | UpdateSchema.MyChatMemberUpdate
    | UpdateSchema.PollAnswerUpdate
    | UpdateSchema.PollUpdate
    | UpdateSchema.PreCheckoutQueryUpdate
    | UpdateSchema.ShippingQueryUpdate

export type UpdateType =
    | 'callback_query'
    | 'channel_post'
    | 'chat_member'
    | 'chosen_inline_result'
    | 'edited_channel_post'
    | 'edited_message'
    | 'inline_query'
    | 'message'
    | 'my_chat_member'
    | 'poll_answer'
    | 'poll'
    | 'pre_checkout_query'
    | 'shipping_query'

export type UpdateEvent = Record<UpdateType, any>;