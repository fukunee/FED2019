/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let start = Math.pow(2, Math.floor((
        num.toString(2).length - 1) / 2));
    for (let i = start; i < Infinity; i++) {
        if (i * i > num) return false;
        if (i * i === num) return true;
    }
};

console.log(isPerfectSquare(9));