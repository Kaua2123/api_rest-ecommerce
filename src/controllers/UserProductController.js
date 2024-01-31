import Product from '../models/Product';
import Image from '../models/Image';

class UserProductController {
  async index(req, res) {
    try {
      const id = req.userId; // pegando do token o id do usuário

      const userProducts = await Product.findAll({
        attributes: ['id', 'name', 'description', 'price', 'stock_quantity'],
        order: [['id', 'DESC'], [Image, 'id', 'DESC']],
        include: {
          model: Image,
          attributes: ['filename', 'url'],
        },
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
