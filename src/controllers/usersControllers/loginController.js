const { loginService } = require('../../services/usersServices');

const loginController = {
  async handle(req, res) {
    try {
      const { usuario, senha } = req.body;

      const userIsLogged = await loginService.execute({ usuario, senha });

      return res.status(200).json(userIsLogged);

    } catch (error) {
      return res.status(500).json({ mensagem: 'Erro interno do servidor' })
    }
  }
}

module.exports = loginController;
