let bagArray = ['apple 🍎', 'pear 🍐', 'tomato 🍅', 'bug 🐞', 'battery 🔋', 'knife 🗡'];
let numbersArray = [5, 10, 11, 4, 22, 7, 42];

let str = prompt("Insert array: ");

let getFruits = (e, i) => {
    switch (e) {
        case 'apple 🍎':
        case 'pear 🍐':
        case 'tomato 🍅':
            return true;
    }
    return false;
};

const fruitsArray = bagArray.filter(getFruits);

numbersArray
    .slice(0, 4) // Обрезает массив с 0 (включительно) по 4 (не включительно)
    .filter(e => e < 0) // возвращает новый отфильтрованный (по функции) массив
    // .find(e => e % 2 == 0) // возвращает первый найденный по функции елемент
    .findIndex(e => e % 2 == 0) // возвращает индекс первого найденного по функции
// .indexOf('apple 🍎'); // возвращает индекс первого найденного елемента 
// .forEach(e => console.log(e)); // применяет функцию к каждому елементу (ничего не возвращает)

const splittedStringArray = str.split(' '); // делит строку по символу, возвращает массив

const result = splittedStringArray.map(function (e) {
    return +e;
}).join('');

console.log(result);

function map(array, callback) {
    const arrayLength = array.length;
    const newArray = [];
    for (let i = 0; i < arrayLength; i++) {
        const result = callback(array[i]);
        newArray.push(result);
    }
    return newArray;
}

function findAllIndexes(array, callback) {
    const newArray = [];
    array.forEach((e, i) => {
        if (callback(e)) {
            newArray.push(i);
        }
    });
    return newArray;
}


// ДЗ:
// Просим ввести числа через запятую
// Предлагаем след действия:
// 1. Отсортировать по возрастанию
// 2. Вывести числа кратные 3
// 3. Склеить все числа в строку (с указананным делетелем)
// 4. Вывести максимальное число
// 5. Вывести минимальное число