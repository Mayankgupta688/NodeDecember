var fs = require("fs");
var employeeList = [];
var readStream = fs.createReadStream("D:/Mayank/Github/NodeDecember/JSONRead/employees.json")


var fileData = "";
readStream.on("data", (chunk) => {
    fileData = fileData + chunk;
})

readStream.on("end", () => {
    var data = JSON.parse(fileData.toString());
    employeeList.push([...data.employees])

    data.employees.forEach(emp => {
        employeeList.push(emp)
    });

    console.log(employeeList.length)
})

debugger;