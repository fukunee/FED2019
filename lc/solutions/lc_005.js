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

var longestPalindrome = function (s) {
    if (s.length < 2) return s;
    let len = s.length,
        maxLen = 0,
        left = 0,
        right = 0,
        start = 0;
    for (let i = 0; i < len;) {
        if (len - i <= maxLen / 2) break;
        left = i;
        right = i;
        while (right < len - 1 && s[right + 1] == s[right]) {
            ++right;
        }
        i = right + 1;
        while (right < len - 1 && left > 0 && s[right + 1] == s[left - 1]) {
            ++right;
            --left;
        }
        if (maxLen < right - left + 1) {
            maxLen = right - left + 1;
            start = left;
        }
    }
    return s.substring(start, start + maxLen);
};