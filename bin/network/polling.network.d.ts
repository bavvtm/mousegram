import { UpdatesCallback, UpdatesHelper } from '../handler/updates.handler';
export declare class Polling implements UpdatesHelper {
    private _callback?;
    private _params;
    private _run_polling;
    private _method;
    private _offset;
    loopNow(_callback: UpdatesCallback): Promise<void>;
    stopNow(): Promise<void>;
    private _pool;
}
