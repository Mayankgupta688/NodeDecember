function Employee(name, age, designation) {
    this.userName = name;
    this.userAge = age;
    this.userDesignation = designation;
}

Employee.prototype.getData = function() {
    console.log(this.userName)
}

Employee.prototype.count = 10;

var employeeOne = new Employee("Mayank", 30, "Vice President");

var employeeTwo = new Employee("Anshul", 31, "Manager");

var employeeThree = new Employee("Meha", 20, "Developer");

debugger;

employeeOne.getData()

debugger;
