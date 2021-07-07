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
exports.Keyboard = void 0;
class Keyboard {
    constructor() {
        /** Originaly Schema of Keyboard */
        this.keyboard = [[]];
    }
    /**
     * Add To Inline
     * @param buttons your button
     * @returns
     */
    add(...buttons) {
        var _a;
        (_a = this.keyboard[this.keyboard.length - 1]) === null || _a === void 0 ? void 0 : _a.push(...buttons);
        return this;
    }
    /**
     * Row Of Button
     * @param buttons
     * @returns
     */
    row(...buttons) {
        this.keyboard.push(buttons);
        return this;
    }
    /** Internal ================================================================= */
    text({ text }) {
        return this.add({ text });
    }
    requestContact({ text, request_contact }) {
        return this.add({ text, request_contact });
    }
    requestLocation({ text, request_location }) {
        return this.add({ text, request_location });
    }
    requestPoll({ text, request_poll }) {
        return this.add({ text, request_poll });
    }
}
exports.Keyboard = Keyboard;
