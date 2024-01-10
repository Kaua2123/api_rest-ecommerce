import jwt from 'jsonwebtoken';

require('dotenv').config();

export default function loginRequired(req, res, next) {
  const { authorization } = req.headers; // obtendo o Bearer e o token do cabeçalho

  const separatedString = authorization.split(' ');
  const token = separatedString[1];

  if (!authorization || !token) {
    return res.status(401).json('Unauthorized. You must be logged in');
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, decoded) => {
    if (err) {
      return res.status(500).json({ auth: false, message: 'Invalid token.' });
    }
    const { id } = decoded.id;
    return console.log('id: ', id);
  });

  return next();
}
