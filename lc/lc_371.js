var getSum = function(a, b) {
    let x = a ^ b;
    let y = a & b;

    while (y != 0) {
        y = y << 1;
        let temp = x;
        x = x ^ y;
        y = temp & y;
    }

    return x;
};