function Employee(name, age, designation) {
    this.userName = name;
    this.userAge = age;
    this.userDesignation = designation;
}

Employee.prototype.getName = function() {
    console.log(this.userName)
}

Employee.prototype.getAge = function() {
    console.log(this.userAge)
}

Employee.prototype.getDesignation = function() {
    console.log(this.userDesignation)
}

Employee.prototype.count = 10;

var employeeOne = new Employee("Mayank", 30, "Vice President");

var employeeTwo = new Employee("Anshul", 31, "Manager");

var employeeThree = new Employee("Meha", 20, "Developer");

employeeOne.getName()
employeeOne.getAge()

employeeTwo.getName()
employeeTwo.getAge()

employeeThree.getName()
employeeThree.getAge()
