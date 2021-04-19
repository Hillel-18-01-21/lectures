const poll = [
    {
        question: `Что будет результатом команды typeof new Number('23')?`,
        options: {
            0: 'string',
            1: 'array',
            2: 'object',
            3: 'window',
            4: 'number'
        }
    },
    {
        question: `Какой контекст выведется?`,
        payload: () => {
            function foo() {
                document.getElementById('some-id').addEventListener('click', e => {
                    console.log('Context is ', this);
                });
            }

            foo.call(someObj, []);
        },
        options: {
            0: 'e.currentTarget',
            1: 'window',
            2: 'someObj',
            3: 'Object'
        }
    },
    {
        question: `Какой из методов массива меняет порядок индексов элементов на обратный?`,
        payload: () => {
            const demoArray = [4, 5, 9, 15];
            demoArray.reverse();

            console.log(demoArray[2]);

            const demoString = 'lorem ipsum';
            console.log(demoString[10]);
        },
        options: {
            0: 'random',
            1: 'reverse',
            2: 'loop',
            3: 'split'
        }
    },
    {
        question: `Какой будет результат?`,
        payload: () => '0' == true, // ===
        options: {
            0: false,
            1: true,
            2: undefined
        }
    },
    {
        question: `Что выведется в консоли?`,
        payload: () => {
            const obj = {
                a: 'value a',
                b: 'value of key b'
            };

            const obj2 = {
                ...obj,
                a: 42
            };
            console.log(obj2.a);
        },
        options: {
            0: 'value a',
            1: 'value of key b',
            2: 42,
            3: undefined
        }
    }
];
