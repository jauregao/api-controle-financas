const repository = require('../../repositories/transactionsRepository');

const updateTransactionsService = {
  async execute(transactionData, id, userID) {

    const updatedTransaction = await repository.update(transactionData, id, userID);

    return updatedTransaction;

  }
}

module.exports = updateTransactionsService;