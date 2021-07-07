"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mouse = void 0;
const methods_telegram_1 = require("../telegram/methods.telegram");
const polling_network_1 = require("../network/polling.network");
const updates_handler_1 = require("../handler/updates.handler");
const emitter_utils_1 = require("../utils/emitter.utils");
const request_utils_1 = require("../utils/request.utils");
const DEFAULT_POLLING_PARAMS = {
    timeout: 50
};
class Mouse {
    constructor(token, options) {
        /**
         * Public
         * SubClass
         */
        this.method = new methods_telegram_1.Methods();
        request_utils_1.DEFAULT_OPTIONS.token = token;
        this.params = { isPolling: true };
        if (options) {
            if (options.polling)
                this.run();
        }
    }
    /** Event */
    on(event, trigger) {
        emitter_utils_1.Emitter.on(event, trigger);
    }
    /** Polling */
    run() {
        const updatesCallback = (updates, error) => {
            if (error) {
                throw error;
            }
            if (updates) {
                let Entry = new updates_handler_1.UpdatesEntry();
                return Entry.isAccept(updates);
            }
        };
        if (updates_handler_1.isRunWithPolling(this.params)) {
            const pollingParams = this.params.isPolling === true
                ? DEFAULT_POLLING_PARAMS
                : this.params.isPolling;
            this.updatesHelper = new polling_network_1.Polling();
            return this.updatesHelper.loopNow(updatesCallback, pollingParams);
        }
    }
    stop() {
        if (this.updatesHelper) {
            this.updatesHelper.stopNow();
        }
    }
}
exports.Mouse = Mouse;
