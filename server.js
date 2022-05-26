var express = require('express');
var app = express();
const asyncMiddleware = require('./asyncMiddleware');

app.use(asyncMiddleware);

require('./routes.js')(app);

app.listen(3000, () => console.log(`App listening on port http://localhost:3000`))

