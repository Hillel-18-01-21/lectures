// const a = 21;

// const b = a;

// let objA = {
//     a: 42
// };

// let objB = objA;

// objA = null;
// objB = null;


// function doSome() {
//     return 42;
// }

// const someAnotherFunc = doSome;

// const a = 42;

// function main() {
//     const b = a / 2;

//     console.log(b);
// }

// function secondary(arg1) {
//     console.log(arg1);
//     const pi = 3.14;

//     function innerFunc() {
//         console.log(pi);
//     }

//     return innerFunc;
// }


// const firstSecFun = secondary(12);

// const secondSecFun = secondary(44);

// firstSecFun();
// secondSecFun();

// firstSecFun = null;

// function add(a) {
//     return function (b) {
//         return a + b;
//     };
// }

// function calc(initVal) {
//     return {
//         add: function (b) {
//             return initVal + b;
//         }
//     };
// }


// homework
const first = calc(4);

first.add(33);
first.sub(12);
first.div(2);
first.mult(4);

first.getResult(); // 50