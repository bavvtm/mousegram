"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Composer = void 0;
const methods_telegram_1 = require("./methods.telegram");
function Composer(ctx) {
    const method = new methods_telegram_1.Methods();
    const id = ctx.chat.id;
    return {
        ctx,
        reply(msg, parse_mode, markup, entitiy) {
            method.sendMessage({
                chat_id: id,
                text: msg,
                reply_markup: markup,
                entities: entitiy,
                parse_mode: parse_mode
            });
        },
        replySticker(sticker, markup) {
            method.sendSticker({
                chat_id: id,
                sticker: sticker,
                reply_markup: markup
            });
        },
        replyPhoto(photo, caption, parse_mode, markup, entitiy) {
            method.sendPhoto({
                chat_id: id,
                photo: photo,
                caption: caption,
                parse_mode: parse_mode,
                reply_markup: markup,
                caption_entities: entitiy
            });
        }
    };
}
exports.Composer = Composer;
