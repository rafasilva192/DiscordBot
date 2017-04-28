const MongoClient = require('mongodb').MongoClient
const systConsts = require('../constants/systemConstants')
const uri = `mongodb://${systConsts.DISCORDCREDENTIALS.user}:${systConsts.DISCORDCREDENTIALS.password}@ds123331.mlab.com:23331/discordbot`
console.log(systConsts)
console.log(uri)

module.exports = {
	save: (object, collection) => {
		MongoClient.connect(uri, (err, db) => {
			console.log('repository', object, collection)
			collection = db.collection(collection)

			collection.insert(object, (err, result) => {

				console.log(result)

				if (err) throw err
			})

			db.close()
		})
	},
}
