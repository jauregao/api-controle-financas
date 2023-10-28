const express = require('express');
const port = 3000;
const app = express();

require('dotenv').config();

const transactionRoutes = require('./routes/transaction.routes');

app.use(express.json());

app.use(transactionRoutes);

app.listen(port);