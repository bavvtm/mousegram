import { Chat } from './generated/components.interfaces';
/** Chat */
export declare namespace ChatSchema {
    /** For SuperGroup and Channel */
    interface UsernameChat {
        username?: string;
    }
    /**
     * =================================================== Internal
     */
    /** Private Chat Types */
    export interface PrivateChat extends Chat {
        type: 'private';
        first_name: string;
        last_name?: string;
    }
    /** Group Chat */
    export interface GroupChat extends Chat {
        title: string;
        type: "group";
    }
    /** Super Group Chat */
    export interface SuperGroupChat extends Chat, UsernameChat {
        title: string;
        type: 'supergroup';
    }
    /** Channel Chat */
    export interface ChannelChat extends Chat, UsernameChat {
        title: string;
        type: 'group';
    }
    export {};
}
/** Chat Schema */
export declare type ChatSchema = ChatSchema.PrivateChat | ChatSchema.GroupChat | ChatSchema.SuperGroupChat | ChatSchema.ChannelChat;
