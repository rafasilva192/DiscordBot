const mongoose = require('mongoose')
const systConsts = require('../constants/systemConstants')
const uri = `mongodb://botadmin:AbUkasP8AS12@ds123331.mlab.com:23331/discordbot`

mongoose.Promise = global.Promise
//mongoose.connect(uri);
//var db = mongoose.connection;

console.log(uri)

module.exports = {
	save: (object, collection) => {
		/*console.log('repository', object, collection)
		db.on('error', console.error.bind(console, 'connection error:'));
		db.once('open', function callback() {

			console.log('repository', object, collection)
			collection = db.collection(collection)

			collection.insert(object, (err, result) => {

				console.log(result)

				if (err) throw err
			})

			db.close()
		})*/
	},
}
