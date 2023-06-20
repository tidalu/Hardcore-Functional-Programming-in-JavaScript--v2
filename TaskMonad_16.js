import pkg  from 'types';
const { Task } = pkg;
// import {compose} from 'ramda'

// const Box = f => 
// ({
//     map: g => Box(compose(f, g)),
//     fold: f
// })

// console.log(Box(() => 2).map(two => two + 1).fold())

// Task.of(2).map(two => two + 1)  // could not solve the problem f u run u will see
    // .fork(
    //     error => console.error('Task error: ', error),
    //     result => console.log("Task result: ", result)
    // )

const t1 = Task((rej, res) => res(2))
                                    .map(two = two + 1)
                                    .map(three => three * 2)
t1.fork(console.error, console.log)


