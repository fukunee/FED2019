var longestPalindrome = function (str) {
    let _m = 1;
    let output = str.length > 0 ? str[0] : '';
    const isPalindrome = function (s) {
        let rs = s.split('').reverse().join('');
        return rs === s;
    };
    const iter = function (s) {
        if (s.length <= _m) {
            return
        }
        for (let i = 1; i < s.length; i++) {
            if (s[i] === s[0]) {
                if (isPalindrome(s.substring(0, i + 1))) {
                    if (_m < i + 1) {
                        output = s.substring(0, i + 1);
                        _m = i;
                    }
                }
            }
        }
        return iter(s.substring(1));
    };

    iter(str);
    return output;
};

console.log("op:" + longestPalindrome("abbbbbc"));
module.exports = longestPalindrome;