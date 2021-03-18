// const students = [
//     {
//         name: 'Mark',
//         marks: [100, 65, 88, 90, 50],
//         attends: 0,
//         address: 'dskjsdjkdsk',
//     },
//     {
//         name: 'John',
//         marks: [83, 10, 65, 0, 50, 83],
//         attends: 0,
//         address: 'dskjsdjkdsk',
//     },
//     {
//         name: 'Joel',
//         marks: [100, 65, 90, 20],
//         attends: 0,
//         address: 'dskjsdjkdsk',
//     }
// ];

// function getNumbers(a, b, c) {
// 	return [a, b, c].filter(e => typeof e === 'number');
// }

// function getInfo(surname, age) {
// 	console.log(getNumbers.apply(null, arguments));
// }

// students.forEach((e, i) => {
//     const getInfoForE = getInfo.bind(e, 'Bound', 99);
//     getInfoForE('Bind', i + 10, 23, 53, 'ok');

//     //getInfo.apply(e, ['Apply', i]);
//     //getInfo.call(e, 'Call', i);
// });

function Student(name, age) {
    this.name = name;
    this.age = age;

    this.marks = [];

    this.attends = 0;
}

const studentA = new Student('Mark', 22);
const studentB = new Student('John', 18);

console.log(studentA);

// ООП
// 1. Наследование
// 2. Инкапсуляция
// 3. Полиморфизм
// 4. Абстракция (не про JS)

// Animal
// name
// age
// color
// hasWool
// makeSound()

// Cat <- Animal
// hasWool - true
// makeSound() { 'Meow!' }

// Wolf <- Animal
// hasWool - true
// makeSound() { 'Auf!' }

// myCat = new Cat(...)
// myDog = new Wolf(...)

function Animal() {
    this.name = '';
    this.age = 0;
    this.hasWool = false;

    this.isPredator = true;
    this.hasTail = true;
    this.isDomestic = false;

    this.makeSound = function () { };
}

function Cat(name, color, age) {
    // this.name = name;
    this.color = color;
    this.age = age;
    this.hasWool = true;
    this.makeSound = function () {
        console.log('Meow!');
    };
}

function Cow(name, color, age) {
    // this.name = name;
    this.color = color;
    this.age = age;
    this.hasWool = true;
    this.isPredator = false;
    this.makeSound = function () {
        console.log('Meow!');
    };
}

const animal = new Animal();

Cat.prototype = animal;

function Wolf(name, color, age) {
    this.name = name;
    this.color = color;
    this.age = age;
    this.hasWool = true;
    this.makeSound = function () {
        console.log('Auf!');
    };
}

const myCat = new Cat('Tom', 'blue', 92);

const myCow = new Cow('Jessie', 'white', 5);

myCow.hasTail = false;

