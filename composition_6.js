const { curry, compose } = require('ramda')

const add = (x, y) => x + y

const toUpper = str => str.toUpperCase();
const exclaim = str => str + '!';
const first = xs => xs[0];
const concat = curry((y, x) => x + y);

console.log(add); // it is just a function

//composition

// const compose = (f, g) => x => f(g(x));

// const shout = compose(first, compose(toUpper, exclaim)); // it is what we wrote compose function we will use from ramda
const shout = compose( toUpper, exclaim, first);

const log = curry((tag, z) => (console.log(tag, z), z));

const loudFirst = compose(toUpper, first);
const shout1 = compose(concat('!'),log("Here:"),  loudFirst, log(":again:"));
console.log(shout("tears")); 
console.log(shout1("wwwkopks")); 