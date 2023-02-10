const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const dbName = `b40wde`;
const dbUrl = `mongodb+srv://buvaneshtmb:Tmb121298@cluster0.jd6iuox.mongodb.net/${dbName}`;

module.exports = { mongodb, MongoClient, dbName, dbUrl };
