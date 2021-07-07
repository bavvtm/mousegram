import { UpdateSchema } from './../types/update.schema';

/** Message */
export function isMessageUpdate(update: UpdateSchema): update is UpdateSchema.MessageUpdate {
    return !!(update as UpdateSchema.MessageUpdate).message;
}
/** EditedMessage */
export function isEditedMessage(update: UpdateSchema): update is UpdateSchema.EditedMessageUpdate {
    return !!(update as UpdateSchema.EditedMessageUpdate).edited_message;
}
/** ChannelPost */
export function isChannelPost(update: UpdateSchema): update is UpdateSchema.ChannelPostUpdate {
    return !!(update as UpdateSchema.ChannelPostUpdate).channel_post;
}
/** EditedChannelPost */
export function isEditedChannelPost(update: UpdateSchema): update is UpdateSchema.EditedChannelPostUpdate {
    return !!(update as UpdateSchema.EditedChannelPostUpdate).edited_channel_post;
}
/** InlineQuery */
export function isInlineQuery(update: UpdateSchema): update is UpdateSchema.InlineQueryUpdate {
    return !!(update as UpdateSchema.InlineQueryUpdate).inline_query;
}
/** ChosenInlineResult */
export function isChosenInlineResult(update: UpdateSchema): update is UpdateSchema.ChosenInlineResultUpdate {
    return !!(update as UpdateSchema.ChosenInlineResultUpdate).chosen_inline_result;
}
/** CallbackQuery */
export function isCallbackQuery(update: UpdateSchema): update is UpdateSchema.CallbackQueryUpdate {
    return !!(update as UpdateSchema.CallbackQueryUpdate).callback_query;
}
/** ShippingQuery */
export function isShippingQuery(update: UpdateSchema): update is UpdateSchema.ShippingQueryUpdate {
    return !!(update as UpdateSchema.ShippingQueryUpdate).shipping_query;
}
/** PreCheckoutQuery */
export function isPreCheckoutQuery(update: UpdateSchema): update is UpdateSchema.PreCheckoutQueryUpdate {
    return !!(update as UpdateSchema.PreCheckoutQueryUpdate).pre_checkout_query;
}
/** Poll */
export function isPoll(update: UpdateSchema): update is UpdateSchema.PollUpdate {
    return !!(update as UpdateSchema.PollUpdate).poll;
}
/** PollAnswerQuery */
export function isPollAnswerQuery(update: UpdateSchema): update is UpdateSchema.PollAnswerUpdate {
    return !!(update as UpdateSchema.PollAnswerUpdate).poll_answer;
}
/** MyChatMember */
export function isMyChatMember(update: UpdateSchema): update is UpdateSchema.MyChatMemberUpdate {
    return !!(update as UpdateSchema.MyChatMemberUpdate).my_chat_member;
}
/** ChatMember */
export function isChatMember(update: UpdateSchema): update is UpdateSchema.ChatMemberUpdate {
    return !!(update as UpdateSchema.ChatMemberUpdate).chat_member;
}