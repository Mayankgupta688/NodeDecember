import fs from "fs";
import EventEmitter from "events";

var emitter = new EventEmitter();

fs.readFile("D:/Mayank/Github/NodeDecember/Node/readFile.js", (err, data) => {
    if(err) {
        console.log("error Handling The File Read Operation")
    } else {
        emitter.emit("fileReadComplete", data)
    }
})

emitter.on("fileReadComplete", (data) => {
    console.log(data.toString());
    emitter.emit("dataAvailableForAnalytics", data)
})

emitter.on("fileReadComplete", (data) => {
    console.log("File Read in Progress...");
})

emitter.on("dataAvailableForAnalytics", (data) => {
    debugger;
})

