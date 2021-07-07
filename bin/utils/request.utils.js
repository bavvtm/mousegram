"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports._Request = exports.DEFAULT_OPTIONS = exports.API_URL = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
exports.API_URL = 'https://api.telegram.org/bot';
exports.DEFAULT_OPTIONS = {
    token: undefined
};
async function _Request(action, params) {
    const POST_URL = `${exports.API_URL + exports.DEFAULT_OPTIONS.token}/${action}`;
    const response = await node_fetch_1.default(POST_URL, {
        method: 'post',
        body: JSON.stringify(params),
        headers: { 'Content-Type': 'application/json' }
    });
    const result = await response.json();
    return result;
}
exports._Request = _Request;
