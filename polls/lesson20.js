// Basics, Arrays, DOM, Prototypes, XHR
const poll = [
    {
        question: `Что будет резельтатом следующей операции - typeof 12 + '1' ?`,
        options: {
            0: 'number',
            1: 'boolean',
            2: 'Symbol',
            3: 'string',
            4: 'undefined'
        }
    },
    {
        question: `Каким методом массива можно воспользоваться для получения индекса элемента?`,
        options: {
            0: 'find',
            1: 'findElementAndIndex',
            2: 'indexOf',
            3: 'someIndex',
            4: 'findIndex'
        }
    },
    {
        question: 'Как получить ссылку на прототип конкретного объекта (someObject)?',
        options: {
            0: 'getPrototype(someObject)',
            1: 'someObject.__proto__',
            2: 'someObject.instanceOf()',
            3: 'someObject.prototype',
            4: 'document.getProtoOf(someObj)'
        }
    },
    {
        question: `В чем отличие между DOM Node и DOM Element?`,
        options: {
            0: 'в Node могут хранится только комментарии',
            1: 'DOM Node - это конструкция для работы на сервере, а DOM Element для работы в браузере',
            2: 'DOM Element - это дочерний класс DOM Node',
            3: 'они никак не связаны'
        }
    },
    {
        question: `Какой HTTP-метод используется для обноления существующих данных на сервере?`,
        options: {
            0: 'PUT',
            1: 'UPDATE',
            2: 'PUSH',
            3: 'POST',
            4: 'HEAD'
        }
    }
];