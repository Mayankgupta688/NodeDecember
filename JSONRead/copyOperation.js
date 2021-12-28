var fs = require("fs");

var fileReaderEmitter = fs.createReadStream("D:/Mayank/Github/NodeDecember/JSONRead/employees.json");
var fileWritterEmitter = fs.createWriteStream("D:/Mayank/Github/NodeDecember/JSONRead/employeesCopy.json");

fileReaderEmitter.on("data", (chunk) => {
    fileWritterEmitter.write(chunk)
})

debugger;