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
export declare class Keyboard {
    /** Originaly Schema of Keyboard */
    readonly keyboard: KeyboardSchema[][];
    /**
     * Add To Inline
     * @param buttons your button
     * @returns
     */
    add(...buttons: KeyboardSchema[]): this;
    /**
     * Row Of Button
     * @param buttons
     * @returns
     */
    row(...buttons: KeyboardSchema[]): this;
    /** Internal ================================================================= */
    text({ text }: KeyboardSchema.TextKeyboard): this;
    requestContact({ text, request_contact }: KeyboardSchema.RequestContactKeyboard): this;
    requestLocation({ text, request_location }: KeyboardSchema.RequestLocationKeyboard): this;
    requestPoll({ text, request_poll }: KeyboardSchema.RequestPollKeyboard): this;
}
