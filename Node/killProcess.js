var process = require("process");

var isKilled = process.kill("25872");

console.log(isKilled);