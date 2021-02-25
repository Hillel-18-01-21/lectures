// Block lexical scope in ES3/5

function foo() {
    if (true) {
        var a = 10;
    }

    console.log(a); // 10
}

function bar() {
    try {
        throw null;
    } catch { // <- block scope
        var a = 10;
    }
    console.log(a); // Reference Error
}

function buz(obj) {
    with (obj) {
        a = 150;
        b = 100; // <- ATTENTION! global var
    }

    console.log(a); // Reference Error
    console.log(obj.a); // 150
}

buz({
    a: 200
});
