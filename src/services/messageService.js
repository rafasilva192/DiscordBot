const request = require('../constants/requests')
const repositoryService = require('./repositoryService')
const sysConst = require('../constants/systemConstants')
const prefix = require('../config/config.json').prefix
const _ = require('lodash')

module.exports = {
	handleMessages: (message, client) => {
		switch (message.content.toLowerCase()) {
			case request.PING.request:
				return request.PING.response
			case request.EVENT.request:
				return request.EVENT.response
			default:
				return null
		}
		return null
	}
}

const compare = (a, b) => {
	return _.isEqual(a, b)
}
