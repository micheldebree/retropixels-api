let express = require('express'),
    router = express.Router();

router.get('/', function(req, res) {
    res.status(200).send('Hello World!');
});

module.exports = router;
