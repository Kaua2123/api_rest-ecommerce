import Request from '../models/Request';

class RequestController {
  async index(req, res) {
    try {
      const requests = await Request.findAll();
      return res.status(200).json(requests);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      if (!id) return res.status(400).json('Missing ID');

      const request = await Request.findByPk(id);

      return res.status(200).json(request);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }

  async store(req, res) {
    try {
      const request = await Request.create(req.body);
      return res.status(200).json(request);
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

      const request = await Request.findByPk(id);
      const newRequest = await request.update(req.body);

      return res.status(200).json(newRequest);
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

      const request = await Request.findByPk(id);
      await request.destroy();

      return res.status(200).json(null);
    } catch (err) {
      return res.status(400).json({
        errors: err.errors.map((error) => error.message),
      });
    }
  }
}

export default new RequestController();
