"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Polling = void 0;
const logger_utils_1 = __importDefault(require("../utils/logger.utils"));
const request_utils_1 = require("../utils/request.utils");
const methods_telegram_1 = require("../telegram/methods.telegram");
class Polling {
    constructor() {
        this._params = {};
        this._run_polling = false;
        this._method = new methods_telegram_1.Methods();
        this._offset = 0;
    }
    async loopNow(_callback) {
        let botInfo = await this._method.getMe();
        if (botInfo == undefined)
            return;
        logger_utils_1.default.debug(`🐭 ( Polling ) ${botInfo.result.first_name} Executed`);
        await this.stopNow();
        this._run_polling = true;
        this._callback = _callback;
        return this._pool();
    }
    async stopNow() {
        this._run_polling = false;
    }
    async _pool() {
        while (this._run_polling) {
            try {
                const response = await request_utils_1._Request('getUpdates', {
                    ...this._params
                });
                const res = await response.result;
                if (Array.isArray(res) && this._callback) {
                    if (res[res.length - 1] !== undefined) {
                        this._offset = res[res.length - 1].update_id + 1;
                        this._params = {
                            ...this._params,
                            offset: this._offset
                        };
                        if (this._run_polling) {
                            this._callback(res);
                        }
                    }
                }
            }
            catch (err) {
                logger_utils_1.default.debug('🐁 ( Polling ) Error 500: Internal Server Error');
                this._callback && this._callback(undefined, err);
            }
        }
    }
}
exports.Polling = Polling;
