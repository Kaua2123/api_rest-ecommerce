import User from '../models/User';

class UserController {
  async index(req, res) {
    res.send('Hello World');
  }

  async store(req, res) {
    try {
      const user = await User.create(req.body);
      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
