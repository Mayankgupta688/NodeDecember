var fs = require("fs");

var folderExists = fs.existsSync("D:/Mayank/Github/NodeDecember/SampleFile");
if(folderExists) {
    var fileExists = fs.existsSync("D:/Mayank/Github/NodeDecember/SampleFile/Sample.txt");
    if(fileExists) {
        fs.renameSync("D:/Mayank/Github/NodeDecember/SampleFile/Sample.txt", "D:/Mayank/Github/NodeDecember/SampleFile/SampleFile.txt")
        var dataOfFile = fs.readFileSync("D:/Mayank/Github/NodeDecember/SampleFile/SampleFile.txt");
        console.log(dataOfFile);
        fs.unlinkSync("D:/Mayank/Github/NodeDecember/SampleFile/SampleFile.txt");
        fs.rmdirSync("D:/Mayank/Github/NodeDecember/SampleFile");
    }
} else {
    fs.mkdirSync("D:/Mayank/Github/NodeDecember/SampleFile");
    fs.writeFileSync("D:/Mayank/Github/NodeDecember/SampleFile/Sample.txt", "Hello World....")
}
