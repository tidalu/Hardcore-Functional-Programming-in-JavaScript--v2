const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: `Box(${x})`
});

const first = xs => xs[0];

const halfFirstLargeNumber_ = xs => {
    const found = xs.filter(x => x >= 20)
    const answer = first(found) / 2
    return `The answer is ${answer}`
};
const halfFirstLargeNumber = xs => {
    return Box(xs)
        .map(xs => xs.filter(x => x >= 20))
        .map(found  => first(found) / 2)
        .fold( answer => `The answer is ${answer}`)
};

const res = halfFirstLargeNumber([1, 4, 50]);
console.log(res);