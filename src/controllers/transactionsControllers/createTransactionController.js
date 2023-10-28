const service = require('../../services/transactions/createTransactionService');

const createTransactionController = {

  async handle(req, res) {

      try {
        const { tipo, descricao, valor, data, categoria_id } = req.body;

        const clientCreated = await service.execute(tipo, descricao, valor, data, categoria_id);

        return res.status(201).json(clientCreated);

      } catch (error) {
        return res.status(500).json({message: 'Erro interno do servidor'})
      }
  }
}

module.exports = createTransactionController;