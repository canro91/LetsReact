const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

dotenv.config({ path: './config/config.env'});

const transactions = require('./routes/transaction');

const app = express();
app.use('/api/v1/transactions', transactions);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.yellow.bold));