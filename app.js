require('dotenv').config();
var http = require("http");


http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});

    response.end(process.env.NODE_ENV);
    
 }).listen(process.env.PORT);
 
 // Console will print the message
 console.log(`Server running at http://127.0.0.1:${process.env.PORT}/`);