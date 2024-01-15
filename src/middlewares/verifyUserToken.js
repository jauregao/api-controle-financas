const validarUsuario = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(403).json({ mensagem: "Para acessar este recurso um token de autenticação válido deve ser enviado." });
  }
  try {
    const token = authorization.split(' ')[1];
    if (!token) {
      return res.status(403).json({ mensagem: "Para acessar este recurso um token de autenticação válido deve ser enviado." })
    }

    const { id } = jwt.verify(token, crypt);

    const { rows } = await pool.query("select * from usuarios where id = $1", [id]);
    if (rows.length === 0) {
      return res.status(401).json({ message: "Para acessar este recurso um token de autenticação válido deve ser enviado." });
    }
    const { senha, ...usuario } = rows[0];

    req.usuario = usuario;
    next();
  } catch (error) {
    return res.status(401).json({ mensagem: "Para acessar este recurso um token de autenticação válido deve ser enviado." });
  }
};