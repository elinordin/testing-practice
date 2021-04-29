const axios = require('axios');

const functions = {
    sum: (a,b) => a + b,
    subtract: (a,b) => a - b,
    cloneArray: (array) => [...array],
    isNull: () => null,
    isUndefined: () => undefined,
    createUser: (name, userName) => {
        const user = {
            name: name,
            userName: userName
        }
        return user
    },
    fetchUser: () => axios.get('https://jsonplaceholder.typicode.com/users/1')
        .then(response => response.data)
        .catch(err => err)
    ,
    reverseString: (str) => str.toLowerCase().split('').reverse().join(''),
    isTrue: () => true,    
}

module.exports = functions