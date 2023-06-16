const doStuff = _.compose(
    join(''),
    _.filter(x => x.length > 3),
    reverse,
    _.map(trim),
    split(' '),
    toLowerCase
)

// it is accomplished from down to up cuz f(g(d(t(y(x)))))
// ig we break the chain , this is teh end of teh program
// life if it goes till the mid and teh output cannot be an arg for the next function it breaks


const doStuffLong = str => { // this is the sane function without compose
    const lower = str.toLowerCase()
    const words = lower.split(' ')

    words.reverse()

    for (let i in words) {
        words[i] = words[i].trim()
    }

    let keepers = []

    for (let i in words) {
        if (words[i].length > 3) {
            keepers.push(words[i])
        }
    }

    return keepers.join('')
}
