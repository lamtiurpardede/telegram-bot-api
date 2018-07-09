/*
* @file
* index.js
*/
const telegramBot = require('node-telegram-bot-api');

const telegramToken = '619708627:AAGZqtUhWZaxDRM4b7exmiMC1pXmAtv1wQs';

const bot = new telegramBot(telegramToken, {polling: true});
// bot.on('message', (msg) => {
//     const chatId = msg.chat.id;
//     bot.sendMessage(619708627, 'Hei there');
// })
bot.sendMessage(-278394249, 'Horas boo.. marhua hamu saonnari?');
//add some line 
