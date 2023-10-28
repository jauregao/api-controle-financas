const express = require('express');
const port = 3000;
const app = express();

require('dotenv').config();
/** se importo as configs do .env no meu entry point, posso chamar em outros arqivos sem precisar importar em todos */

const transactionRoutes = require('./routes/transaction.routes');
const usersRoutes = require('./routes/users.routes');
const categoriesRoutes = require('./routes/categories.routes');

app.use(express.json());

app.use(transactionRoutes);
app.use(usersRoutes);
app.use(categoriesRoutes);

app.listen(port);