let express = require('express'),
    controller = require('./controller'),
    app = express();

app.use('/retrofy', controller);
module.exports = app;
