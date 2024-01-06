const { create } = require('../../repositories/usersRepository');

const createUserService = {
  async execute(userData) {

    const newUser = await create(userData);

    return newUser;

  }
}

module.exports = createUserService;
