var salarySum = 0;

function attachEventHandler(emitterObj) {
    emitterObj.on("employeeList", (empList) => {
        empList.forEach(element => {
            salarySum = salarySum + element.salary
        });
    
        console.log(salarySum);
    })
}


function attachEventHandlerPromises(promiseObj) {
    promiseObj.then((empList) => {
        empList.forEach(element => {
            salarySum = salarySum + element.salary
        });
    
        console.log(salarySum);
    })
}

// Try for Callbacks...

module.exports.attachEventHandler = attachEventHandler;
module.exports.attachEventHandlerPromises = attachEventHandlerPromises;

