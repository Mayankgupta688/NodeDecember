var fs = require("fs");

var fileReaderEmitter = fs.createReadStream("D:/Mayank/Github/NodeDecember/log.txt");
var fileWritterEmitter = fs.createWriteStream("D:/Mayank/Github/NodeDecember/logSample.txt");

var intervalData = setInterval(() => {
    console.log("ashjkdhgasjhdjasd")
}, 5)

fileReaderEmitter.on("data", (chunk) => {
    console.log("Reading Data from File")
    console.log(chunk.length)
    fileWritterEmitter.write(chunk)
})

fileReaderEmitter.on("end", (chunk) => {
    clearImmediate(intervalData);
})

debugger;