const service = require('../../services/usersServices/getUserService');

const getUserController = {
  async handle(req, res) {
    try {
      const userID = req.params.id;

      const user = await service.execute({ userID });

      return res.json(user);


    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

module.exports = getUserController;
