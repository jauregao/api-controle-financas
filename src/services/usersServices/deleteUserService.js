const repository = require('../../repositories/usersRepository');

const deleteUserService = {
  async execute(userID) {

    const deletedUser = await repository.delete(userID);

    return deletedUser;

  }
}

module.exports = deleteUserService;
