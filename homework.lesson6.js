let arrLength;
let usersArray = [10, 99, -5, 3];

do {
    arrLength = requestNumber('Set array length (at least 3): ');
} while(arrLength <= 3);

for (let i = 0; i < arrLength; i++) {
    usersArray.push(requestNumber('Insert a number: '));
}

usersArray = sortArray(usersArray);
showArray(usersArray);

function showArray(arr) {
    const len = arr.length;
    for (let i = 0; i < len; i++) {
        console.log(`${i + 1}. ${arr[i]}`);
    }
}

function sortArray(arr) {
    const len = arr.length;
    for(let i = 0; i < len; i++) {
        for(let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const swap = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    return arr;
}

function requestNumber(message) {
    let result;
    do {
        result = +prompt(message);
    } while (result != result);
    return result;
}