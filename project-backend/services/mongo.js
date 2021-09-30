const MongoClient = require('mongodb').MongoClient;
const env = require('dotenv');

const client = new MongoClient('mongodb://host.docker.internal:5454', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = client;
