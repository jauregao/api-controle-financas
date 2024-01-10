const knex = require('../configs/connection/index');
const bcrypt = require('bcrypt');


const verifyPass = async (req, res) => {
  const { usuario, senha } = req.body;

  try {
    const user = await knex('usuarios')
      .where({ usuario })
      .first();

    if (user.rowCount < 1) {
      return res.status(404).send("Usuário e/ou senha inválido(s).")
    }

    const senhaValida = await bcrypt.compare(senha, user.senha);

    if (!senhaValida) {
      return res.status(400).send("Usuário e/ou senha inválido(s).");
    }

  }
  catch (error) {
    return res.status(500).json({ mensagem: "Erro interno do servidor" })
  }
}

module.exports = verifyPass;
