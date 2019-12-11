/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let tmp = {};
    let op = [];
    for (let i = 0; i < nums1.length; i++) {
        tmp[nums1[i]] ? tmp[nums1[i]]++ : tmp[nums1[i]] = 1;
    }
    for (let i = 0; i < nums2.length; i++) {
        if (tmp[nums2[i]]) {
            op.push(nums2[i]);
            tmp[nums2[i]]--;
        }
    }
    return op;
};
console.log(intersect([1, 2, 2, 1], [2, 2]));