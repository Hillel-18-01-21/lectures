const poll = [
    {
        question: `Что будет результатом команды typeof []?`,
        options: {
            0: 'string',
            1: 'array',
            2: 'object',
            3: 'window'
        }
    },
    {
        question: `Как можно задать прототип для объекта?`,
        options: {
            0: 'через глобальную функцию setPrototype',
            1: 'через prototype у функции-конструктора',
            2: 'extends у класса',
            3: 'object.setProtoObject()',
            4: 'Object.create(someObj)' // someObj -> prototype for new obj
        }
    },
    {
        question: `Какой оператор прирывает только текущую итерацию цикла?`,
        options: {
            0: 'return',
            1: 'continue',
            2: 'break',
            3: 'break + pointer'
        }
    },
    {
        question: `Для работы с асинхронностью в JS существуют следующие инструменты`,
        options: {
            0: 'Semaphores',
            1: 'callbacks',
            2: 'многопоточность',
            3: 'Promises',
            4: 'Routines'
        }
    },
    {
        question: `Какого типа будет запрос при вызове fetch если явно тип не указывать?`,
        options: {
            0: 'POST',
            1: 'GET',
            2: 'RESOURCE',
            3: 'OPTIONS',
            4: 'HEAD'
        }
    }
];

// {
//     pointer: for(let i = 0; i < 5; i++) {
//         break pointer;
//     }
// }