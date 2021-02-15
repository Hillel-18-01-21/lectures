// // Унарные операторы
// const i = 0;

// const a = i++; // инкремент (постфикс)
// a; // 0 - предыдущее значение i до увеличения на 1

// const b = ++i; // инкремент (префикс)
// b; // 2 - уже увеличенное на 1

// const c = i--; // декримент
// c; // 2

// const d = --i;
// d; // 0

// // Ссылочные типы

// // Примитивы
// const f = 5;
// const g = f;

// // Объекты
// const h = {
//     name: 'Stepan'
// };
// const j = h;

// console.log(j.name); // Stepan

// j.name = 'Ioann';

// console.log(h.name); // Ioann

// console.log(j === h); // true

// // Example

// let a = {
//     num: 1
// };

// const b = a;

// a = {
//     num: 3
// };

// console.log(b.num); // 1

// Рекурсия

// let myObj = {
//     name: 'Ivan',
//     age: 22,
//     status: 'student',
//     mainSubject: {
//         name: 'JS',
//         level: 'noob'
//     }
// };


// let myCloneObj = copyObj(myObj);

// console.log(myCloneObj);

// function copyObj(objProto) {
//     let objClone = {};
//     for (let key in objProto) {
//         if (typeof objProto[key] === 'object') {
//             objClone[key] = copyObj(objProto[key]);
//         } else {
//             objClone[key] = objProto[key];
//         }
//     }
//     return objClone;
// }

// function fact(a) {
//     if (a <= 1) {
//         return 1;
//     }
//     return a * fact(a - 1);
// }

// console.log(fact(4));

// Области видимости
var myNum = 42;

function foo() {
    var localTest = 24;
    if (true) {
        const myNum = 422;
    }
    console.log('foo: ', myNum);

    function bar() {
        var myNum = 4222;
        console.log('bar: ', myNum);
    }

    bar();
}

// foo();

// DON'T USE var
function buz() {
    for (var i = 0; i < 3; i++) {
        // doing some actions
        setTimeout(() => {
            console.log(i);
        }, 0);
    }

    // console.log(i);
}
buz();