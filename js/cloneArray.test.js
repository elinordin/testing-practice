const {cloneArray} = require('./cloneArray.js');

test('array is not the same array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).not.toBe(array);
});

test('array is a copy of the array sent in as an argument', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array);
});