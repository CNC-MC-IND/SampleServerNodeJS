/**
 * Created by NCS-KSW on 2017-08-04.
 */
var http = require('http');

function start(route, handle) {
    function onRequest(request, response) {
        route(handle, response, request); // injected function call
    }

    http.createServer(onRequest).listen(8888);

    console.log('server has started.');
}

exports.start = start;
/*var ip = request.headers['x-forwarded-for'] ||
    request.connection.remoteAddress ||
    request.socket.remoteAddress ||
    request.connection.socket.remoteAddress;*/