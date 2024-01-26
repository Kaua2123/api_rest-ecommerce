import jwt from 'jsonwebtoken';

require('dotenv').config();

export default function loginRequired(req, res, next) {
  const { authorization } = req.headers; // obtendo o Bearer e o token do cabeçalho
  if (!authorization) {
    return res.status(401).json('Unauthorized. You must be logged in');
  }

  const separatedString = authorization.split(' ');
  const token = separatedString[1];

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).json({ auth: false, message: 'Invalid token.' });
    }
    const { id } = decoded;
    req.userId = id;
    return next();
  });
}
