var http = require('http');     // modulo http
var url = require('url');        // modulo url GET
var fs = require('fs');     // modulo para ver archivos

// crear el servidor http
var servidor = http.createServer(function(request, response) { // request: recibir
    /* OBTENEMOS LA DATA MEDIANTE EL METODO get */
    if (request.method == 'GET') {
        console.log(request.url);   //    /doc/test2.json
        // JSON
        if (request.url === '/doc/test2.json') {
            var json = fs.readFileSync('./doc/test2.json');
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(json,'binary');
            return;
        }
        // HTML
        if (request.url === '/pub/test2.html') {
            var html = fs.readFileSync('./pub/test2.html');
            response.writeHead(200, {'Content-Type': 'text/plain'});
            response.end(html,'binary');
            return;
        } else {
            response.writeHead(404, {"Content-Type": "text/plain"});
            response.write("404 Not Found\n");
            response.end();
            return;
        }

    }
});

servidor.listen(9876); // http://127.0.0.1:9876

console.log(' -- Servidor Iniciado -- ');
console.log( ' Escuchando http://127.0.0.1:9876');


// http://localhost:9876/doc/test2.json
// http://localhost:9876/pub/test2.html