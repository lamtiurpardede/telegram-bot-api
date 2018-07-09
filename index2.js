/*
* @file
* index2.js
*/
const telegramBot = require('node-telegram-bot-api');

const telegramToken = '619708627:AAGZqtUhWZaxDRM4b7exmiMC1pXmAtv1wQs';

const bot = new telegramBot(telegramToken, {polling: true});
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, 'Hei there');
});
