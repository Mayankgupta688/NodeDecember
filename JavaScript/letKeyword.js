

function abc() {
    debugger
    let a = 10;
    console.log(a);

    if(a == 10) {
        let b = 20;
        b = 100
        console.log(b)
        console.log(a)
    }

    for(let i = 10; i< 15; i++) {
        console.log(i)
    }

    console.log(a)

}

abc();