var maximalSquare = function (matrix) {
    let con = function (m) {
        let op = [];
        for (let i = 0; i < m.length; i++) {
            for (let j = 0; j < m[0].length; j++) {
                if (i === m.length - 1 || j === m[0].length - 1) continue;
                if (!op[i]) op[i] = [];
                op[i][j] = ((m[i][j] === '1') && (m[i][j + 1] === '1') && (m[i + 1][j] === '1') && (m[i + 1][j + 1] === '1')) ? '1' : '0';
            }
        }
        return op;
    };
    let conN = 0;
    while (1) {
        if (matrix.every(v => {
            return v.every(v2 => {
                return v2 === '0';
            })
        })) break;
        matrix = con(matrix);
        conN++;
    }
    return conN * conN;
};
console.log(maximalSquare([['1', '0', '1', '0', '0'], ['1', '0,', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]));