const express = require('express');
const expressStatic = require('express-static');

var server = express();
server.listen(8088);

server.use(expressStatic('./public'));