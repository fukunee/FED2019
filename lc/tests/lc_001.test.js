const elemAdd = require('../solutions/lc_001');

test('test1.简单测试', () => {
    expect(elemAdd([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});