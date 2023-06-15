// properties


// associative
    add(add(a, y), z) == add(a, add(y, z));

// commutative
    add(x, y) == add(y, x)

// identity
    add(x, 0) == x

// distributive
add(multiply(x, y), multiply(x, z)) == multiply(x, add(y, z))


function add  (a, b) {
    return a + b
}
function multiply  (a, b) {
    return a * b
}