const { Router } = require('express');

const {
    createUserController,
    loginUserController,
    getUsersController,
    updateUserController,
    deleteUserController
} = require('../controllers/usersControllers/index')

const usersRoutes = Router();

usersRoutes.get(
    '/login',
    loginUserController
);
usersRoutes.get(
    '/usuario',
    getUsersController
);
usersRoutes.post(
    '/usuario',
    createUserController
);
usersRoutes.delete(
    '/usuario',
    deleteUserController
);
usersRoutes.put(
    '/usuario',
    updateUserController
);

module.exports = usersRoutes;
