function dataGenerator(response, cnt){
    console.log("dataGenerator called with " + cnt);

    response.writeHead(200, {'Content-Type' : 'text/plain'});
    response.write('' + cnt++);

    setTimeout(dataGenerator, 1000, response, cnt);
}

function sendingThread(response){
    var timeSlice = 1000;
    var cnt = 1;

    setTimeout(dataGenerator, timeSlice, response, cnt);
}

function getCount(){
    return cnt++;
}
var cnt = 1;
exports.sendingThread = sendingThread;
exports.getCount = getCount;