import Product from '../models/Product';
import Image from '../models/Image';

class ProductController {
  async index(req, res) {
    try {
      const products = await Product.findAll({
        attributes: ['id', 'name', 'description', 'price', 'stock_quantity'],
        order: [['id', 'DESC'], [Image, 'id', 'DESC']],
        include: {
          model: Image,
          attributes: ['filename', 'url'],
        },
      });

      return res.status(200).json(products);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      const product = await Product.findByPk(id, {
        attributes: ['id', 'name', 'description', 'price', 'stock_quantity'],
        order: [['id', 'DESC'], [Image, 'id', 'DESC']],
        include: {
          model: Image,
          attributes: ['filename', 'url'],
        },
      });

      return res.status(200).json(product);
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

  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json('Missing ID');

      const product = await Product.findByPk(id);
      await product.destroy();

      return res.status(200).json(null);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new ProductController();
