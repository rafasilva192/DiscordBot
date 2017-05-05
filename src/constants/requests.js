const prefix = require('../config/config.json').prefix
const sysConst = require('./systemConstants.js')
const repositoryService = require('../services/repositoryService')

const eventResponse = (object, collection) => {
	repositoryService.save(object, collection)
}

module.exports = {
	REQUESTS: [
		PING = { request: `${prefix}ping`, response: 'pong!' } ,
		EVENT = { request: `${prefix}event`, response: '> Function under development!' },
		REPME = { request: `${prefix}repme`, response: `t!rep <@${sysConst.OWNER.id}> <:FeelsBlobMan:303966294720643072>` }
	]
}
