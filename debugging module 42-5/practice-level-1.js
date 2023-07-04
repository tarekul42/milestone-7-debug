localStorage.clear();
localStorage.setItem('name', 'Sakib Khan')
localStorage.setItem('age', '40')
const a = localStorage.getItem('name')
const b = localStorage.getItem('age')
localStorage.removeItem('name')
localStorage.removeItem('age')
// console.log(a, b);

// set an object as local storage item.

const items = {
    firstName:'Abraham',
    lastName:'Linkon'
}
const stringifyItems = JSON.stringify(items);
localStorage.setItem('items', stringifyItems)