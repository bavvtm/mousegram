"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isChatMember = exports.isMyChatMember = exports.isPollAnswerQuery = exports.isPoll = exports.isPreCheckoutQuery = exports.isShippingQuery = exports.isCallbackQuery = exports.isChosenInlineResult = exports.isInlineQuery = exports.isEditedChannelPost = exports.isChannelPost = exports.isEditedMessage = exports.isMessageUpdate = void 0;
/** Message */
function isMessageUpdate(update) {
    return !!update.message;
}
exports.isMessageUpdate = isMessageUpdate;
/** EditedMessage */
function isEditedMessage(update) {
    return !!update.edited_message;
}
exports.isEditedMessage = isEditedMessage;
/** ChannelPost */
function isChannelPost(update) {
    return !!update.channel_post;
}
exports.isChannelPost = isChannelPost;
/** EditedChannelPost */
function isEditedChannelPost(update) {
    return !!update.edited_channel_post;
}
exports.isEditedChannelPost = isEditedChannelPost;
/** InlineQuery */
function isInlineQuery(update) {
    return !!update.inline_query;
}
exports.isInlineQuery = isInlineQuery;
/** ChosenInlineResult */
function isChosenInlineResult(update) {
    return !!update.chosen_inline_result;
}
exports.isChosenInlineResult = isChosenInlineResult;
/** CallbackQuery */
function isCallbackQuery(update) {
    return !!update.callback_query;
}
exports.isCallbackQuery = isCallbackQuery;
/** ShippingQuery */
function isShippingQuery(update) {
    return !!update.shipping_query;
}
exports.isShippingQuery = isShippingQuery;
/** PreCheckoutQuery */
function isPreCheckoutQuery(update) {
    return !!update.pre_checkout_query;
}
exports.isPreCheckoutQuery = isPreCheckoutQuery;
/** Poll */
function isPoll(update) {
    return !!update.poll;
}
exports.isPoll = isPoll;
/** PollAnswerQuery */
function isPollAnswerQuery(update) {
    return !!update.poll_answer;
}
exports.isPollAnswerQuery = isPollAnswerQuery;
/** MyChatMember */
function isMyChatMember(update) {
    return !!update.my_chat_member;
}
exports.isMyChatMember = isMyChatMember;
/** ChatMember */
function isChatMember(update) {
    return !!update.chat_member;
}
exports.isChatMember = isChatMember;
