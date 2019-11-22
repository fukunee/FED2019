/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length)return false;
    let tmp={};
    for(let i=0;i<s.length;i++){
        tmp[s[i]]?tmp[s[i]]++:tmp[s[i]]=1;
    }
    for(let i=0;i<t.length;i++){
        if(!tmp[t[i]])return false;
        tmp[t[i]]--;
        if(tmp[t[i]]<0)return false;
    }
    return true;
};
console.log(isAnagram("anagram","nagaram"))