import { getUpdates } from "../types"

/** Default Options Schema */
export interface DefaultOptionsSchema {
    /**  
    * Bot Token
    */
    token?: string;
}

/** default bot option */
export interface DefaultOptions {
    polling: boolean;
}

/** running params */
export type RunParams = {
    isPolling: getUpdates | true;
}