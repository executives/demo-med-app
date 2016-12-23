var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var port = process.env.PORT || 3030;
var ipAddress = process.env.IP || "0.0.0.0";

var app = express();

var config = require('./server/config/config.js')[env];

require('./server/config/express')(app, config);

require('./server/config/mongoose')(config);

require('./server/config/passport')();

require('./server/config/routes')(app);

app.listen(config.port, ipAddress, null, function() {
  console.log("Server listening at", ipAddress + ":" + config.port);
  console.log("Site found at https://med-app-demo-executives1.c9users.io/");
});
