"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InlineKeyboard = void 0;
class InlineKeyboard {
    constructor() {
        /** Originaly Schema of Keyboard */
        this.inline_keyboard = [[]];
        /** End Internal ================================================================= :) */
    }
    /**
     * Add To Inline
     * @param buttons your button
     * @returns
     */
    add(...buttons) {
        var _a;
        (_a = this.inline_keyboard[this.inline_keyboard.length - 1]) === null || _a === void 0 ? void 0 : _a.push(...buttons);
        return this;
    }
    /**
     * Row Of Button
     * @param buttons
     * @returns
     */
    row(...buttons) {
        this.inline_keyboard.push(buttons);
        return this;
    }
    /** Internal ================================================================= */
    callback({ text, callback_data }) {
        return this.add({ text, callback_data });
    }
    url({ text, url }) {
        return this.add({ text, url });
    }
    login({ text, login_url }) {
        return this.add({ text, login_url });
    }
    switchInline({ text, switch_inline_query }) {
        return this.add({ text, switch_inline_query });
    }
    switchInlineCurrent({ text, switch_inline_query_current_chat }) {
        return this.add({ text, switch_inline_query_current_chat });
    }
    game({ text, callback_game }) {
        return this.add({ text, callback_game });
    }
    pay({ text, pay }) {
        return this.add({ text, pay });
    }
}
exports.InlineKeyboard = InlineKeyboard;
