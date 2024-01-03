const repository = require('../../repositories/transactionsRepository');

const deleteTransactionService = {
  async execute(TransactionID) {

    const deletedTransaction = await repository.delete(TransactionID);

    return deletedTransaction;

  }
}

module.exports = deleteTransactionService;
