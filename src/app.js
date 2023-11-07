const express = require('express');
const cors = require('cors');

const port = 3000;

const app = express();

app.use(cors())

require('dotenv').config();

const transactionRoutes = require('./routes/transaction.routes');
const usersRoutes = require('./routes/users.routes');
const categoriesRoutes = require('./routes/categories.routes');

app.use(express.json());

app.use(transactionRoutes);
app.use(usersRoutes);
app.use(categoriesRoutes);

app.listen(port, () => console.log(`Rodando na porta ${port}`))