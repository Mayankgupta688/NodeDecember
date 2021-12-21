function modulePattern(name, age) {
    var name = name;
    var age = age;

    function getData() {
        console.log(name)
    }

    function getDetails() {
        getData();
    }

    return {
        getDetails: getDetails
    }
}

var data1 = modulePattern("Mayank", 10);
var data2 = modulePattern("Anshul", 20);
var data3 = modulePattern("TechnoFunnel", 3);
var data4 = modulePattern("Meha", 30);

console.log(data1.getDetails())
console.log(data2.getDetails())
console.log(data3.getDetails())
console.log(data4.getDetails())

// 24 MB

// 12 MB - Common Function

debugger;