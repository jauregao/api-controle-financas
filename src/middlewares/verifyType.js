const verifyType = async function (req, res, next) {

  const { tipo } = req.body;

  if (tipo !== 'saída' && tipo !== 'Saída' && tipo !== 'saida' && tipo !== 'Saida' && tipo !== 'SAIDA' && tipo !== 'SAÍDA' && tipo !== 'Entrada' && tipo !== 'entrada' && tipo !== 'ENTRADA') {
    return res.status(400).json({ error: 'Tipo de transação inválida. Os tipos válidos são: entrada ou saída.' });
  }
  return next();
}

module.exports = verifyType;