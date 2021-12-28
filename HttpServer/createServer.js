var http = require("http");
var fs = require("fs");
var EventEmitter = require("events");

var emitter = new EventEmitter();

var server = http.createServer();

// server.on("request", (req, res) => {

//     fs.readFile("D:/Mayank/Github/NodeDecember/sampleData.txt", (err, data) => {
//         emitter.emit("data", data)
//     })

//     emitter.on("data", (data) => {
//         res.write(data);
//         res.end();
//     })
   
// })

server.on("request", (req, res) => {
    var myPromise = new Promise ((resolve, reject) => {
        fs.readFile("D:/Mayank/Github/NodeDecember/sampleData.txt", (err, data) => {
            resolve(data)
        })
    })
    

    myPromise.then((data) => {
        res.write(data);
        res.end();
    })
   
})

server.listen(4000)

