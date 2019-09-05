const elemAdd = require('../solutions/lc_001');

test('lc_001 unit test', () => {
    expect(elemAdd([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
});