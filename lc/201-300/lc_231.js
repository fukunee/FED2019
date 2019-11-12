var isPowerOfTwo = function (n) {
    return n.toString(2).split('').reduce((a, b) => a + parseInt(b), 0) === 1;
};
console.log(isPowerOfTwo(218));