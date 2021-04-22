function factorial(source) {
    let result = source;
    if (source == 0n || source == 1n)
        return 1n;
    while (source > 1n) {
        source--;
        result *= source;
    }
    return result;
}

console.log(factorial(200n));