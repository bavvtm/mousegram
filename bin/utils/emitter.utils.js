"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Emitter = exports.EmitterHandler = void 0;
const logger_utils_1 = __importDefault(require("./logger.utils"));
/** Emitter Handler For 'on' Methods */
function EmitterHandler() {
    const listeners = {};
    return {
        on(key, fn) {
            try {
                listeners[key] = (listeners[key] || []).concat(fn);
            }
            catch (err) {
                logger_utils_1.default.debug(err.message);
            }
        },
        off(key, fn) {
            try {
                listeners[key] = (listeners[key] || []).filter(f => f !== fn);
            }
            catch (err) {
                logger_utils_1.default.debug(err.message);
            }
        },
        emit(key, data) {
            try {
                (listeners[key] || []).forEach(function (fn) {
                    fn(data);
                });
            }
            catch (err) {
                logger_utils_1.default.debug(err.message);
            }
        },
    };
}
exports.EmitterHandler = EmitterHandler;
exports.Emitter = EmitterHandler();
