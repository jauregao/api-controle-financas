const repository = require('../../repositories/transactionsRepository');

const getAllTransactionsService = {
  async execute(userID) {

    const transactions = await repository.readAll(userID);

    return transactions;

  }
}

module.exports = getAllTransactionsService;
