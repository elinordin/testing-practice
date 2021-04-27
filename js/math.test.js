const { expect } = require('@jest/globals');
const {sum, subtract} = require('./math.js');

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('subtracts 3 - 2 to equal 1', () => {
    expect(subtract(3,2)).toBe(1)
})