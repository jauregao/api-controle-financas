const knex = require('knex');

const usersRepository = {

  create: async function (userData) {

    const { nome, email, senha } = userData;

    const user = await knex('usuarios')
      .insert({ nome, email, senha })
      .returning('*')

    return user;
  },
  readThis: async function (id) {

    const user = await knex('usuarios')
      .where({ id })
      .returning('*');

    return user;
  },
  update: async function (userData, id) {

    const { nome, email, senha } = userData;

    const updatedUser = await knex('usuarios')
      .update({ nome, email, senha })
      .where({ id })
      .returning('*');

    return updatedUser;
  },
  delete: async function (id) {

    await knex('usuarios')
      .where({ id })
      .del();

    return { message: 'Usuário deletado com sucesso' }
  }
};

module.exports = usersRepository;
