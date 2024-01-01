const service = require('../../services/transactions/updateTransactionService');

const updatedTransactionController = {
  async handle(req, res) {
    try {
        const { tipo, descricao, valor, data, categoria_id } = req.body;

        const updatedTransaction = await service.execute({ tipo, descricao, valor, data, categoria_id })

      return res.json(updatedTransaction);

    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

module.exports =  updatedTransactionController;
