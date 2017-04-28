const MongoClient = require('mongodb').MongoClient
const systConsts = require('../constants/systemConstants')
const uri = `mongodb://${systConsts.DISCORDCREDENTIALS.user}:${systConsts.DISCORDCREDENTIALS.password}@ds123331.mlab.com:23331/discordbot`

module.exports = {
	connect: () => MongoClient.connect(uri, (err, db) => {
		db.close()
	})
}
