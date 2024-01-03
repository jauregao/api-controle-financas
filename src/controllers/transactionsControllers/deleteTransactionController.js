const service = require('../../services/transactions/deleteTransactionService');

const deleteTransactionController = {
  async handle(req, res) {
    try {
      const transactionID = req.params;

      await service.execute({ transactionID });

      return res.status(204).json({ message: 'Transação excluída com sucesso.' });

    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

module.exports = deleteTransactionController;
