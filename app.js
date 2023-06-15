// hardcore functional programming    

// input : domain
// Output : range


// function
// 1. is the function total -- means for every input there is a corresponding output
const inc = i => {
    if( i === 0) return 1
    if( i === 1) return 2
    if( i === 2) return 3

} // this can be a total just in an interval but for any input it is not Total function

const incTotal = i => {
    return i+1
} // that is total


// 2. deterministic - always recieve the same output for a given input - reliability same input - same output
const timeSince = comment => {
    const now = new Date() // it is not proper for deterministic cuz everytime if we call the function will  return a new different time, so it will be different for an input
    const then = new Date(comment.createdAt)
    return getDifference(now, then);
}

const getDifference = (now, then) => {
    const days = Math.abs(now.getDate() - then.getDate());
    const hours = Math.abs(now.getHours() - then.getHours());
    return (days, hours);
}

// 3. no side effect .. even logging 

const add = (a, x) => {
    console.log(`Adding ${x} ${y}`);
    return  x+a;
} // it is logging so it is not a pure function

const addPure = (x, y) => {
    return {result: x + y, log:`Adding ${x} ${y}`}; // it is a pure function 
}

// 