// // ES2015 or ES6

// // 1 - class -> constructor
// // 2 - () => / arrow function (closure context, no "arguments", can't use with "new")
// // 3 - Promise
// // 4 - let/const (block scope)
// // 5 - ... (spread/rest)

// // const resultArray = [1, 2, 3, ...arr1, ...arr2]; // <- spread array
// // const resultObject = { ...obj1, name: 'Alex' }; // <- spread object (clone)

// // const foo = (a, ...params) => { // rest - params = [3, true]

// // };

// // foo(1, 3, true);

// // 6 - destructurisation
// const obj = {
//     name: 'Bob',
//     age: 42,
//     country: 'UK',
//     city: {
//         name: 'London',
//         population: '12m'
//     }
// };

// // var country = obj.country; // ES5

// const { country: someCountry, city: { population } } = obj; // ES6
// console.log(someCountry, population);

// const arr1 = [true, 33, 42];

// const [, age] = arr1;

// const [, ...arr2] = arr1;

// console.log(age, arr2);

// // 7 - default argument value

// // ES5
// function setName(name) {
//     if (!name) {
//         name = 'John';
//     }
//     user.name = name;
// }

// // ES6
// function setName(name = 'John', age, sex) {
//     user.name = name;
// }

// setName(undefined, 42, 'Male');

// // 8 - object assignment
// const id = Date.now();

// // ES5
// var _todItem = {
//     id: id
// };

// // ES6
// const todoItem = {
//     id
// };

// // 9 - template string
// const str = `${true ? 'test' : 'foo'} djf kfdjfdjk`;

// // 10 - async/await

// // Promise way
// function foo() {
//     let response;

//     fetch('https://google.com')
//         .then(resp => {
//             // some code
//             response = resp;
//             return fetch('https://google.com/search');
//         })
//         // .catch(e => {
//         //     // error handler
//         //     return fetch('https://google.com/search');
//         // })
//         .then(resp => {
//             return fetch('https://google.com/search?q=hillel');
//         })
//         // .catch(e => {
//         //     // error handler
//         //     return fetch('https://google.com/search?q=hillel');
//         // })
//         .then(e => {
//             // some code
//         })
//         .catch(e => {
//             // 
//         });


//     console.log(response); // undefined
// }

// async function bar() {
//     try {
//         let response, searchResponse, qResponse;
//         try {
//             response = await fetch('https://google.com');
//         } catch (e) {
//             // error handling
//         }
//         try {
//             searchResponse = await fetch('https://google.com/search');
//         } catch (e) {
//             // error handling
//         }
//         try {
//             qResponse = await fetch('https://google.com/search?q=hillel');
//         } catch (e) {
//             // error handling
//         }

//         console.log(response);
//         return response;
//     } catch (e) {
//         console.error(e);
//     }
// }

// const r = bar();

// function buz() {
//     try {
//         return 42;
//     } catch (e) {

//     } finally {
//         console.log('hello from finally!');
//     }
// }

// const a = buz();
// console.log(a);

// 11 - generators

// function *demo() {
//     yield 1;
//     yield 2;
//     yield 3;
// }

// const a = demo();
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());
// console.log(a.next());

const newObj = {
    name: 'Test',
    age: 42,
    iterate: function *iterate() {
        yield this.name;
        yield this.age;
    }
};

let done = false;
const objGen = newObj.iterate();
do {
    const { value, done: _done } = objGen.next();
    console.log(value);
    done = _done;
} while(!done);

for(let e in newObj) {
    console.log(e);
}

// 12 - BigInt, Symbol

// BigInt

// Symbol
