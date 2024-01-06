const service = require('../../services/usersServices//listUsersService');

const listUsersController = {
  async handle(req, res) {
    try {

      const users = await service.execute();

      return res.json(users);

    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

module.exports = listUsersController;
