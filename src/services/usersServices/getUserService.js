const repository = require('../../repositories/usersRepository');

const getUserService = {
  async execute(userID) {

    const user = await repository.readThis(userID);

    return user;

  }
}

module.exports = getUserService;
