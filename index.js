/**
 * Created by NCS-KSW on 2017-08-04.
 */
/* MAIN ROUTINE */

var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

if(cluster.isMaster) {

    for (var i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    cluster.on('exit', function (worker, code, signal) {
        console.log('worker ' + worker.process.pid + ' died');
    });
}else{
    server.start(router.route, requestHandlers.handle);
}

