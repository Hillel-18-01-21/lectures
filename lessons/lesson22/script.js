// ES2015 or ES6

// 1 - class -> constructor
// 2 - () => / arrow function
// 3 - Promise
// 4 - let/const
// 5 - ... (spread/rest)

// const resultArray = [1, 2, 3, ...arr1, ...arr2]; // <- spread array
// const resultObject = { ...obj1, name: 'Alex' }; // <- spread object (clone)

// const foo = (a, ...params) => { // rest - params = [3, true]

// };

// foo(1, 3, true);

// 6 - destructurisation
const obj = {
    name: 'Bob',
    age: 42,
    country: 'UK',
    city: {
        name: 'London',
        population: '12m'
    }
};

// var country = obj.country; // ES5

const { country: someCountry, city: { population } } = obj; // ES6
console.log(someCountry, population);

const arr1 = [true, 33, 42];

const [, age] = arr1;

const [, ...arr2] = arr1;

console.log(age, arr2);

// 7 - default argument value

// ES5
function setName(name) {
    if (!name) {
        name = 'John';
    }
    user.name = name;
}

// ES6
function setName(name = 'John', age, sex) {
    user.name = name;
}

setName(undefined, 42, 'Male');