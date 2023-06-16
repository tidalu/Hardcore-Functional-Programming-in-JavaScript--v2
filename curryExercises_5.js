const { curry } = require('ramda')

const add = (x, y) => x + y

console.log(add); // it is just a function


// Setup
//==============
const _ = R;
const split = _.curry((delimiter, string) => string.split(delimiter))


// Exercise 1
//==============

// const words =  split(" ");
//  function(str) {
//   return split(' ', str);
// }
const words = (str) => split(" ", str);
QUnit.test("Ex1: split", assert => {
    assert.deepEqual(words("Jingle bells Batman smells"), ['Jingle', 'bells', 'Batman', 'smells'])
})


// Exercise 1a
//==============
//use map to make a new words fn that not only works on 1 string, but on an array of strings.

const sentences = _.map(words);

QUnit.test("Ex1a: map/split", assert => {
    assert.deepEqual(sentences(["Jingle bells Batman smells", "Robin laid an egg"]), [['Jingle', 'bells', 'Batman', 'smells'], ['Robin', 'laid', 'an', 'egg']]);
})


// Exercise 2
//==============
const filterQs = _.filter(_.test(/q/ig));


QUnit.test("Ex2: filter", assert => {
    assert.deepEqual(filterQs(['quick', 'camels', 'quarry', 'over', 'quails']), ['quick', 'quarry', 'quails']);
})


// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max

const _keepHighest = (x, y) => x >= y ? x : y // <- leave be

// TODO: rewrite max in its "simplest" form
const max = _.reduce(_keepHighest, 0);


QUnit.test("Ex3: max", assert => {
    assert.equal(max([323, 523, 554, 123, 5234]), 5234);
})


// Bonus 1:
// ============
// wrap array's built in slice to be functional and curried like ramda fn's.
// //[1,2,3].slice(0, 2)

const slice = _.curry((a, b, c) => c.slice(a, b));

QUnit.test("Bonus 1", assert => {
    assert.deepEqual(slice(1)(3)(['a', 'b', 'c']), ['b', 'c']);
})

// Bonus 2:
// ============
// use slice to define a function take() that takes n elements from an array. make it curried
// const take = _.curry((a, arr) => arr.slice(0, a))  // quite long qway it is 
// const take = n => slice(0, n)
const take = slice(0)

QUnit.test("Bonus 2", assert => {
    assert.deepEqual(take(2)(['a', 'b', 'c']), ['a', 'b']);
})


// if there anyv typos go to this link, cuz i copied from codePen, i solved there
// https://codepen.io/Tidalu/pen/gOQrYBK