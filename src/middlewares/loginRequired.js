import jwt from 'jsonwebtoken';

require('dotenv').config();

export default function loginRequired(req, res, next) {
  const { authorization } = req.headers; // obtendo o Bearer e o token do cabeçalho

  const separatedString = authorization.split(' ');
  const token = separatedString[1];

  if (!token) {
    console.error('Token não fornecido');
    return res.status(401).json('Você deve estar logado.');
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).json({ auth: false, message: 'Invalid token.' });
    }
    const { id } = decoded;
    req.userId = id;
    return next();
  });
}
