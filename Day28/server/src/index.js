const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

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

app.use((req, res, next) => {
    res.status(404);

    const error = Error(`Not Found - ${req.originalUrl}`);
    next(error);
});

app.use((error, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500: res.statusCode;
    res.status(statusCode);
    res.json({
        message: error.message,
        stack: process.env.NODE_ENV === 'production' ? '[redacted]' : error.stack
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});