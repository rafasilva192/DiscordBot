/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/

// import the discord.js module
const Discord = require('discord.js')
const _ = require('lodash')
var messageService = require('./services/messageService');

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client()

// the token of your bot - https://discordapp.com/developers/applications/me
const token = 'MzA2NTQxODA2MTc3MzUzNzI5.C-FVeA.ZOYSDyqnsQd3CZjjZnpn47-I7Fc'

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('Up and Running')
});

// create an event listener for messages
bot.on('message', message => {
  const response = messageService.handleMessages(message, bot)
  if (response) {
    message.channel.sendMessage(response);
  }
});

// log our bot in
bot.login(token);