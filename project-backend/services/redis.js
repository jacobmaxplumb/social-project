const redis = require("redis");
const redisPort = 6379
const client = redis.createClient({host: 'social-project-redis',
port: '6379'});

module.exports = client;