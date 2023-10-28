const {Router} = require('express');

const categoriesRoutes = Router();

categoriesRoutes.get(
    '/categorias');


module.exports = categoriesRoutes; 