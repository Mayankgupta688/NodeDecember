var fs = require("fs");
var EventEmitter = require("events");
var emitter = new EventEmitter();

var myPromise = new Promise((resolve, reject) => {
    fs.readFile("D:/Mayank/Github/NodeDecember/FileReader/employees.json", (err, data) => {
        if(err) {
            console.log("Error reading File Content...")
        } else {
            var empList = JSON.parse(data).employees;
            emitter.emit("employeeList", empList);
            resolve(empList)
        }
    });
})


module.exports.emitter = emitter;
module.exports.myPromise = myPromise;