const prefix = '~'
const request = require('../constants/requests')
module.exports = {
    handleMessages: (message, bot) => {
        const notABotUser = !message.author.bot
        if (message.author.username === 'Gords') console.log(bot.channels)
       // console.log(prefix, message.author.username, message.content)
        if(notABotUser) {
            if (message.content.toLowerCase() === prefix + request.PING) {
                return 'ping?'
            } else if (message.content.toLowerCase() === prefix + 'who am i?'  && message.author.username === 'Gords') {
                return 'hello, you are ' + message.author.username
            }
        }
    }
}