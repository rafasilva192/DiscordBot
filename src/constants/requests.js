const config = require('../config/config.json')

module.exports = {
	PING: { request: `${config.prefix}ping`, response: 'pong!' } ,
	EVENT: { request: `${config.prefix}event`, response: undefined },
}
