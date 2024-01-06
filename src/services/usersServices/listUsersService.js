const repository = require('../../repositories/usersRepository');

const listUsersService = {
  async execute() {

    const usersList = await repository.list();

    return usersList;

  }
}

module.exports = listUsersService;
