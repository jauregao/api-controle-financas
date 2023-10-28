const {Router} = require('express');
const createTransactionController = require('../controllers/createTransactionController');

const {
  verifyCategoryExists,
  verifyTransactionFields,
  verifyType
} = require('../middlewares/index')

const transactionRoutes = Router();

transactionRoutes.get(
    '/transacao');

transactionRoutes.get(
    '/transacao/:id');

transactionRoutes.post(
    '/transacao',
    verifyTransactionFields,
    verifyType,
    verifyCategoryExists,
    createTransactionController.handle);

transactionRoutes.put(
    '/transacao/:id');

transactionRoutes.delete(
    '/transacao/:id');

transactionRoutes.get(
    '/transacao/extrato');

module.exports = transactionRoutes; 