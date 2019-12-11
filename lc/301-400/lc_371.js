/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function (a, b) {
    return !(a & b) ? a ^ b : getSum(a ^ b, (a & b) << 1);
};
console.log(getSum(100, 202));
