const config = require('../config/config.json')
const repositoryService = require('../services/repositoryService')

const eventResponse = (object, collection) => {
	repositoryService.save(object, collection)
}

module.exports = {
	PING: { request: `${config.prefix}ping`, response: 'pong!' } ,
	EVENT: { request: `${config.prefix}event`, response: '> Function under development!' },
}
