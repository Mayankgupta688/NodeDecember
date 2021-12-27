function attachEventHandler(emitterObj) {

    emitterObj.on("employeeList", (empList) => {
        empList.forEach(employee => {
            console.log(employee.name);
        });
    })
}

module.exports.attachEventHandler = attachEventHandler;