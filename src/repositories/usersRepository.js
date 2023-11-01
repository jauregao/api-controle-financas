const usersRepository = {

  create: async function (userData) {
    const { nome, email, senha } = userData;

    const sql = `
      INSERT INTO usuarios
      (nome, email, senha)
      VALUES
      ($1, $2, $3) RETURNING *`;

    const user = await pool.query(sql, [nome, email, senha]);

    return user.rows[0];
  },
  readThis: async function (id) {

    const sql = 'SELECT * FROM usuarios WHERE usuario_id = $1';

    const user = await pool.query(sql, [id]);

    return user.rows[0];
  },
  update: async function (userData, id) {

    const { nome, email, senha } = userData;

    const sql = `UPDATE usuarios SET
      nome = $1, email = $2, senha= $3
      WHERE usuario_id = $4 RETURNING *`

    const updatedUser = await pool.query(sql, [nome, email, senha, id]);

    return updatedUser.rows[0];
  },
  delete: async function (id) {

    const sql = `DELETE FROM usuarios WHERE id = $1`;

    const deletedUser = await pool.query(sql, [id]);

    return deletedUser.rows[0];
  }
};

module.exports = usersRepository;