import { EventReceiver } from "../utils/emitter.utils";
import { ForceReply, InlineKeyboardMarkup, InputFile, MessageEntity, ReplyKeyboardMarkup, ReplyKeyboardRemove } from "./generated/components.interfaces";
import { UpdateType } from "./update.schema";
export interface SmartActionSchema {
    ctx: any;
    reply(msg: string, parse_mode?: string, markup?: InlineKeyboardMarkup | ReplyKeyboardRemove | ReplyKeyboardMarkup | ForceReply | undefined, entitiy?: MessageEntity[] | undefined): void;
    replySticker(sticker: InputFile | string, markup?: InlineKeyboardMarkup | ReplyKeyboardRemove | ReplyKeyboardMarkup | ForceReply | undefined): void;
    replyPhoto(photo: InputFile | string, caption?: string, parse_mode?: string, markup?: InlineKeyboardMarkup | ReplyKeyboardRemove | ReplyKeyboardMarkup | ForceReply | undefined, entitiy?: MessageEntity[] | undefined): void;
}
export declare type responseTree = (msg?: any, trigger?: SmartActionSchema) => void;
export declare type RouterSchemaSub = {
    path: string | RegExp;
    event: UpdateType;
    action: EventReceiver<SmartActionSchema>;
};
export declare type RouterSchema = RouterSchemaSub[];
