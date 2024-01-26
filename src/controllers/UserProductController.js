import Product from '../models/Product';

class UserProductController {
  async index(req, res) {
    try {
      const id = req.userId; // pegando do token o id do usuário

      const userProducts = await Product.findAll({
        where: {
          user_id: id,
        },
      });

      return res.status(200).json(userProducts);
    } catch (err) {
      console.error(err);
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new UserProductController();
