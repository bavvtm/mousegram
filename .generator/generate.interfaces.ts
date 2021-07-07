import fetch, { Response } from "node-fetch";
import path from "path";
import fs from 'node:fs';
import * as Types from './index.types';
import Logger from "./../mouse/utils/logger.utils";

/**
 * Documentation
 * @see https://ark0f.github.io/tg-bot-api
 */
const API_URL: string = 'https://ark0f.github.io/tg-bot-api/custom.min.json';

/**
 * Components
 */
const pad = (number: number): string => String(number).padStart(2, '0');
const tab = (source: string): string => `  ${source}`;

export class TypeResolver {
    public static resolve(
        object: any,
        additionToReference?: string | number // allowing to do [].map(TypeResolver.resolve)
    ): string {
        /***/if(object.type == 'string') {
            if(object.enumeration) {
                return object.enumeration.map((value: any) => `'${value}'`).join(' | ');
            }
            if(object.default) {
                return `'${object.default}'`;
            }
            return 'string';
        }
        else if(object.type == 'integer' || object.type == 'float') {
            return 'number';
        }
        else if(object.type == 'bool') {
            if(object.default) {
                return String(object.default);
            }
            return 'boolean';
        }
        else if(object.type == 'reference') {
            const addition: string = typeof additionToReference == 'string' // allowing to do [].map(TypeResolver.resolve)
            ? `${additionToReference}.`
            : '';
    
            return addition + object.reference;
        }
        else if(object.type === 'any_of') {
            const types: string[] = object.any_of.map(
                (value: any) => TypeResolver.resolve(value, additionToReference)
            );
    
            return types.join(' | ');
        }
        else if (object.type === 'array') {
            return TypeResolver.resolve(object.array, additionToReference) + '[]';
        }
        else {
            throw new Error(`Unresolved type: ${object}`);
        }
    }
}

class ObjectsGenerator {
    private code: string = ``;
    private linedoc: string = ` * ================================================\n`;

    constructor(
        private readonly dirTarget: string,
        private readonly data: Types.ResultFetch
    ) {};

    private async firstJsDoc(): Promise<void> {
        let version = this.data.version;
        let recent_changes = this.data.recent_changes;
        this.code += `/**\n * This File is auto Generated\n${this.linedoc}`
        +` * API Version    : v${version.major+'.'+version.minor+'.'+version.patch}\n`
        +` * Changelog      : ${recent_changes.day+'/'+recent_changes.month+'/'+recent_changes.year}\n`
        + this.linedoc
        +` * @see https://ark0f.github.io/tg-bot-api to access json file\n */\n\n`
    }

    public static helper(objects: Types.AnyOfObjects) {
        const types: string[] = objects.any_of.map(TypeResolver.resolve);
        const description: string = ObjectsGenerator.generateDescription(objects.description);
        let content = `${description}\nexport type ${objects.name} =\n  | ` + types.join('\n  | ') + ';';
        return content;
    }

    public static generate(objects: Types.Objects) {
        if(objects.type == 'any_of') {
            return this.helper(objects);
        }

        let content = `export interface ${objects.name} { }\n\n`;
        if(objects.properties) {
            const params: string[] = ObjectsGenerator.generateParams(objects.properties).map(tab);
            content = `export interface ${objects.name} {\n\n${params.join('\n\n')}\n}\n\n`;
        }

        const description: string = ObjectsGenerator.generateDescription(objects.description);
        content = `${description}\n${content}`;

        return content;
    }

    public static generateDescription(
        description: string,
        padSize: number = 0,
        documentationLink?: string
    ): string {
        const parts = description.split(/\n/);
        const spaces = ' '.repeat(padSize);
        if (documentationLink) {
            parts.push('');
            parts.push('---');
            parts.push('');
            parts.push(`[**Documentation**](${documentationLink})`);
        }
    
        return `/**\n${parts.map(part => `${spaces} * ${part}`).join('\n')}\n${spaces} */`;
    }

    public static generateParams(properties: Types.AllDataMethods[]): string[] {
        const params: string[] = [];
        for(const i in properties) {
            let paramsTarget = properties[i];
            const description: string = ObjectsGenerator.generateDescription(paramsTarget.description, 2);
            const property: string = `${description}\n${tab(paramsTarget.name)}${paramsTarget.required ? '' : '?'}: ${TypeResolver.resolve(paramsTarget)};`;
            params.push(property);
        }
        return params;
    }

    public async buildFile() {
        let dirTarget = this.dirTarget;
        let pathTarget = path.join(__dirname, `../${dirTarget}`);

        this.firstJsDoc();
        for(const i in this.data.objects) {
            let objectTarget = this.data.objects[i];
            this.code += ObjectsGenerator.generate(objectTarget);
        }

        if(!fs.existsSync(pathTarget)) {
            fs.mkdirSync(pathTarget);
        }

        fs.writeFileSync(pathTarget+'/components.interfaces.ts', this.code);
        Logger.info(`( Final ): Generate Object Success`);
    }
}

class MethodsGenerator {
    private code: string = ``;
    private objectArray: any[] = [
        "MessageEntity",
        "ReplyKeyboardMarkup",
        "ReplyKeyboardRemove",
        "InlineKeyboardMarkup",
        "ForceReply",
        "ChatPermissions",
        "BotCommand",
        "BotCommandScope",
        "InputMedia",
        "InputMediaPhoto",
        "InputMediaVideo",
        "InputMediaAudio",
        "InputMediaDocument",
        "InputFile",
        "MaskPosition",
        "InlineQueryResult",
        "LabeledPrice",
        "ShippingOption",
        "PassportElementError"
    ];
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

    public async generateImport() {
        const spaces = '    ';
        let content: string = `import {\n${this.objectArray.map( part => `${spaces+part}`).join(',\n')}\n} from './components.interfaces';\n\n`;
        return content;
    }

    public static generate(methods: Types.Methods) {
        let content: string = `export interface ${methods.name} { };\n\n`;
        if(methods.arguments) {

            if (methods.name === 'sendDocument') {
                methods.arguments.push({
                    type: 'string',
                    name: 'filename',
                    description: 'Name that will be used as a file name in the sent message',
                    required: false
                });
            }

            const params: string[] = ObjectsGenerator.generateParams(methods.arguments).map(tab);
            content = `export interface ${methods.name} {\n\n${params.join('\n\n')}\n}\n\n`;
        }

        const description: string = ObjectsGenerator.generateDescription(methods.description);
        content = `${description}\n${content}`;

        return content;
    }

    public async buildFile() {
        let dirTarget = this.dirTarget;
        let pathTarget = path.join(__dirname, `../${dirTarget}`);

        this.code += await this.firstJsDoc();
        this.code += await this.generateImport();
        for(const i in this.data.methods) {
            let methodsTarget = this.data.methods[i];
            this.code += MethodsGenerator.generate(methodsTarget);
        }

        if(!fs.existsSync(pathTarget)) {
            fs.mkdirSync(pathTarget);
        }

        fs.writeFileSync(pathTarget+'/methods.interfaces.ts', this.code);
        Logger.info(`( Final ): Generate Methods Success`);
    }
}

export async function GenerateInterfaces(dir: string) {
    try {
        const response = await fetch(API_URL);
        const dataTarget = await response.json();
        await new ObjectsGenerator(dir, dataTarget).buildFile();
        await new MethodsGenerator(dir, dataTarget).buildFile();
        return { status: 'success' };
    } catch(err) {
        return { status: 'error' };
    }
}