/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let tmp={};
    for(let i=0;i<s.length;i++){
        tmp[s[i]]!==undefined?tmp[s[i]]=Infinity:tmp[s[i]]=i;
    }
    let op=-1;
    for(let v in tmp){
        ((op<0)&&(tmp[v]!==Infinity))||(tmp[v]<op)?op=tmp[v]:null;
    }
    return op;
};

console.log(firstUniqChar("leetcode"));