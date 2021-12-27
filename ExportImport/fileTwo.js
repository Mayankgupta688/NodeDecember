var importedData = require("./fileOne");
var fileThreeData = require("./fileThree");


console.log(global.userDetails);

try {
    importedData.getData();
    console.log(fileThreeData.userName)
    console.log(importedData.fileOneName)
} catch(err) {
    console.log(err)
}


var otherData = "technoFunnel";

console.log(otherData)