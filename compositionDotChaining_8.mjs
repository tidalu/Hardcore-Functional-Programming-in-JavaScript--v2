import * as R from 'ramda';

// Composition is dot chaining
const doStuff = str =>
    str
        .toLowerCase()
        .split(' ')
        .map(c => c.trim())
        .reverse()
        .filter(x => x.length > 3)
        .join('');

const doStuffCompose = R.compose(
    R.join(''),
    R.filter(x => x.length > 3),
    R.reverse,
    R.map(R.trim),
    R.split(' '),
    R.toLowerCase
);
// These two are equivalent

const result = doStuff('Hello World'); // Direct function invocation
const composedResult = doStuffCompose('Hello World'); // Composition invocation

console.log(result); // Output: "dlrow"
console.log(composedResult); // Output: "dlrow"
