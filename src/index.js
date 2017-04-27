// import the discord.js module
const Discord = require('discord.js')
const messageService = require('./services/messageService')
const config = require('./config/config.json')
// create an instance of a Discord Client, and call it bot
const client = new Discord.Client()

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
client.on('ready', () => {
	console.log('Up and Running')
})

// create an event listener for messages
client.on('message', message => {
	if (message.content.substring(0,1) === config.prefix) {
		const response = messageService.handleMessages(message, client)
		if (response) {
			message.channel.sendMessage(response)
		}
	}
})

// log our bot in
client.login(config.token)
