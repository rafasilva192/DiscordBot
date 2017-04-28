// import the discord.js module
const Discord = require('discord.js')
const messageService = require('./services/messageService')
const config = require('./config/config.json')
// create an instance of a Discord Client, and call it bot
const client = new Discord.Client()

client.login(config.token).then(console.log('Logged in!'))

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
client.on('ready', () => {
	console.log('Ready')
})

// create an event listener for messages
client.on('message', message => {
	console.log(message)
	const notABotUser = !message.author.bot
	if (notABotUser && message.content.substring(0,1) === config.prefix) {
		const response = messageService.handleMessages(message, client)
		if (!!response) {
			message.channel.sendMessage(response)
		}
	}
})
