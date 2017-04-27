//
const MongoClient = require('mongodb').MongoClient
const systConsts = require('../constants/systemConstants')
const uri = `mongodb://discordbotgords:${systConsts.DISCORDCREDENTIALS.password}@discordrepository-shard-00-00-2qfxt.mongodb.net:27017,discordrepository-shard-00-01-2qfxt.mongodb.net:27017,discordrepository-shard-00-02-2qfxt.mongodb.net:27017/${systConsts.DISCORDCREDENTIALS.database}?ssl=true&replicaSet=DiscordRepository-shard-0&authSource=admin`

module.exports = {
	connect: () => MongoClient.connect(uri, (err, db) => {
		db.close();
	})
}
