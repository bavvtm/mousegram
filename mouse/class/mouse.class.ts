import { Methods } from "../telegram/methods.telegram";
import { Polling } from "../network/polling.network";
import { UpdatesEntry, UpdatesHelper, UpdatesCallback, isRunWithPolling } from "../handler/updates.handler";
import { getUpdates, UpdateType } from "../types";
import { EventReceiver, Emitter } from "../utils/emitter.utils";
import { DefaultOptions, RunParams } from "../utils/default.utils";
import { DEFAULT_OPTIONS } from '../utils/request.utils';

const DEFAULT_POLLING_PARAMS: getUpdates = {
    timeout: 50
}

export class Mouse {

    constructor(token: string, options?: DefaultOptions) {
        DEFAULT_OPTIONS.token = token;
        this.params = { isPolling: true };

        if(options) {
            if(options.polling) this.run();
        }
    }

    /** Private */
    private updatesHelper?: UpdatesHelper;
    private params: RunParams;

    /** 
     * Public
     * SubClass
     */
    public method: Methods = new Methods();

    /** Event */
    on(
        event: UpdateType,
        trigger: EventReceiver<any>
    ) {
        Emitter.on(event, trigger);
    }

    /** Polling */
    run() {
        const updatesCallback: UpdatesCallback = (updates, error) => {
            if (error) {
                throw error;
            }
            if (updates) {
                let Entry: UpdatesEntry = new UpdatesEntry();
                return Entry.isAccept(updates);
            }
        };
      
        if (isRunWithPolling(this.params)) {
            const pollingParams = this.params.isPolling === true
                ? DEFAULT_POLLING_PARAMS
                : this.params.isPolling;
            this.updatesHelper = new Polling();
            return this.updatesHelper.loopNow(updatesCallback, pollingParams);
        }
    }

    stop() {
        if (this.updatesHelper) {
          this.updatesHelper.stopNow();
        }
    }
    /** End Polling */
}