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

import { KeyboardSchema } from "../types/markup.schema";

export class Keyboard {

    /** Originaly Schema of Keyboard */
    public readonly keyboard: KeyboardSchema[][] = [[]];

    /**
     * Add To Inline
     * @param buttons your button
     * @returns 
     */
     add(
        ...buttons: KeyboardSchema[]
    ) {
        this.keyboard[this.keyboard.length -1]?.push(...buttons);
        return this;
    }

    /**
     * Row Of Button
     * @param buttons
     * @returns 
     */
    row(
        ...buttons: KeyboardSchema[]
    ) {
        this.keyboard.push(buttons);
        return this;
    }

    /** Internal ================================================================= */
    text(
        {
            text
        }: KeyboardSchema.TextKeyboard
    ) {
        return this.add({ text });
    }

    requestContact(
        {
            text,
            request_contact
        }: KeyboardSchema.RequestContactKeyboard
    ) {
        return this.add({ text, request_contact });
    }

    requestLocation(
        {
            text,
            request_location
        }: KeyboardSchema.RequestLocationKeyboard
    ) {
        return this.add({ text, request_location });
    }

    requestPoll(
        {
            text,
            request_poll
        }: KeyboardSchema.RequestPollKeyboard
    ) {
        return this.add({ text, request_poll });
    }
}