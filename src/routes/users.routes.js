const { Router } = require('express');

const {
    createUserController,
    loginController,
    listUsersController,
    getUserController,
    updatedUserController,
    deleteUserController
} = require('../controllers/usersControllers/index')

const usersRoutes = Router();

// usersRoutes.get(
//     '/login',
//     loginController
// );

usersRoutes.get(
    '/usuario',
    listUsersController.handle
);
usersRoutes.get(
    '/usuario/:id',
    getUserController.handle
);
usersRoutes.post(
    '/usuario',
    createUserController.handle
);
usersRoutes.delete(
    '/usuario',
    deleteUserController.handle
);
usersRoutes.put(
    '/usuario',
    updatedUserController.handle
);

module.exports = usersRoutes;
