const Discord = require('discord.js')
const chai = require('chai')
const sysCons = require('./../../src/constants/systemConstants')
const expect = chai.expect
const repository = require('./../../src/repository/repository')

describe('RepositoryService', () => {

  it('must connect to mongodb', () => {
		repository.save('event', 'event')
  })
})
