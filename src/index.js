// import the discord.js module
const Discord = require('discord.js')
const messageService = require('./services/messageService')
const config = require('./config/config.json')
// create an instance of a Discord Client, and call it bot
const client = new Discord.Client({ autoReconnect: true })

// client.login(config.token).then( token => {
// 	console.log('Logged in! your token is ' + token)
// })

// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
client.on('ready', () => {
	console.log('Ready and serving in ' + client.channels.length + ' channels!')
})

// create an event listener for messages
client.on('message', message => {
	const notABotUser = !message.author.bot
	console.log(config.prefix, message.author.username, message.content, 'channel:', message.channel.name)
	if (notABotUser && message.content.substring(0,1) === config.prefix) {
		const response = messageService.handleMessages(message, client)
		if (!!response) {
			message.channel.sendMessage(response)
		}
	}
})

client.loginWithToken(config.token)
