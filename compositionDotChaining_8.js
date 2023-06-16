// composition is dot chaining

const doStuff = str =>
    str
        .toLowerCase()
        .split(' ')
        .map(c => c.trim())
        .reverse()
        .filter(x => x.length > 3)
        .join('');

const doStuffCompose = _.compose(
    join(''),
    _.filter(x => x.length > 3),
    reverse,
    _.map(trim),
    split(' '),
    toLowerCase
)
// these two are equivalent