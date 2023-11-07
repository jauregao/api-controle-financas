const knex = require('knex');

const usersRepository = {

  create: async function (userData) {

    const { nome, email, senha } = userData;

    const user = await knex('usuarios')
      .insert({ nome, email, senha })
      .returning('*')

    return user;
  },
  readThis: async function (userID) {

    const user = await knex('usuarios')
      .where({ userID })
      .returning('*');

    return user;
  },
  update: async function (userData, userID) {

    const { nome, email, senha } = userData;

    const updatedUser = await knex('usuarios')
      .update({ nome, email, senha })
      .where({ userID })
      .returning('*');

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
