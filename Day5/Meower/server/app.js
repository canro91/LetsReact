const express = require('express');
const cors = require('cors');
const monk = require('monk');

const db = monk('mongo:21017/meows')

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (request, response) => {
    response.json({
        message: 'Meower'
    });
});

app.post('/meows', (req, res) => {
    if (isValidMeow(req.body)) {
        const meow = {
            name: req.body.name.toString(),
            content: req.body.content.toString()
        }

        console.log(meow);
    } else {
        res.status(422);
        res.json({
            message: 'Name and Content are required!'
        });
    }
});

function isValidMeow(meow){
    return meow.name && meow.name.toString().trim() !== ''
            && meow.content && meow.content.toString().trim() !== '';
}

app.listen(3000, () => {
    console.log('Listening on http://localhost:3000')
});