const repository = require('../../repositories/usersRepository');
const jwt = require('jsonwebtoken');
const key = process.env.JWT_SECRET_KEY;
const expiresIn = process.env.JWT_EXPIRED;

const loginService = {
  async execute(loginData) {

    const { usuario } = loginData;

    const user = await repository.findOne("usuario", usuario);

    const token = jwt.sign(user, key, expiresIn);

    const { senha, ...userIsLogged } = user;

    return { user: userIsLogged, token };

  }
}

moodule.exports = loginService;
