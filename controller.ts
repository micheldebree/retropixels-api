import * as express from 'express';
import * as jimp from 'jimp';
export const router = express.Router();

router.get('/', function(req, res) {
  try {
    jimp.read('test.jpg', (err, image) => {
      if (err) throw err;
      image.getBuffer(jimp.AUTO, (err, buffer) => {
        if (err) throw err;
        res.setHeader('Content-Type', 'image/jpeg');
        res.status(200).send(buffer);
      });
    });
  }
  catch (e) {
    res.status(500).send(e);
  }
});
