const service = require('../../services/usersServices/deleteUserService');

const deleteUserController = {
  async handle(req, res) {
    try {
      const userID = req.usuario.id;

      await service.execute({ userID });

      return res.status(204).json({ message: 'Usuario excluído com sucesso.' });

    } catch (error) {
      return res.status(500).json({ message: 'Erro interno do servidor' })
    }
  }
}

module.exports = deleteUserController;
