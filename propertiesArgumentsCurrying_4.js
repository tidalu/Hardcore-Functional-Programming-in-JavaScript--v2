const {curry} = require('ramda')
// properties

// associative
    // add(add(a, y), z) == add(a, add(y, z));

// commutative
    // add(x, y) == add(y, x)

// identity
    // add(x, 0) == x

// distributive
// add(multiply(x, y), multiply(x, z)) == multiply(x, add(y, z))


function add  (a, b) {
    return a + b
}
function multiply  (a, b) {
    return a * b
}

//


add([1, 2]) == add(1, 2);


const toPair = f => 
    ([x, y]) => f(x, y);

const fromPair = f => 
    (x, y) => f([x, y]);

const flip = f => 
    (y, x) => f(x, y);

    // const curry = f =>x => y => f(x, y)
    const unCurry = f =>(x, y)  => f(x)(y);
    const modulo = curry((x,y) => y % x);

    
    const result=   toPair(add)([1, 2]);
    const result1=  fromPair(toPair(add))(1, 2);
    const result2 = flip(add)(1, 3);

    const isOdd = modulo(2); // (2, y) => 2 % y
    const confirmOdd = isOdd(3);

    console.log(confirmOdd);

    const curriedAdd = curry(add);
    const increment = curriedAdd(1);
    const result3 = increment(2);

console.log(result);
console.log(result1);
console.log(result2);
console.log(result3);


const filter = curry((f, xs) => xs.filter(f));

const getOdds = filter(isOdd);
const oddResult = getOdds([1, 2, 3, 4, 5, 6, 7]);
console.log(oddResult);

const replace = curry((regex, replacement, str) => str.replace(regex, replacement));

const replaceVowels = replace(/[AEUIO]/ig, '!'
);
const replaceRes = replaceVowels("Hey I have words");
console.log(replaceRes);