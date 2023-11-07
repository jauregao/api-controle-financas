const service = require('../../services/usersServices/createUserService');

const createUserController = {
  async handle(req, res) {

    try {
      const { nome, email, senha } = req.body;

      const newUser = await service.execute({ nome, email, senha });

      return res.status(201).json(newUser);

    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

module.exports = createUserController;
