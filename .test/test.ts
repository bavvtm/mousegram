import { Mouse, Keyboard, InlineKeyboard } from "../mouse";

const bot = new Mouse('token', { polling: true });

const keyboard = new Keyboard()
    .text({ text: 'halo' })
    .text({ text: 'halo' })
    .row()
    .text({ text: 'halo' })

const button = new InlineKeyboard()
    .callback({ text: 'iya', callback_data: 'iyacallback' })
    .row()
    .callback({ text: 'tidak', callback_data: 'tidakcallback' })

bot.on('message', (ctx) => {
    if(ctx.text == '/start') {
        bot.method.sendMessage({
            chat_id: ctx.chat.id,
            text: 'Halo',
            reply_markup: keyboard
        })
    } else if(ctx.text == '/keluar') {
        bot.method.sendMessage({
            chat_id: ctx.chat.id,
            text: 'Yakin ingin keluar?',
            reply_markup: button
        })
    }
});

bot.on('callback_query', (ctx) => {
    console.log(ctx);
});