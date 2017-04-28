const config = require('../config/config.json')
const repositoryService = require('../services/repositoryService')

const eventResponse = () => {
	repositoryService.save()
	return '> Function under development!'
}

module.exports = {
	PING: { request: `${config.prefix}ping`, response: 'pong!' } ,
	EVENT: { request: `${config.prefix}event`, response: eventResponse },
}
