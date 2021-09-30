const MongoClient = require('mongodb').MongoClient;
const env = require('dotenv');

const client = new MongoClient('mongodb://social-project-db:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = client;
