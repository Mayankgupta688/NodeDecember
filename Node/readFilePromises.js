var fileRead = require("fs");

var promiseObj = new Promise((resolve, reject) => {
  fileRead.readFile("D:/Mayank/Github/NodeDecember/Node/readFile.js", (err, data) => {
    if (err) {
      reject("The promise is rejected");
      console.log("error from executefile reader");
    } else {
      resolve(data);
      console.log(data.toString());
    }
  });
});

promiseObj.then((resolutionData) => {
    console.log(resolutionData.toString());
  }, (rejectionData) => {
    console.log(rejectionData);
  }
);

promiseObj.then((resolutionData) => {
  console.log(resolutionData.toString().length);
});