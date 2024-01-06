const knex = require('../configs/connection/index');

const usersRepository = {

  create: async function (userData) {

    const { nome, sobrenome, email, usuario, senha } = userData;

    await knex('usuarios').insert({ nome, sobrenome, email, usuario, senha });

    const user = await knex('usuarios')
      .select('nome', 'sobrenome', 'email', 'usuario')
      .where({ email })
      .first();

    return user;
  },
  list: async function () {
    const usersList = await knex('usuarios');

    return usersList;
  },
  readThis: async function (userID) {

    const user = await knex('usuarios')
      .where({ userID })
      .returning('*');

    return user;
  },
  update: async function (userData, userID) {

    const { nome, sobrenome, email, usuario, senha } = userData;

    const updatedUser = await knex('usuarios')
      .update({ nome, sobrenome, email, usuario, senha })
      .where({ userID })
      .returning([nome, sobrenome, email, usuario]);

    return updatedUser;
  },
  delete: async function (userID) {

    await knex('usuarios')
      .where({ userID })
      .del();

    return { message: 'Usuário deletado com sucesso' }
  }
};

module.exports = usersRepository;
