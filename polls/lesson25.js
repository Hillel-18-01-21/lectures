const poll = [
    {
        question: `Что выведется в консоль?`,
        payload: () => {
            console.log(foo());

            !function foo() {
                return 'Hello!';
            }
        },
        options: {
            0: 'Hello!',
            1: 'undefined',
            2: '',
            3: 'Error'
        }
    },
    {
        question: `Как можно получить элемент по атрибуту?`,
        options: {
            0: 'document.getElementsByAttribute',
            1: 'document.querySelector',
            2: 'document.selectByAttribute',
            3: 'document.getElementById'
        }
    },
    {
        question: `* Какой будет результат операции {} == []?`,
        payload: () => {
            [] == {}
            const a = String([]);
            const b = (new Object()).toString();
            const c = {} + '';
            const obj1 = {};
            const obj2 = {};
            console.log(({} + '') == ({} + ''));
        },
        options: {
            0: false,
            1: true,
            2: undefined,
            3: 'Error'
        }
    },
    {
        question: `Что выведется в консоли?`,
        payload: () => {
            let a = 42;
            {
                let a = 'Bob';
                a = a.split('').join('');
            }
            console.log(a);
        },
        options: {
            0: 'boB',
            1: 'Bob',
            2: 42,
            3: undefined
        }
    },
    {
        question: `Что такое IIFE?`, // -> immediately invoked function expression
        payload: () => {
            (function () {})();
        },
        options: {
            0: 'Тип переменной введенный в ES2014',
            1: 'Протокол обмена данными с сервером',
            2: 'Название JS-движка в браузере',
            3: 'Способ объявления функции, которая вызывается сразу после объявления'
        }
    }
];
