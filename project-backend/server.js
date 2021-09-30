// require('dotenv').config();
const express = require('express');
const port = 8080;
const cors = require('cors');
const app = express();
const mongo = require('./services/mongo');
const redis = require('./services/redis');
const { checkIfAuthenticated } = require('./services/token');

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
    res.send({data: 'new'});
});

app.post('/api/seed', (req, res) => {
    mongo.connect((err, result) => {
        result.db('social').collection('posts').insertOne({ content: 'Hello World' }).then(r => {
            res.sendStatus(201);
        }).finally(() => mongo.close())
    })
});

app.get('/api/posts', (req, res) => {
    redis.get('posts', (err, reply) => {
        if (reply) {
            res.send({data: JSON.parse(reply), from: 'redis'});
        } else {
            mongo.connect((err, result) => {
                result.db('social').collection('posts').find({}).toArray().then(posts => {
                    redis.setex('posts', 600, JSON.stringify(posts));
                    res.send({data: posts, from: 'mongo'});
                }).finally(() => mongo.close());
            })
        }
    })
})

// app.get('/api/posts/protect', checkIfAuthenticated, (req, res) => {
//     mongo.connect((err, result) => {
//         result.db('social').collection('posts').find({}).toArray().then(posts => {
//             res.send(posts);
//         }).finally(() => mongo.close());
//     })
// })

app.listen(port, () => console.log(`listening on port ${port}`));