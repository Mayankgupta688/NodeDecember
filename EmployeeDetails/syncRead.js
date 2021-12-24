const fs = require("fs");

class Employee {
  constructor(id, name, createdAt = "Today", avatar = "https://image.shutterstock.com/image-photo/business-woman-wearing-face-mask-260nw-1768676684.jpg") {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.createdAt = createdAt;
  }
}

class EmployeeReader {
    constructor() {
        this.empList = []
    }

    readEmployeeList(fileName) {
        var employeesDataString = fs.readFileSync(fileName);
        var employeesData = JSON.parse(employeesDataString.toString());

        employeesData.managers.forEach((a) => {
          var newEmployee = new Employee(a.name, a.id);
          this.empList.push(newEmployee);
        })
    }
}

var reader = new EmployeeReader();
reader.readEmployeeList("D:/Mayank/Github/NodeDecember/EmployeeDetails/mayankDetails.json");
console.dir(reader.empList)