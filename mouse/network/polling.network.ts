import Logger from '../utils/logger.utils';
import { _Request } from '../utils/request.utils';
import { Methods } from '../telegram/methods.telegram';
import { UpdatesCallback, UpdatesHelper } from '../handler/updates.handler';
import { getUpdates } from '../types';

export class Polling implements UpdatesHelper {

    private _callback?: UpdatesCallback;
    private _params: getUpdates = {};
    private _run_polling: boolean = false;
    private _method: Methods = new Methods();
    private _offset: number = 0;

    async loopNow(
        _callback: UpdatesCallback
    ): Promise<void> {
        let botInfo = await this._method.getMe();
        if(botInfo == undefined) return;
        Logger.debug(`🐭 ( Polling ) ${botInfo.result.first_name} Executed`)

        await this.stopNow();
        this._run_polling = true;
        this._callback = _callback;
        return this._pool();
    }

    async stopNow(): Promise<void> {
        this._run_polling = false;
    }

    private async _pool() {
        while(this._run_polling) {
            try {
                const response = await _Request('getUpdates', {
                    ...this._params
                });
                const res = await response.result;

                if (Array.isArray(res) && this._callback) {
                    if(res[res.length - 1] !== undefined) {
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
            } catch(err) {
                Logger.debug('🐁 ( Polling ) Error 500: Internal Server Error');
                this._callback && this._callback(undefined, err);
            }
        }
    }
}