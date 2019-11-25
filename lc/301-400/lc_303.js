/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
    let sum = [];
    for (let i = 0; i < nums.length; i++) {
        sum[i] = (i !== 0 ? sum[i - 1] : 0) + nums[i];
    }
    this.sum = sum;
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return this.sum[j] - (i > 0 ? this.sum[i - 1] : 0);
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */
