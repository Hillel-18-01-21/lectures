{
    /** XHR */

    // 1. Создаём новый объект XMLHttpRequest
    const xhr = new XMLHttpRequest();

    // 2. Конфигурируем его: GET-запрос на URL 'https://swapi.dev/api/films'
    xhr.open('GET', 'https://swapi.dev/api/films', false);

    // 3. Отсылаем запрос
    xhr.send();

    // 4. Если код ответа сервера не 200, то это ошибка
    if (xhr.status != 200) {
        // обработать ошибку
        console.log(xhr.status + ': ' + xhr.statusText); // пример вывода: 404: Not Found
    } else {
        // вывести результат
        const film = JSON.parse(xhr.responseText).results[0];
        console.log(film);
    }
}

// class Animal {}
// // function Animal() {}

// console.log(typeof Animal); // function
// Animal();

// function AnimalFD() {}; // func declaration

// const AnimalFE = function() {}; // func expression

// class AnimalCD {} // class declaration

// const AnimalCE = class {} // class expression

// function classCreator(propName, value) {
//     return class {
//         get [propName + 'Getter']() {
//             return value;
//         }
//     };
// }

// const newClassObj = new (classCreator('name', 'Tom'));

// const secondClassObj = new (classCreator('age', 42));

// class Animal {
//     static type = 'wild';

//     get name() {
//         return this._name;
//     }

//     set name(newName) {
//         this._name = newName;
//     }

//     constructor(name) {
//         if (name) {
//             this._name = name;
//         }
//     }

//     makeSound() {
//         console.log(`${this.name} makes sound!`);
//     }

//     feed(meal) {
//         console.log(`${this.name} is eating ${meal}`);
//     }
// }

// class Dog extends Animal {
//     constructor(name) {
//         super(name);
//     }

//     makeSound() {
//         console.log(`${this.name} is woofing!`);
//     }

//     feed(meal) {
//         super.feed(meal);
//         console.log('and shaking his tail');
//     }
// }

// const domestic = new Dog('Jimmy');
// domestic.feed('bone');
