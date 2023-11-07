const knex = require('../configs/connection/index')

const transactionsRepository = {

  create: async function (transactionData, userID) {
    const { tipo, descricao, valor, data, categoria_id } = transactionData;

    const transaction = await knex('transacoes')
      .insert({ tipo, descricao, valor, data, categoria_id, 'usuario_id': userID })
      .returning('*')

    return transaction;
  },
  readAll: async function (userID) {

    const transactions = await knex('transacoes')
      .where('usuario_id', userID)
      .returning('*');

    return transactions;
  },
  findByPk: async function (id, userID) {

    const transaction = await knex('transacoes')
      .where('id', id)
      .andWhere('usuario_id', userID)
      .returning('*')

    return transaction;
  },
  findOne: async function (field, value) {

    const transaction = await knex('transacoes')
      .where(field, value)
      .returning('*');

    return transaction;
  },
  update: async function (transactionData, id, userID) {

    const { tipo, descricao, valor, data, categoria_id } = transactionData;

    const updatedTransaction = await knex('transacoes')
      .where('usuario_id', userID)
      .andWhere('id', id)
      .update({ tipo, descricao, valor, data, categoria_id })
      .returning('*')

    return updatedTransaction;
  },
  delete: async function (id, userID) {

    await knex('transacoes')
      .where({ id })
      .andWhere('usuario_id', userID)
      .del();

    return { message: 'Transação deletada com sucesso.' };
  }
};

module.exports = transactionsRepository;