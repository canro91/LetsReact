const express = require('express');
const cors = require('cors');
const monk = require('monk');
const badWords = require('bad-words');
const rateLimit = require('express-rate-limit');

const app = express();

const db = monk('mongo/meower');
const meows = db.get('meows');

app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.json({
        message: 'Meower'
    });
});

app.get('/meows', (req, res) => {
    meows
    .find({}, { sort: { created: -1 } })
    .then(meows => {
        res.json(meows);
    })
    .catch(err => console.log(err))
    .then(() => db.close());
});

const createMeowLimiter = rateLimit({
    windowMs: 10 * 1000,
    max: 1,
    message: "Too many meows, please try again later...Greow!"
});
app.post('/meows', createMeowLimiter, (req, res) => {
    if (isValidMeow(req.body)) {
        const filter = new badWords();
        const rawContent = req.body.content.toString();

        const meow = {
            name: req.body.name.toString(),
            content: filter.clean(rawContent),
            created: new Date()
        };

        meows
            .insert(meow)
            .then(createdMeow => {
                console.log(createdMeow);
                res.json(createdMeow);
            })
            .catch(err => { console.log(err); })
            .then(() => db.close());
    } else {
        res.status(422);
        res.json({
            message: 'Name and Content are required!'
        });
    }
});

function isValidMeow(meow) {
    return meow.name && meow.name.toString().trim() !== ''
        && meow.content && meow.content.toString().trim() !== '';
}

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
});