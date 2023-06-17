const Box = x =>
({
    map: f => Box(f(x)),
    chain: f => f(x),
    fold: f => f(x),
    toString: () => `Box(${x})`
})//https://codepen.io/accounts/signup

// Exercise: Box
// Goal: Refactor each example using Box
// Keep these tests passing!
// Bonus points: no curly braces




// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat = str =>
    Box(str)
        .map(str => str.replace(/\$/, ''))
        .fold(s => parseFloat(s))


QUnit.test("Ex1: moneyToFloat", assert => {
    assert.equal(String(moneyToFloat('$5.00')), 5)
})





// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat = str => {
    return Box(str)
        .map(str => str.replace(/\%/, ''))
        .map(s => parseFloat(s))
        .fold(float => float * 0.0100)
}


QUnit.test("Ex2: percentToFloat", assert => {
    assert.equal(String(percentToFloat('20%')), 0.2)
})





// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const applyDiscount_ = (price, discount) => {
    const cents = moneyToFloat(price)
    const savings = percentToFloat(discount)
    return cents - (cents * savings)
}

const applyDiscount = (price, discount) => {
    return Box(moneyToFloat(price))
        .chain(cents =>
            Box(percentToFloat(discount))
                .map(savings => cents - (cents * savings)) // Box(Box(x))
        ).fold(x => x)
}


QUnit.test("Ex3: Apply discount", assert => {
    assert.equal(String(applyDiscount('$5.00', '20%')), 4)
})
// go this link if needed: https://codepen.io/Tidalu/pen/RwqaZRb?editors=0010