var name = "TechnoFunnel";
debugger;

var promiseObj = new Promise(function(resolve, reject) {
    debugger;
    setTimeout(function() {
        debugger;
        if(name == "TechnoFunnel") {
            resolve("The Promise Resolved, Let go for a drive....")
        } else {
            reject("The Promise is Rejected, Let go some other Day....")
        }
        
    }, 5000)
});

promiseObj.then(function(resolutionData) {
    debugger;
    console.log(resolutionData)
}, function(rejectionData) {
    debugger;
    console.log(rejectionData)
})

promiseObj.then(function(resolutionData) {
    debugger;
    var a = 10;
    console.log(a)
}, function(rejectionData) {
    var a = 20;
    console.log(a)
})

promiseObj.then(function(resolutionData) {
    debugger;
    var b = 100;
    console.log(b)
}, function(rejectionData) {
    var b = 1000;
    console.log(b)
})

var a = 10;
console.log(a);