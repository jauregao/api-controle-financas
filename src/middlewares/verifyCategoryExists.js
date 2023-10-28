const pool = require('../configs/connection/index')

const verifyCategoryExists = async function (req, res, next) {
  
  const { categoria_id } = req.body;

  const query = `SELECT * FROM categorias WHERE id = $1`;
  const categoryExists = await pool.query(query, [categoria_id]);

  if(!categoryExists){
    return res.status(400).json({ error: 'Categoria não encontrada' });
  }

  return next();

}

module.exports = verifyCategoryExists;