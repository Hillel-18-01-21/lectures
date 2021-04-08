function Foo() {}

const obj1 = new Foo();

const obj2 = Object.create(obj1);

const obj3 = {
    name: 'Alex'
};

obj3.age = 22;
obj3['sex'] = 'male';

Object.defineProperty(obj3, 'city', {
    value: 'Odessa',
    writable: true,
    configurable: false,
    enumerable: true,
});

console.log('origin: ', obj3);

obj3.city = 'Kyiv';

delete obj3.city;

console.log('updated: ', obj3);

// const newObj = Object.create({ city: 'Odessa' });

// delete newObj.city;

// console.log(newObj.city); // Odessa <- isn't deleted

// newObj.city = 'NY';

// console.log(newObj.city); // NY

// delete newObj.city;

// console.log(newObj.city); // Odessa <- prop of proto