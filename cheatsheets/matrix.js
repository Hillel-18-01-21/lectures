function solveMatrix(source, word) {
    const n = Math.sqrt(source.length);

    if (!Number.isInteger(n)) {
        throw new Error('Invalid source value');
    }
    const matrix = new Array(n)
        .fill([])
        .map((_, i) => source
            .slice(n * i, n * i + n)
            .split('')
        );
    console.log(matrix);

    return new Array(word.length)
        .fill([])
        .map((_, letterIndex) => {
            let res = [];
            matrix.some((e, i) => {
                const index = e.findIndex(w => w === word[letterIndex]);
                if (index != -1) {
                    res = [i, index];
                }
                return index != -1;
            });
            return res;
        });
}

try {
    console.log(solveMatrix('QLGNAEKIRLRNGEAE', 'KING'));
} catch (e) {
    console.log(e);
}