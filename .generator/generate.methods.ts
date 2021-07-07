import fetch, { Response } from "node-fetch";
import path from "path";
import fs from 'node:fs';
import * as Types from './index.types';
import Logger from "./../mouse/utils/logger.utils";
import { TypeResolver } from "./generate.interfaces";

/**
 * Documentation
 * @see https://ark0f.github.io/tg-bot-api
 */
const API_URL: string = 'https://ark0f.github.io/tg-bot-api/custom.min.json';

/**
 * Components
 */
const tab = (source: string): string => `   ${source}`;
const tab2 = (source: string): string => `      ${source}`;

export class GenerateMethodsClass {
    private code: string = ``;
    private linedoc: string = ` * ================================================\n`;

    constructor(
        private readonly dirTarget: string,
        private readonly data: Types.ResultFetch
    ) {};

    private async firstJsDoc(): Promise<string> {
        let version = this.data.version;
        let recent_changes = this.data.recent_changes;
        return `/**\n * This File is auto Generated\n${this.linedoc}`
        +` * API Version    : v${version.major+'.'+version.minor+'.'+version.patch}\n`
        +` * Changelog      : ${recent_changes.day+'/'+recent_changes.month+'/'+recent_changes.year}\n`
        + this.linedoc
        +` * @see https://ark0f.github.io/tg-bot-api to access json file\n */\n\n`
    }

    public static generateDescription(
        description: string,
        padSize: number = 0,
        documentationLink?: string
    ) {
        const parts = description.split(/\n/);
        const spaces = '   '.repeat(padSize);
        if (documentationLink) {
            parts.push('');
            parts.push('---');
            parts.push('');
            parts.push(`[**Documentation**](${documentationLink})`);
        }
    
        return `/**\n${parts.map(part => `${spaces} * ${part}`).join('\n')}\n${spaces} */`;
    }

    public static generate(methods: Types.Methods) {
        let content: string =
        tab(`public async ${methods.name}(params?: Types.${methods.name}) {\n`)
        +tab2(`const response = await _Request('${methods.name}', { ...params });\n`)
        +tab2(`return response;\n${tab(`}`)}\n\n`)
        return content;
    }

    public async buildFile() {
        let dirTarget = this.dirTarget;
        let pathTarget = path.join(__dirname, `../${dirTarget}`);
        this.code += await this.firstJsDoc();
        this.code += `import { _Request } from '../utils/request.utils';\nimport * as Types from '../types';\n\n`;
        this.code += `export class Methods {\n\n`
        for(const i in this.data.methods) {
            let methodsTarget = this.data.methods[i];
            this.code += GenerateMethodsClass.generate(methodsTarget);
        }
        this.code += `}`;

        if(!fs.existsSync(pathTarget)) {
            fs.mkdirSync(pathTarget);
        }

        fs.writeFileSync(pathTarget+'/methods.telegram.ts', this.code);
        Logger.info(`( Final ): Generate Methods Success`);
    }
}

export async function GenerateClass(dir: string) {
    try {
        const response = await fetch(API_URL);
        const dataTarget = await response.json();
        await new GenerateMethodsClass(dir, dataTarget).buildFile();
        return { status: 'success' };
    } catch(err) {
        return { status: 'error' };
    }
}