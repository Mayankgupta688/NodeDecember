debugger;
var fileExecutor = require("fs");

fileExecutor.readFile("D:/Mayank/Github/NodeDecember/JavaScript/enhancement.txt", executeFileReader)


function executeFileReader(err, data) {
    if(err) {
        console.log("Error While Reading File....")
    } else {
        console.log(data.toString())
    }
}

debugger;
var a = 10;

console.log(a)