
const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

require('./config/middleware.js')(app, express);

app.listen(port, () => {
  console.log('Listening on port ' + port);
});
