const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');

const app = express();
app.use(morgan("common"));
app.use(helmet());
app.use(cors({
    origin: 'http://localhost:5000'
}));

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello, world!'
    })
});

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});