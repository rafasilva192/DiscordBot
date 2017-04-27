// import the discord.js module
const Discord = require('discord.js')
const messageService = require('./services/messageService');
const sysConst = require('./constants/systemConstants')

// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client()

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('Up and Running')
})

// create an event listener for messages
bot.on('message', message => {
  const response = messageService.handleMessages(message, bot)
  if (response) {
    message.channel.sendMessage(response);
  }
})

// log our bot in
bot.login(sysConst.TOKEN)