/**
 * Created by NCS-KSW on 2017-08-04.
 */

var url = require('url');

function getSocket(username)
{
    console.log("Getting callee socket of "+username);
    if(global.user_to_Socket_Map.has(username)){
        console.log("Actually Getting callee socket of "+username);
        return global.user_to_Socket_Map.get(username);
    }
}

function route(handle,response, request) {
    var pathname = url.parse(request.url).pathname;
    console.log('request for ' + pathname + ' received.');
    console.log('about to route a request for ' + pathname);
    if (typeof handle[pathname] === 'function') {
        handle[pathname](response, request);
    } else {
        console.log('no request handler found for ' + pathname);
        response.writeHead(404, {'Content-Type' : 'text/plain'});
        response.write('404 Not found');
        response.end();
    }
}

exports.route = route;