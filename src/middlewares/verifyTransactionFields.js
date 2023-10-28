const verifyTransactionFields = function (req, res, next) {
  
  const { tipo, descricao, valor, data, categoria_id } = req.body;

  if(!tipo || !descricao || !valor || !data || !categoria_id){
    return res.status(400).json({ error: 'Preencha todos os campos' });
  }

  return next();

}

module.exports = verifyTransactionFields;