const service = require('../../services/usersServices/updateUserService');

const updatedUserController = {
  async handle(req, res) {
    try {
      const { nome, email, senha } = req.body;

      const updatedUser = await service.execute({ nome, email, senha })

      return res.json(updatedUser);

    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

module.exports = updatedUserController;
