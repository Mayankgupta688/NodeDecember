const fs = require("fs")

function readFileContentAsync(fileName) {
    var newPromiseForFileContent = new Promise((resolve, reject) => {
        setTimeout(() => {
            fs.readFile(fileName, function(err, data) {
                if(err) {
                    reject(err)
                } else {
                    resolve(data);
                }
            })
        }, 10000)
        
    })

    return newPromiseForFileContent;
}

async function getFileContent() {
    var returedPromise = readFileContentAsync("D:/Mayank/Github/NodeDecember/Node/readFile.js");
    const data = "";
    try {
        data = await returedPromise;
    } catch (err) {
        console.log("Error Handled...");
    }
    console.log(data.toString());
    console.log("Mayank");
    console.log("Hello World....")
}

getFileContent();
