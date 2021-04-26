const poll = [
    {
        question: `Что выведется в консоль?`,
        payload: () => {
            const getName = function stubName() {
                return 'John';
            };

            console.log(stubName());
            const greeting = `Hello, ${getName()}`;
        },
        options: {
            0: 'John',
            1: '',
            2: 'undefined',
            3: 'Hello, John',
            4: 'Error'
        }
    },
    {
        question: `В какой последовательности выведутся сообщения?`,
        payload: () => {
            setTimeout(() => console.log('Hello!'), 1000); // 1

            console.log('How are you?'); // 2

            Promise.resolve(`Never better! What about you?`).then(e => console.log(e)); // 3

            setTimeout(() => console.log('Have a nice day!')); // 4
        }
    },
    {
        question: `* Какой будет результат операции?`,
        payload: () => {
            console.log(parseInt('574kfj44')); // 574
            console.log(Number('574kfj44')); // -> NaN
        },
        options: {
            0: NaN,
            1: undefined,
            2: 0,
            3: 574
        }
    },
    {
        question: `Что выведется в консоли?`,
        payload: () => {
            function foo() {
                var a = b = 'hello';
                a = 'bye';
            }
            
            foo();
            
            console.log(b);
        },
        options: {
            0: undefined,
            1: 'Error',
            2: 'hello',
            3: 'bye'
        }
    },
    {
        question: `Какая команда в git отвечает за создание новой ветки?`,
        options: {
            0: 'git create branch branch_name',
            1: 'git commit --branch branch_name',
            2: 'git checkout -b branch_name',
            3: 'git push origin master'
        }
    }
];
