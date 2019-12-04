/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
    let i = 3, j = 1;
    while (i <= num) {
        if (i === num) return true;
        j += i;
        i += 2;
    }
    return false;
};

console.log(isPerfectSquare(125));