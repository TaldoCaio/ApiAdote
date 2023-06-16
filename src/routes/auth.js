function authenticateToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1];
  
    if (!token) {
      return res.sendStatus(401); // Token não fornecido
    }
  
    jwt.verify(token, 'MinhaChaveSecreta' , (err, decoded) => {
      if (err) {
        return res.sendStatus(403); // Token inválido ou expirado
      }
  
      req.user = decoded; // Decodifica o token e armazena as informações do usuário em req.user
      next();
    });
  }
  
module.exports = authenticateToken;