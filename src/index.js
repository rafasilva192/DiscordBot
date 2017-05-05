// import the discord.js module
const Discord = require('discord.js')
const messageService = require('./services/messageService')
const msgService = new messageService()
const cleverBotService = require('./services/cleverBotService')
const config = require('./config/config.json')
// create an instance of a Discord Client, and call it bot
const client = new Discord.Client({ autoReconnect: true })

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
client.on('ready', () => {
	console.log('Ready and serving in ' + client.channels.length + ' channels!')
})

// create an event listener for messages
client.on('message', message => {
	msgService.handleMessage(message, client)
})

client.loginWithToken(config.token)
