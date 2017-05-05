'use strict'

const possibleRequests = require('../constants/requests')
const service = require('./simpleService')
const repositoryService = require('./repositoryService')
const sysConst = require('../constants/systemConstants')
const prefix = require('../config/config.json').prefix
const cleverBotService = require('./cleverBotService')
const _ = require('lodash')

class MessageService {

	handleMessage(message, client) {
		console.log(prefix, message.author.username, message.content, 'channel:', message.channel.name)

		if (this.isPersonalMessage(message)) {
			cleverBotService.cleverBotResponse(message)
		}
		else {
			if (this.isRequest(message)) {
				const response = this.handleRequest(message, client)
				if (!!response) {
					message.channel.sendMessage(response)
				}
			}
		}
	}

	handleRequest(message, client) {
		const responseArray = _.filter(possibleRequests.REQUESTS, (requestDto) => {
			return service.compare(requestDto.request, message.content.toLowerCase())
		})
		if (service.verifyArray(responseArray)) {
			return responseArray[0].response
		}
		return null
	}

	isRequest(message) {
		return message.content.substring(0, 1) === prefix && !message.author.bot
	}

	isPersonalMessage(message) {
		return message.channel.isPrivate && !message.author.bot
	}
}

module.exports = MessageService
