import jwt from 'jsonwebtoken';

export default async function admAuth(req, res, next) {
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
    const { id, level } = decoded;
    console.log('aqui está seu lvl', level);
    if (level !== 1) {
      return res.status(401).json('You must be an ADM.');
    }
    return { id, level };
  });

  return next();
}
