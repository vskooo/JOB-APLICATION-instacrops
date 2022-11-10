const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);


const port = process.env.PORT || 3000;
app.set('port', port);

server.listen(3000, '10.10.11.117' || 'localhost', function() {
    console.log('API de INSTACROPS🔬 ' + port + ' INICIADA CORRECTAMENTE✓✓');
});