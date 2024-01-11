import Request from '../models/Request';

class RequestController {
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
}

export default new RequestController();
