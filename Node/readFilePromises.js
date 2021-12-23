var fileRead = require("fs");

var promiseObj = new Promise(function (resolve, reject) {
  fileRead.readFile("D:/Mayank/Github/NodeDecember/Node/readFile.js", function executefileReader(err, data) {
    if (err) {
      reject("The promise is rejected");
      console.log("error from executefile reader");
    } else {
      resolve(data);
      console.log(data.toString());
    }
  });
});

promiseObj.then(
  function (resolutionData) {
    console.log(resolutionData.toString());
  },
  function (rejectionData) {
    console.log(rejectionData);
  }
);

promiseObj.then(
    function (resolutionData) {
      console.log(resolutionData.toString().length);
    }
);