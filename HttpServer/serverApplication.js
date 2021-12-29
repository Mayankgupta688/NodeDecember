const fs = require("fs");
const http = require("  ");
var process = require("process");

var path = require("path")

var server = http.createServer();

server.on("request", (req, res) => {
    if(req.url === "/") {
        var data = fs.readFileSync(__dirname + "/index.html");
        res.writeHead(200, {"Content-Type": "text/html"});
        res.write(data);
        res.end();
    } else if(req.url === "/home") {
        fs.readFile(__dirname + "/home.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } else if(req.url === "/help") {
        fs.readFile(__dirname + "/help.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } else if(req.url === "/about") {
        fs.readFile(__dirname + "/about.html", (err, data) => {
            res.writeHead(200, {"Content-Type": "text/html"});
            res.write(data);
            res.end();
        })
    } else if(req.url === "/amazon") {

        http.get("http://technofunnel.in/", (responseStream) => {
            debugger;
            var dataResponse = "";
            responseStream.on("data", (data) => {
                dataResponse += data;
            })

            responseStream.on("end", () => {
                console.log("data Reading in Progress");
                res.writeHead(200, {"Content-Type": "text/html"});
                res.write(dataResponse);
                res.end();
            })
            
        })
    }
    
})

server.listen(process.env.appPort, () => {
    console.log("Server started on port 8000")
})