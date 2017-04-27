const request = require('../constants/requests')
const repositoryService = require('./repositoryService')
const sysConst = require('../constants/systemConstants')
const config = require('../config/config.json')
const _ = require('lodash')

module.exports = {
	handleMessages: (message, bot) => {
		const notABotUser = !message.author.bot
		if (message.author.id === sysConst.OWNER.id) console.log(message.channel)
		console.log(sysConst.PREFIX, message.author.username, message.content)
		if (notABotUser) {
			if (message.content.toLowerCase() === config.prefix + request.PING) {
				return 'ping?'
			} else if (message.content.toLowerCase() === config.prefix + 'who am i?' && message.author.id === sysConst.OWNER.id) {
				repositoryService.save(message.author)
				return 'hello, you are <@!' + message.author.id + '>'
			}
		}
	}
}
