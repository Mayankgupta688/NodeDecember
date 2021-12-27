var fs = require("fs");

var fileData = fs.readFileSync("D:/Mayank/Github/NodeDecember/FileReader/employees.json");

var empList = JSON.parse(fileData).employees;

module.exports.empList = empList;