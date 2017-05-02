const Discord = require('discord.js')
const chai = require('chai')
const prefix = require('./../../src/config/config').prefix
const expect = chai.expect
const messageService = require('./../../src/services/messageService')

var message = { author: { bot: false }}
const client = new Discord.Client()

describe('MessageService', () => {
  it('handleMessages should return null if the message is not a valid function', () => {
		message.content = 'test'
    expect(messageService.handleMessages(message, client)).to.equal(null);
  })

  it('handleMessages should return pong! if the message is a valid function', () => {
		message.content = `${prefix}ping`
    expect(messageService.handleMessages(message, client)).to.equal('pong!');
  })
})
