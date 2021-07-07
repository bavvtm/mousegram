import { UpdateSchema } from './../types/update.schema';
/** Message */
export declare function isMessageUpdate(update: UpdateSchema): update is UpdateSchema.MessageUpdate;
/** EditedMessage */
export declare function isEditedMessage(update: UpdateSchema): update is UpdateSchema.EditedMessageUpdate;
/** ChannelPost */
export declare function isChannelPost(update: UpdateSchema): update is UpdateSchema.ChannelPostUpdate;
/** EditedChannelPost */
export declare function isEditedChannelPost(update: UpdateSchema): update is UpdateSchema.EditedChannelPostUpdate;
/** InlineQuery */
export declare function isInlineQuery(update: UpdateSchema): update is UpdateSchema.InlineQueryUpdate;
/** ChosenInlineResult */
export declare function isChosenInlineResult(update: UpdateSchema): update is UpdateSchema.ChosenInlineResultUpdate;
/** CallbackQuery */
export declare function isCallbackQuery(update: UpdateSchema): update is UpdateSchema.CallbackQueryUpdate;
/** ShippingQuery */
export declare function isShippingQuery(update: UpdateSchema): update is UpdateSchema.ShippingQueryUpdate;
/** PreCheckoutQuery */
export declare function isPreCheckoutQuery(update: UpdateSchema): update is UpdateSchema.PreCheckoutQueryUpdate;
/** Poll */
export declare function isPoll(update: UpdateSchema): update is UpdateSchema.PollUpdate;
/** PollAnswerQuery */
export declare function isPollAnswerQuery(update: UpdateSchema): update is UpdateSchema.PollAnswerUpdate;
/** MyChatMember */
export declare function isMyChatMember(update: UpdateSchema): update is UpdateSchema.MyChatMemberUpdate;
/** ChatMember */
export declare function isChatMember(update: UpdateSchema): update is UpdateSchema.ChatMemberUpdate;
