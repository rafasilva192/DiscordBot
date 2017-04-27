//
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb://discordbotgords:<PASSWORD>@discordrepository-shard-00-00-2qfxt.mongodb.net:27017,discordrepository-shard-00-01-2qfxt.mongodb.net:27017,discordrepository-shard-00-02-2qfxt.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=DiscordRepository-shard-0&authSource=admin`

module.exports = {
        MongoClient.connect(uri, function(err, db) {
        db.close();
    });
}