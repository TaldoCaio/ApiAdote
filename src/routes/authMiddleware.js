const jwt = require('jsonwebtoken');

function generateToken(user) {
  const payload = {
    id: user._id,
    nome: user.nome,
    email: user.email,
    // Adicione outros campos relevantes aqui, se necessário
  };

  const token = jwt.sign(payload, 'MinhaChaveSecreta', { expiresIn: '1h' });
  return token;
}


module.exports = generateToken;
