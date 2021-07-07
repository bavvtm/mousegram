import fetch from "node-fetch";
import { DefaultOptionsSchema } from './default.utils';

export const API_URL: string = 'https://api.telegram.org/bot';
export const DEFAULT_OPTIONS: DefaultOptionsSchema = {
    token: undefined
};

export async function _Request(
    action: string,
    params?: any
): Promise<any> {
    const POST_URL: string = `${API_URL+DEFAULT_OPTIONS.token}/${action}`;
    const response = await fetch(POST_URL, {
        method: 'post',
        body: JSON.stringify(params),
        headers: {'Content-Type': 'application/json'}
    });
    const result = await response.json();
    return result;   
}