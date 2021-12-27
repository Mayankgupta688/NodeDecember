var EventEmitter = require("events");

var customEvent = new EventEmitter();

customEvent.emit("taskStarted", {})

var name = "Mayank";

customEvent.on("taskStarted", () => {
    console.log("Hello World.....")
})

customEvent.on("taskStarted", (data) => {
    debugger;
    console.log("Hello World 1.....")
})

customEvent.on("taskStarted", (data) => {
    debugger
    console.log("Hello World 2.....")
})

customEvent.on("taskStarted", (data) => {
    console.log("Hello World 3.....")
})

customEvent.on("taskdone", (data) => {
    console.log("Hello World 4.....")
})

customEvent.emit("taskStarted", {
    name: "Mayank",
    age: 10
})

customEvent.emit("taskdone", {})

console.log(name)