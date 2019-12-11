/** * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let m={};
    for(let i=0;i<magazine.length;i++){
        m[magazine[i]]?m[magazine[i]]++:m[magazine[i]]=1;
    }
    for(let i=0;i<ransomNote.length;i++){
        if(m[ransomNote[i]]){
            m[ransomNote[i]]--;
        }else{
            return false;
        }
    }
    return true;
};
console.log(canConstruct("aa","aab"));