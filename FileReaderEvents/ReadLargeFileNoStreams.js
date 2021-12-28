const { clear } = require("console");
var fs = require("fs");

var intervalData = setTimeout(() => {
    console.log("ashjkdhgasjhdjasd")
}, 2000)

console.time("Mayank")

var data = fs.readFileSync("D:/Mayank/Github/NodeDecember/log.txt") /// 15 Sec


console.log(data);

console.timeEnd("Mayank")



debugger;