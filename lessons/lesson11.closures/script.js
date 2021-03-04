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
// const first = calc(4);

// first.add(33);
// first.sub(12);
// first.div(2);
// first.mult(4);

// first.getResult(); // 50

// function calc(initValue) {

// }


// function count() {
//     let i = 0;

//     return function() {
//         return i++;
//     };
// }

// const globalIncrement = count();
// const notSoGlobalIncrement = count();

// console.log(globalIncrement()); // 0

// console.log(notSoGlobalIncrement()); // 0

// console.log(globalIncrement()); // 1
// console.log(globalIncrement()); // 2
// console.log(globalIncrement()); // 3

// Reduce
// const result = [1, 3, 7, 2].reduce((acc, e) => {
// 	acc += e;
// 	return acc;
// });

// console.log(result);

const template = `Hello, {{name}}, are u {{age}} old?`;

const a = {
    name: 'Max',
    age: 22
};

const b = {
    name: 'Stefano'
};

function makeTextFromTemplate(tmp) {
    return obj => {
        let result = tmp;
        Object.keys(obj).forEach(e => {                // 1. e = 'name', tmp = `Hello, {{name}}, are u {{age}} old?`
            result = result.replace(`{{${e}}}`, obj[e]);  // result = `Hello, Max, are u {{age}} old?`
            // 2. e = 'age', tmp = `Hello, {{name}}, are u {{age}} old?`
            // result = `Hello, {{name}}, are u 22 old?`
        });


        return result;
    };
};

const makeTmp = makeTextFromTemplateR(template);

console.log(makeTmp(a));

console.log(makeTmp(b));

function makeTextFromTemplateR(tmp) {
    return obj => Object
        .keys(obj)
        .reduce((result, key) => result.replace(`{{${key}}}`, obj[key]), tmp);
};