/**
 * Created by NCS-KSW on 2017-08-04.
 */
/* MAIN ROUTINE */
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

server.start(router.route, requestHandlers.handle);