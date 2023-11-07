const repository = require('../../repositories/usersRepository');
const jwt = require('jsonwebtoken');

const loginService = {
  async execute(loginData) {
    const { email } = loginData;

    const user = await repository.findOne('email', email);


  }
}