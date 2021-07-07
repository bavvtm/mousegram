import {
    CallbackGame,
    InlineKeyboardButton,
    KeyboardButton,
    KeyboardButtonPollType,
    LoginUrl
} from './generated/components.interfaces';

export namespace ButtonSchema {

    interface TextButton {
        text: string;
    }

    export interface UrlButton extends TextButton, InlineKeyboardButton {
        url: string;
    }

    export interface LoginUrlButton extends TextButton, InlineKeyboardButton {
        login_url: LoginUrl
    }

    export interface CallbackButton extends TextButton, InlineKeyboardButton {
        callback_data: string
    }

    export interface SwitchInlineButton extends TextButton, InlineKeyboardButton {
        switch_inline_query: string;
    }

    export interface SwitchInlineCurrentChatButton extends TextButton, InlineKeyboardButton {
        switch_inline_query_current_chat: string;
    }

    export interface GameButton extends TextButton, InlineKeyboardButton {
        callback_game: CallbackGame;
    }

    export interface PayButton extends TextButton, InlineKeyboardButton {
        pay: boolean;
    }
}

export type ButtonSchema =
    | ButtonSchema.CallbackButton
    | ButtonSchema.GameButton
    | ButtonSchema.LoginUrlButton
    | ButtonSchema.PayButton
    | ButtonSchema.SwitchInlineButton
    | ButtonSchema.SwitchInlineCurrentChatButton
    | ButtonSchema.UrlButton


/** Keyboard */
export namespace KeyboardSchema {
    
    export interface TextKeyboard {
        text: string;
    }

    export interface RequestContactKeyboard extends TextKeyboard, KeyboardButton {
        request_contact: boolean;
    }

    export interface RequestLocationKeyboard extends TextKeyboard, KeyboardButton {
        request_location: boolean
    }

    export interface RequestPollKeyboard extends TextKeyboard, KeyboardButton {
        request_poll: KeyboardButtonPollType
    }
}

export type KeyboardSchema = 
    | KeyboardSchema.TextKeyboard
    | KeyboardSchema.RequestContactKeyboard
    | KeyboardSchema.RequestLocationKeyboard
    | KeyboardSchema.RequestPollKeyboard