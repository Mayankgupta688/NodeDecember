var fs = require("fs");

var promiseObj = new Promise(function(resolve, reject) {
    fs.readFile('D:/Mayank/Github/NodeDecember/Node/readFile.js', (err, data) => {
        if(err){
            reject({
                message: "Error in Reading or Accessing file"
            });
        }
        else{
            resolve({
                message: "File Accessed Successfully",
                value: data.toString
            });
        }
    });
});

promiseObj.then(function(resolutionData) {
    console.log(resolutionData.message);
    console.log(resolutionData.value.toString());
}, function(rejectionData) {
    console.log(rejectionData);
});

promiseObj.then(function(resolutionData) {
    console.log(resolutionData.value.toString().length);
}, function(rejectionData) {
    console.log(rejectionData);
});