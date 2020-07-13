const express = require('express');
const cors = require('cors');
const monk = require('monk');

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
    });
});

app.post('/meows', (req, res) => {
    if (isValidMeow(req.body)) {
        const meow = {
            name: req.body.name.toString(),
            content: req.body.content.toString(),
            created: new Date()
        };

        meows
            .insert(meow)
            .then(createdMeow => {
                console.log(createdMeow);
                res.json(createdMeow);
            })
            .catch(err => {console.log(err);});
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