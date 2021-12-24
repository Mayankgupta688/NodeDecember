function normalFunction() {
    var a = 10;
    var b = 100
    return {
        a: a,
        b: b
    }
}

function* dataGenerator() {
    for(let i = 0; i< 10; i++) {
        yield(i)
    }
}

function* dataGenerator1() {
    let x = 1;
    yield x + 1
    x = 40
    yield x + 10;
    x = 0
    yield x + 30;
}

for(var data of dataGenerator()) {
    console.log(data)
    debugger;
}

debugger;
