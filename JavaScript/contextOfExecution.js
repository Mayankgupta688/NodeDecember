debugger;

var name = "mayank";

//this: context of execution which can chage....

function getData() {
    console.log(this.name)
}

// Context is environment where it executes...

// Executor / Context

var userData = {
    name: "technoFunnel"
}

var userInfo = {
    name: "Anshul"
}

getData.call(userData)
getData.call(userInfo)
getData()