var reverseVowels = function (s) {
    let tmp = [];
    let op = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'A' || s[i] === 'I' || s[i] === 'U' || s[i] === 'E' || s[i] === 'O' || s[i] === 'a' || s[i] === 'i' || s[i] === 'u' || s[i] === 'e' || s[i] === 'o') {
            tmp.push(s[i]);
            s[i] = '0';
        } else {
            op[i] = s[i];
        }
    }
    for (let i = s.length - 1; i >= 0; i--) {
        if (!op[i]) {
            op[i] = tmp.shift();
        }
    }
    return op.join('');
};
console.log(reverseVowels("leetcode"))