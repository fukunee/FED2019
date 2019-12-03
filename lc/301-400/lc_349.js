/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let tmp={};
    let op=[];
    for(let i=0;i<nums1.length;i++){
        tmp[nums1[i]]=true;
    }
    for(let i=0;i<nums2.length;i++){
        tmp[nums2[i]]?op.push(nums2[i]):null;
        tmp[nums2[i]]=false;
    }
    return op;
};
console.log(intersection([1,2,2,1],[2,2]));