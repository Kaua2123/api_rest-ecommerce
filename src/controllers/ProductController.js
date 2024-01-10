import Product from '../models/Product';

class ProductController {
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
}

export default new ProductController();
