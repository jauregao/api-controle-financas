const knex = require('../configs/connection/index')

const verifyCategoryExists = async function (req, res, next) {

  const { categoria_id } = req.body;

  const categoryExists = await knex('categorias').where('id', categoria_id);

  if (!categoryExists) {
    return res.status(400).json({ error: 'Categoria não encontrada' });
  }

  return next();

}

module.exports = verifyCategoryExists;