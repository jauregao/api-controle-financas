const repository = require('../../repositories/usersRepository');

const createUserService = {
  async execute(userData) {

    const newUser = await repository.create(userData);

    return newUser;

  }
}

module.exports = createUserService;
