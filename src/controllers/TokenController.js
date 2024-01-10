import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User';

require('dotenv').config();

class TokenController {
  async store(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json('Invalid email or password.');
      }
      const user = await User.findOne({ where: { email } }); // encontrando pelo email no banco
      if (!user) {
        return res.status(400).json('User not found.');
      }
      const { id, emailUser, level } = user; // para o payload
      const pass = await bcrypt.compare(password, user.password_hash);
      // comparando senha fornecida com a senha hash

      if (pass) { // caso as senhas batam, o valor true é retornado, e entra na condicional
        const token = jwt.sign({ id, emailUser, level }, process.env.TOKEN_KEY, { expiresIn: process.env.TOKEN_EXPIRATION });
        return res.status(200).json({ token });
      }
      return res.status(200).json('Logged in.');
    } catch (err) {
      console.log(err);
      return res.status(400).json({
        error: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new TokenController();
