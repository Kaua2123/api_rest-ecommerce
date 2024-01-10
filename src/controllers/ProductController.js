import Product from '../models/Product';

class ProductController {
  async index(req, res) {
    try {
      const products = await Product.findAll({
        attributes: ['name', 'description', 'price', 'stock_quantity'],
      });

      return res.status(200).json(products);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async store(req, res) {
    try {
      const product = await Product.create(req.body);
      return res.status(200).json(product);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json('Missing ID');

      const product = await Product.findByPk(id);
      await product.update(req.body);
      const {
        name, description, price, stock_quantity,
      } = product;

      return res.status(200).json({
        name, description, price, stock_quantity,
      });
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new ProductController();
