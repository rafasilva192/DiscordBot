const Discord = require('discord.js')
const chai = require('chai')
const sysCons = require('./../../src/constants/systemConstants')
const expect = chai.expect
const repositoryService = require('./../../src/services/repositoryService')

const client = new Discord.Client()

describe('RepositoryService', () => {

  it('must connect to mongodb', () => {
		repositoryService.save('event', 'event')
  })
})
