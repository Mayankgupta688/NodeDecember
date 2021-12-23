var name = "TechnoFunnel";
debugger;

var promiseObj = new Promise(function(resolve, reject) {
    debugger;
    setTimeout(function() {
        var randomNumber = Math.floor(Math.random() * 100)

        if(randomNumber > 59) {
            resolve({
                result: "success",
                value: randomNumber
            })
        } else {
            reject({
                result: "failure",
                value: randomNumber
            })
        }
    }, 10000)
});

promiseObj.then(function(resolutionData) {
    return {
        message: "The Value is as per Expectation",
        value: resolutionData.value + 1000
    }
}, function(rejectionData) {
    return {
        message: "The Value is not as per Expectation",
        value: rejectionData.value + 100
    }
}).then((data) => {
    console.log(data)
    return 100
}).then((data) => {
    console.log(data);
})

var a = 10;
console.log(a);