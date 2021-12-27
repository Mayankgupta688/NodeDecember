var empList = require("./index").empList;

var salarySum = 0;

empList.forEach(element => {
    salarySum = salarySum + element.salary
});

console.log(salarySum)