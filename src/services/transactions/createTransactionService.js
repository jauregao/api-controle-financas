const repository = require('../../repositories/transactionsRepository');

const createTransactionService = {
  async execute(transactionData) {

      const transactionCreated = await repository.create(transactionData);

      return transactionCreated;

  }
}

module.exports = createTransactionService;