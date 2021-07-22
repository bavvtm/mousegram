import { Mouse } from "../mouse";

const bot = new Mouse('token', { polling: true });

bot.router([
    {
        path: '/test',
        event: 'message',
        action: (ctx) => {
            ctx.reply('halo')
        }
    },
    {
        path: '/start',
        event: 'message',
        action: (ctx) => {
            ctx.reply('Halooo')
        }
    }
]);