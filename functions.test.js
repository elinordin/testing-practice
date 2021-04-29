const { expect } = require('@jest/globals');
const functions = require('./functions.js');

//--------------------------- SUM ---------------------------
test('adds 1 + 2 to equal 3', () => {
    expect(functions.sum(1, 2)).toBe(3);
});

test('adds two strings together to equal the strings added together', () => {
    expect(functions.sum("Hello ", "there")).toBe("Hello there");
});


//--------------------------- SUBTRACT ---------------------------
test('subtracts two strings to return NaN', () => {
    expect(functions.subtract("Hello ", "there")).toBe(NaN)
})


//--------------------------- CLONE ARRAY ---------------------------
test('array is not the same array', () => {
    const array = [1, 2, 3]
    expect(functions.cloneArray(array)).not.toBe(array);
});

test('array is a copy of the array sent in as an argument', () => {
    const array = [1, 2, 3]
    expect(functions.cloneArray(array)).toEqual(array);
});