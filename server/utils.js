function foo() {

}

const someConfig = {
    PI: 3.14
};

function tmp() {
    foo();
    console.log(Date.now());
}

module.exports = {
    tmp,
    config: someConfig
};