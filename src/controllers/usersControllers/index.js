const createUserController = require('./createUserController');
const loginController = require('./loginController');
const getUserController = require('./getUserController');
const deleteUserController = require('./deleteUserController');
const updatedUserController = require('./updateUserController');

module.exports = {
  createUserController,
  loginController,
  getUserController,
  deleteUserController,
  updatedUserController
};
