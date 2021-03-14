'use strict';

// function foo() {
//     // console.log(obj.a);
//     console.log(this);
// }

// foo();

// function getName() {
//     console.log(this.name);
// }

// const student = {
//     name: 'Alex',
//     age: 23,
//     getName: getName
// };

// const studentMax = {
//     name: 'Max',
//     age: 25,
//     getName: getName
// };

// student.getName();
// studentMax.getName();

// function globalFoo() {
//     const obj = {
//         bar: function () {
//             console.log(this);
//         },
//         foo: () => {
//             console.log(this);
//         }
//     }

//     // obj.bar();
//     obj.foo();
// }

// globalFoo();

// const a = {
//     name: 'Test',
//     someFoo: globalFoo
// };

// a.someFoo();

// const btnEl = document.getElementById('btn');

// btnEl.addEventListener('click', function() {
//     this.innerText = 'Clicked';
// });

// const nested = {
//     someGlobalProp: {
//         name: 'subNested',
//         printName: function () {
//             console.log(this.name);
//         }
//     }
// };

// nested.someGlobalProp.printName();

// const obj = {
//     name: 'new Test',
//     printName: function() {
//         console.log(this.name);
//     }
// };

// const obj2 = {
//     name: 'obj2 name',
//     printName: obj.printName
// };

// obj2.printName();

// function deleteDB() {
//     console.log(this);
//     if (this && this.permission === 'all') {
//         console.log('db deleted');
//     } else {
//         console.log('permission denied');
//     }
// }

// const admin = {
//     name: 'Admin Admin',
//     permission: 'all',
//     action: deleteDB
// };

// // admin.action();

// const user = {
//     name: 'User User',
//     action: deleteDB.bind(admin)
// };

// // user.action();

// const deleteUnderAdmin = deleteDB.bind(admin);
// const deleteUnderUser = deleteUnderAdmin.bind(user);

// // deleteDB();
// deleteUnderAdmin();
// deleteUnderUser();

// function pushMark(mark) {
//     this.marks.push(mark);
//     console.log(`You just pushed ${mark}`);
// }

// const students = [{
//     name: 'Alex',
//     marks: [],
// }, {
//     name: 'Max',
//     marks: []
// }];

// // student.marks = [12, 10, 12, 4]; // 1
// students.map(e => {
//     [12, 10, 12, 4].map(pushMark.bind(e));
// });

// console.log(students);

// // console.log(typeof deleteUnderAdmin);