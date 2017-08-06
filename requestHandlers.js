/**
 * Created by NCS-KSW on 2017-08-04.
 */
var sendingThread = require('./sendingThread');

function join(response){
    console.log('request handler called --> join');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write("success");
    response.end();
}

function view(response) {
    console.log('request handler called --> view');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write("Hello View");
    response.end();
}

function create(response) {
    console.log('request handler called --> create');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Create');
    response.end();
}

function flowOpen(response) {
    console.log('request handler called --> flowOpen');
var v = sendingThread.getCount();
    //sendingThread.sendingThread(response);
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('' + v);
    response.end();
}

function flowPause(response) {
    console.log('request handler called --> flowPause');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Create');
    response.end();
}

function flowClose(response) {
    console.log('request handler called --> flowClose');
    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('Hello Create');
    response.end();
}



var handle = {}; // javascript object has key:value pair.
handle['/'] = join;

/* FOR TEST */
handle['/view'] = view;
handle['/create'] = create;
/* END - FOR TEST */

handle['/flow_open'] = flowOpen;
handle['/flow_pause'] = flowPause;
handle['/flow_close'] = flowClose;

exports.handle = handle;