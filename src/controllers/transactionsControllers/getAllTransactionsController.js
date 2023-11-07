const service = require('../../services/transactions/getAllTransactionsService');

const getAllTransactionsController = {

  async handle(req, res) {

    try {
      const userID = req.usuario.id;

      const transactions = await service.execute({ userID });

      return res.status(201).json(transactions);

    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

module.exports = getAllTransactionsController;