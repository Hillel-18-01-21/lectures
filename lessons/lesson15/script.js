function Burger() { }

function Hamburger(type) {
    this.type = type;
    this.toppings = [];

    this.someFunc = function () { };
}

Hamburger.prototype = new Burger(); /* (function() {
    const newContext = {};
    Burger.apply(newContext, []);
    return newContext;
})();
*/

Hamburger.prototype.addTopping = function (topping) {
    this.toppings.push(topping);
};

Hamburger.prototype.calcPrice = function () {
    return this.type.price + this.toppings.reduce((acc, e) => {
        return acc + e.price;
    }, 0);
};

Hamburger.prototype.calcCal = function () {
    return this.type.cal + this.toppings.reduce((acc, e) => {
        return acc + e.cal;
    }, 0);
};

Hamburger.TYPES = {
    small: {
        price: 32,
        cal: 300,
    },
    medium: {
        price: 64,
        cal: 500
    },
    big: {
        price: 120,
        cal: 900
    }
};

Hamburger.TOPPINGS = {
    cheese: {
        price: 5,
        cal: 100
    },
    potato: {
        price: 20,
        cal: 200,
    },
    chilli: {
        price: 15,
        cal: 5
    }
};

// const macHamburger = new Hamburger(Hamburger.TYPES.small);

// macHamburger.addTopping(Hamburger.TOPPINGS.cheese);
// macHamburger.addTopping(Hamburger.TOPPINGS.potato);

// console.log(`macHamburger has price $${macHamburger.calcPrice()} and cal ${macHamburger.calcCal()}`);

// const cooperHamburger = new Hamburger(Hamburger.TYPES.big);

// cooperHamburger.addTopping(Hamburger.TOPPINGS.chilli);
// cooperHamburger.addTopping(Hamburger.TOPPINGS.cheese);

// console.log(`cooperHamburger has price $${cooperHamburger.calcPrice()} and cal ${cooperHamburger.calcCal()}`);

// Инкапсуляция

// Вариант 1 (основан на замыкании)

function Animal(_name, age) {
    let name = _name;
    this.age = age;

    this.getName = function () {
        return name;
    }

    this.setName = function (_name) {
        name = _name;
    }
}


// Вариант 2 (на внегласной договоренности)

function Animal(name, age) {
    this._name = name;
    this.age = age;
}

Animal.prototype = {};

Animal.prototype.getName = function () {
    return this._name;
}

Animal.prototype.setName = function (name) {
    this._name = name;
}


// Полиморфизм

// Классическая реализация (не про JS!)

// function calc(a, b) {
//     return a + b;
// }

// function calc(arr) {
//     return arr.reduce(...);
// }

// calc(2, 5);
// calc([1,3,4]);

// Про JS

// function BaseStudent() {
//     this.marks = [];
// }
// BaseStudent.prototype.getAvgMarks = function() {
//     return this.marks.reduce();
// }

// function Student() {}
// Student.prototype = new BaseStudent();
// Student.prototype.getAvgMarks = function(){
//     return this.__proto__.getAvgMarks() * 10;
// }

// Абстракция

// function BaseStudent() {
//     this.marks = [];
// }
// // getRate - должен реализовывать каждый наследник
// BaseStudent.prototype.getRate = function(){};

