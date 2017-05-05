const Cleverbot = require('cleverbot-node')
const clbot = new Cleverbot()
clbot.configure({ botapi: 'CC220Untv7apD9WZ1aAQj_AVUjQ' })

module.exports = {
	cleverBotResponse: (message) => {
		// console.log(message.content, message.channel.name)
		Cleverbot.prepare(() => {
			clbot.write(message.content, (response) => {
		//		console.log(response)
				message.channel.startTyping()
				setTimeout(() => {
					message.channel.sendMessage(response.message).catch(console.error)
					message.channel.stopTyping()
				}, Math.random() * (1 - 3) + 1 * 1000)
			})
		})
	}
}
