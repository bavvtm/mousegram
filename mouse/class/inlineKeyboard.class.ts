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

export class InlineKeyboard {

    /** Originaly Schema of Keyboard */
    public readonly inline_keyboard: ButtonSchema[][] = [[]];

    /**
     * Add To Inline
     * @param buttons your button
     * @returns 
     */
    add(
        ...buttons: ButtonSchema[]
    ) {
        this.inline_keyboard[this.inline_keyboard.length -1]?.push(...buttons);
        return this;
    }

    /**
     * Row Of Button
     * @param buttons
     * @returns 
     */
    row(
        ...buttons: ButtonSchema[]
    ) {
        this.inline_keyboard.push(buttons);
        return this;
    }

    /** Internal ================================================================= */
    callback(
        {
            text,
            callback_data
        }: ButtonSchema.CallbackButton
    ) {
        return this.add({ text, callback_data })
    }

    url(
        {
            text,
            url    
        }: ButtonSchema.UrlButton
    ) {
        return this.add({ text, url });
    }

    login(
        {
            text,
            login_url
        }: ButtonSchema.LoginUrlButton
    ) {
        return this.add({ text, login_url })
    }

    switchInline(
        {
            text,
            switch_inline_query
        }: ButtonSchema.SwitchInlineButton
    ) {
        return this.add({ text, switch_inline_query });
    }

    switchInlineCurrent(
        {
            text,
            switch_inline_query_current_chat
        }: ButtonSchema.SwitchInlineCurrentChatButton
    ) {
        return this.add({ text, switch_inline_query_current_chat })
    }

    game(
        {
            text,
            callback_game
        }: ButtonSchema.GameButton
    ) {
        return this.add({ text, callback_game });
    }

    pay(
        {
            text,
            pay
        }: ButtonSchema.PayButton
    ) {
        return this.add({ text, pay });
    }
    /** End Internal ================================================================= :) */
}