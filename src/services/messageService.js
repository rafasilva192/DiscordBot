const request = require('../constants/requests')
const repositoryService = require('./repositoryService')
const sysConst = require('../constants/systemConstants')
const config = require('../config/config.json')
const _ = require('lodash')

module.exports = {
	handleMessages: (message, bot) => {
		const notABotUser = !message.author.bot
		//if (compare(message.author.id, sysConst.OWNER.id)) console.log(message.channel)
		//console.log(sysConst.PREFIX, message.author.username, message.content)
		if (notABotUser) {
			if (compare(message.content.toLowerCase(), request.PING)) {
				return 'ping?'
			} else if (compare(message.content.toLowerCase(), 'who am i?') && compare(message.author.id, sysConst.OWNER.id)) {
				repositoryService.save(message.author)
				return 'hello, you are <@!' + message.author.id + '>'
			}
		}
		return null
	}
}

const compare = (a, b) => {
	return _.isEqual(a, b)
}
