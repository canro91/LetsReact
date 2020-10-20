const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const middlewares = require('./middlewares');
const mongoose = require('mongoose');

require('dotenv').config();

const logs = require('./api/logs');

const app = express();

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(morgan("common"));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN
}));
app.use(express.json());

app.get('/', (req, res) => {
    return res.json({
        message: 'Hello, world!'
    })
});

app.use('/api/logs', logs);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});