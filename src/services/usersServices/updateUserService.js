const repository = require('../../repositories/usersRepository');

const updateUserService = {
  async execute(userID, userData) {

    const updatedUser = await repository.update(userData, userID);

    return updatedUser;

  }
}

module.exports = updateUserService;