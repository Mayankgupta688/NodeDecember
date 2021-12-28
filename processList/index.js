
import process from "process";
import fs from "fs";

process.on("exit", () => {
    debugger;
    console.log("Do Something");
    setTimeout(() => {
        debugger;
        console.log("hasgdjagsjd")
    }, 1000)
})

process.on("uncaughtException", (err) => {
    debugger;

    fs.appendFileSync("D:/Mayank/Github/NodeDecember/processList/log.txt", "Error occured during Execution: " + err)
    
})

var data = fs.readFile("C:/Abc/text.js", (err, data) => {
    if(err) {
        debugger;
        throw "File Not Available";
    }
});

console.log(data)