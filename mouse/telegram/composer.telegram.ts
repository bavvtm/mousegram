import { Methods } from "./methods.telegram";
import { ForceReply, InlineKeyboardMarkup, InputFile, MessageEntity, ReplyKeyboardMarkup, ReplyKeyboardRemove } from "../types";
import { SmartActionSchema } from "../types/common.schema";

export function Composer(ctx: any): SmartActionSchema {
    const method = new Methods();
    const id = ctx.chat.id;

    return {
        ctx,
        
        reply(
            msg: string,
            parse_mode?: string,
            markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | undefined,
            entitiy?: MessageEntity[] | undefined
        ) {
            method.sendMessage({
                chat_id: id,
                text: msg,
                reply_markup: markup,
                entities: entitiy,
                parse_mode: parse_mode
            });
        },

        replySticker(
            sticker: InputFile | string,
            markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | undefined
        ) {
            method.sendSticker({
                chat_id: id,
                sticker: sticker,
                reply_markup: markup
            });
        },

        replyPhoto(
            photo: InputFile | string,
            caption?: string,
            parse_mode?: string,
            markup?: InlineKeyboardMarkup | ReplyKeyboardMarkup | ReplyKeyboardRemove | ForceReply | undefined,
            entitiy?: MessageEntity[] | undefined
        ) {
            method.sendPhoto({
                chat_id: id,
                photo: photo,
                caption: caption,
                parse_mode: parse_mode,
                reply_markup: markup,
                caption_entities: entitiy
            });
        }
    }
}