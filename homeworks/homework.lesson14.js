const HAMBURGER_TYPES = {
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

const TOPPINGS = {
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

function Hamburger(type) {
    this.type = type;
    this.toppings = [];

    this.addTopping = function (topping) {
        this.toppings.push(topping);
    }

    this.calcPrice = function () {
        return this.type.price + this.toppings.reduce((acc, e) => {
            return acc + e.price;
        }, 0);
    }

    this.calcCal = function () {
        return this.type.cal + this.toppings.reduce((acc, e) => {
            return acc + e.cal;
        }, 0);
    }
}

const macHamburger = new Hamburger(HAMBURGER_TYPES.small);

macHamburger.addTopping(TOPPINGS.cheese);
macHamburger.addTopping(TOPPINGS.potato);

console.log(`macHamburger has price $${macHamburger.calcPrice()} and cal ${macHamburger.calcCal()}`);

const cooperHamburger = new Hamburger(HAMBURGER_TYPES.big);

cooperHamburger.addTopping(TOPPINGS.chilli);
cooperHamburger.addTopping(TOPPINGS.cheese);

console.log(`cooperHamburger has price $${cooperHamburger.calcPrice()} and cal ${cooperHamburger.calcCal()}`);