/** Format Inline
{
    inline_keyboard: [
        [
            { Button 1 },
            { Button 2 }
        ],
        [
            { Button 3 }
        ]
    ]
}

/** Format Reply
{
    keyboard: [
        [
            { Button 1 },
            { Button 2 }
        ]
    ]
}
*/
import { ButtonSchema } from "../types/markup.schema";
export declare class InlineKeyboard {
    /** Originaly Schema of Keyboard */
    readonly inline_keyboard: ButtonSchema[][];
    /**
     * Add To Inline
     * @param buttons your button
     * @returns
     */
    add(...buttons: ButtonSchema[]): this;
    /**
     * Row Of Button
     * @param buttons
     * @returns
     */
    row(...buttons: ButtonSchema[]): this;
    /** Internal ================================================================= */
    callback({ text, callback_data }: ButtonSchema.CallbackButton): this;
    url({ text, url }: ButtonSchema.UrlButton): this;
    login({ text, login_url }: ButtonSchema.LoginUrlButton): this;
    switchInline({ text, switch_inline_query }: ButtonSchema.SwitchInlineButton): this;
    switchInlineCurrent({ text, switch_inline_query_current_chat }: ButtonSchema.SwitchInlineCurrentChatButton): this;
    game({ text, callback_game }: ButtonSchema.GameButton): this;
    pay({ text, pay }: ButtonSchema.PayButton): this;
}
