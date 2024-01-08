import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      const user = await User.findAll({
        attributes: ['id', 'username', 'email', ['password_hash', 'password']],
      });

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json('Missing ID');
      }

      const user = await User.findByPk(id);

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
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

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json('Missing ID');
      }

      const user = await User.findByPk(id);
      await user.update(req.body);

      return res.status(200).json(user);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json('Missing ID');
      }

      const user = await User.findByPk(id);
      await user.destroy();

      return res.status(200).json(null);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserController();
