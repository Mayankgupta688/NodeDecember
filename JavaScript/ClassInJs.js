class Employee {
    constructor(name, id, designation) {
        this.name = name;
        this.id = id;
        this.designation = designation
    }

    getDetails() {
        console.log("Hello " + this.name)
    }
}

var employeeOne = new Employee("Mayank", 32, "VP");
var employeeFour = new Employee("Ankit", 29, "Manager");

employeeOne.getDetails();