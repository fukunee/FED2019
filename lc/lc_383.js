/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let tmp = {};
    for (let i = 0; i < magazine.length; i++) {
        tmp[magazine[i]] ? tmp[magazine[i]]++ : tmp[magazine[i]] = 1;
    }
    for (let i = 0; i < ransomNote.length; i++) {
        if (!tmp[ransomNote[i]]) {
            return false;
        } else {
            if (tmp[ransomNote[i]] > 0) {
                tmp[ransomNote[i]]--;
            } else {
                return false;
            }
        }
    }
    return true;
};
console.log(canConstruct('aa', 'ab'));