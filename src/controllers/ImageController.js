import multer from 'multer';
import Image from '../models/Image';

import multerConfig from '../config/multerConfig';

const upload = multer(multerConfig).single('image');

class ImageController {
  async store(req, res) {
    // eslint-disable-next-line consistent-return
    return upload(req, res, async (err) => {
      if (err) {
        return res.status(400).json({
          errors: [err.code],
        });
      }
      try {
        const { originalname, filename, mimetype } = req.file;
        const { user_id, product_id } = req.body;
        await Image.create({
          originalname, filename, mimetype, user_id, product_id,
        });
        return res.status(200).json('Image sent');
      } catch (error) {
        console.log(error);
      }
    });
  }
}

export default new ImageController();
