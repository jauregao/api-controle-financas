const service = require('../../services/transactions/createTransactionService');

const createTransactionController = {

  async handle(req, res) {

    try {
      const { tipo, descricao, valor, data, categoria_id } = req.body;
      const userID = req.usuario.id;

      const transactionCreated = await service.execute({ tipo, descricao, valor, data, categoria_id, userID });

      return res.status(201).json(transactionCreated);

    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

module.exports = createTransactionController;