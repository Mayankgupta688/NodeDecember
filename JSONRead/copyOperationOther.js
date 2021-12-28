var fs = require("fs");
var zlib = require("zlib");

var fileReaderEmitter = fs.createReadStream("D:/Mayank/Github/NodeDecember/JSONRead/employee.txt");
var fileWritterEmitter = fs.createWriteStream("D:/Mayank/Github/NodeDecember/JSONRead/employeeCopy.txt");
var fileWritterEmitter1 = fs.createWriteStream("D:/Mayank/Github/NodeDecember/JSONRead/employeeCopy1.txt");
var fileWritterEmitter2 = fs.createWriteStream("D:/Mayank/Github/NodeDecember/JSONRead/employeeCopy2.txt");
var fileWritterEmitter3 = fs.createWriteStream("D:/Mayank/Github/NodeDecember/JSONRead/employeeCopy3.txt");

var fileWritterEmitterZlib = fs.createWriteStream("D:/Mayank/Github/NodeDecember/JSONRead/employee.txt.gz");

fileReaderEmitter.pipe(zlib.createGzip()).pipe(fileWritterEmitterZlib);

fileReaderEmitter.pipe(process.stdout);
fileReaderEmitter.pipe(fileWritterEmitter);
fileReaderEmitter.pipe(fileWritterEmitter1);
fileReaderEmitter.pipe(fileWritterEmitter2);
fileReaderEmitter.pipe(fileWritterEmitter3);



debugger;