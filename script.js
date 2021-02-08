// Loop - циклы

let arr = [
    35,
    'my string',
    'object object'
];

arr[0] = 42;

const length = arr.length;
for (let i = 0; i < 5; i = i + 1) {
    arr[length + i] = `new element ${i}`;
}

for(let i = 0; i < arr.length; i = i + 1) {
    console.log(arr[i]);
}