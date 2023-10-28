const pool = require('../configs/connection/index')

const transactionsRepository = {

    create: async function(transactionData, userID) {
      const { tipo, descricao, valor, data, categoria_id } = transactionData;

        const sql = `
        INSERT INTO transacoes
        (tipo, descricao, valor, data, categoria_id, usuario_id)
        VALUES
        ($1, $2, $3, $4, $5, $6) RETURNING *`;

        const transaction = await pool.query(sql, [tipo, descricao, valor, data, categoria_id, userID]);

      return transaction.rows[0];
    },
    readAll: async function(userID) {

        const sql = 'SELECT * FROM transacoes WHERE usuario_id = $1';

        const transactions = await pool.query(sql, [userID]);
          
      return transactions.rows;
    },
    findByPk: async function(id, userID) {

        const sql = `SELECT * FROM transacoes WHERE id = $1 AND usuario_id = $2`

        const transaction = await pool.query(sql, [id, userID]);

      return transaction.rows[0];
    },
    findOne: async function(field, value) {

        const sql = `
            SELECT * FROM transacoes
            where ${field} = $1 RETURNING *;
        `;

        const transaction = await pool.query(sql, [value]);

      return transaction.rows;
  },
    update: async function(transactionData, id, userID) {

      const { tipo, descricao, valor, data, categoria_id } = transactionData;

        const sql = `UPDATE transacoes SET
        tipo = $1, descricao = $2, valor = $3, data = $4, categoria_id = $5
        WHERE id = $6 AND usuario_id = $7 RETURNING *` 

        const updatedTransaction = await pool.query(sql, [tipo, descricao, valor, data, categoria_id, id, userID]);

      return updatedTransaction.rows[0];
    },
    delete: async function(id) {

        const sql = `DELETE FROM transacoes WHERE id = $1 AND usuario_id = $2`;
        
        const deletedTransactions = await pool.query(sql, [id, userID]);

      return deletedTransactions.rows[0];
}
};

module.exports = transactionsRepository;