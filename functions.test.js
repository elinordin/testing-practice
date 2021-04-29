const { expect } = require('@jest/globals');
const functions = require('./functions.js');

//--------------------------- SUM ---------------------------
describe('sum  ', () => {
    test('1 + 2 to equal 3 - toBe (number)', () => {
        expect(functions.sum(1, 2)).toBe(3);
    });
    
    test('1 + 2 to not equal 4 - not.toBe (number)', () => {
        expect(functions.sum(1, 2)).not.toBe(4);
    });
    
    test('two strings together - toBe (string)', () => {
        expect(functions.sum("Hello ", "there")).toBe("Hello there");
    });
    
    test('5 + 5 to be less than 15 - toBeLessThan (number)', () => {
        expect(functions.sum(5, 5)).toBeLessThan(15);
    });
    
    test('5 + 5 to be less than or equal to 10 - toBeLessThanOrEqual (number)', () => {
        expect(functions.sum(5, 5)).toBeLessThanOrEqual(10);
    });
    
    test('6 + 6 to be greater than 10 - toBeGreaterThan (number)', () => {
        expect(functions.sum(6, 6)).toBeGreaterThan(10);
    });
})


//--------------------------- SUBTRACT ---------------------------
describe('subtract  ', () => {
    test('3 - 2 to be 1 - toBe (number)', () => {
        expect(functions.subtract(3, 2)).toBe(1)
    })
    
    test('two strings to be falsy - toBeFalsy (string)', () => {
        expect(functions.subtract("Hello ", "there")).toBeFalsy()
    })
})



//--------------------------- CLONE ARRAY ---------------------------
//When handeling arrays or objects we need to use toEqual instead of toBe since it's referring to another place in memory
describe('cloneArray  ', () => {
    test('to not return the same array - not.toBe (array)', () => {
        const array = [1, 2, 3]
        expect(functions.cloneArray(array)).not.toBe(array);
    });
    
    test('makes a copy of the array sent in as an argument - toEqual (array)', () => {
        const array = [1, 2, 3]
        expect(functions.cloneArray(array)).toEqual(array);
    });
})


//--------------------------- IS NULL ---------------------------
describe('isNull ', () => {
    test('to return null - toBeNull', () => {
        expect(functions.isNull()).toBeNull();
    });
})


//--------------------------- IS UNDEFINED ---------------------------
describe('isUndefined ', () => {
    test('to return undefined - toBeUndefined', () => {
        expect(functions.isUndefined()).toBeUndefined();
    });
})


//--------------------------- CREATE USER ---------------------------
describe('createUser', () => {
    test('to get a user object with inputed name and username - toEqual (object)', () => {
        expect(functions.createUser('Elin Nordin', 'elinordin')).toEqual({name: 'Elin Nordin', userName: 'elinordin'});
    });
})


//--------------------------- REGEX ---------------------------
describe('toMatch (RegEx) - ', () => {
    test('there is no I in team', () => {
        expect('team').not.toMatch(/I/);
    });
})


//--------------------------- TO CONTAIN ---------------------------
describe('toContain (array) - ', () => {
    test('admin should be in usernames', () => {
        const usernames = ['elin', 'adam', 'karen', 'admin']
        expect(usernames).toContain('admin');
    });
})


//--------------------------- ASYNC ---------------------------
//expect.assertions is useful when testing asynchronous code, in order to make sure that assertions in a callback actually got called. We use it in combination with return
describe('asynchronous fetchUser ', () => {
    test('username should be Bret - toEqual (promise)', () => {
        expect.assertions(1)
        return functions.fetchUser().then(data => {
            expect(data.username).toEqual('Bret')
        })
    });
    
    test('name should be Leanne Graham - toEqual (async await)', async () => {
        expect.assertions(1)
        const data = await functions.fetchUser()
        expect(data.name).toEqual('Leanne Graham')
    });
})


//--------------------------- REVERSE STRING ---------------------------
describe('reverseString ', () => {
    test('exists - toBeDefined (function)', () => {
        expect(functions.reverseString).toBeDefined()
    })
    
    test('is a function - toEqual (typeof)', () => {
        expect(typeof functions.reverseString).toEqual('function')
    })
    
    test('hello to equal olleh - toEqual (string)', () => {
        expect(functions.reverseString('hello')).toBe('olleh')
    })
    
    test('Hello to equal olleh (case insensitive) - toEqual (string)', () => {
        expect(functions.reverseString('Hello')).toBe('olleh')
    })
})


//--------------------------- TRUTHY ---------------------------
describe('isTrue', () => {
    test('returns true - toBeTruthy (boolean)', () => {
        expect(functions.isTrue).toBeTruthy()
    })
})
