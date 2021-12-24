var fs = require("fs");

function readEmployeeList(fileDetails) {
    fs.readFile(fileDetails, (err, data) => {

        var employeeClassObjectList = [];

        if(err) {
            console.log("Error Reading the File...")
        } else {
            JSON.parse(data.toString()).employees.forEach(employee => {
                var newEmployee = new Employee(employee.name, employee.id, employee.createdAt, employee.avatar);
                employeeClassObjectList.push(newEmployee);
            });
        }

        console.dir(employeeClassObjectList)
    })
}

readEmployeeList("D:/Mayank/Github/NodeDecember/EmployeeDetails/mayankDetails.json");

class Employee {
    constructor(name, id, createdAt, avatar) {
        this.name = name;
        this.id = id;
        this.createdAt = createdAt;
        this.avatar = avatar
    }
}

