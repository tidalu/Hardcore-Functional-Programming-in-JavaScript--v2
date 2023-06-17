// holo
// Definitions


import fs from 'fs'
// ====================
const Right = x =>
({
    chain: f => f(x),
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: `Right(${x})`
})

const Left = x =>
({
    chain: f => Left(x),
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: `Left(${x})`


})

const fromNullable = x =>
    x != null ? Right(x) : Left(null)

const tryCatch = f => {
    try {
        return Right(f())
    }catch(e){
        return Left(e)
    }
}

const getPort_ = () => {
    try {
        const str = fs.readFileSync('config.json')
        const config = JSON.parse(str)
        return config.port
    } catch(e) {
        return 54000
    }
}
const readFileSync = path => 
    tryCatch(() => fs.readFileSync(path))
const getPort__ = () => 
    readFileSync('config.json')
    .map( content => JSON.parse(content))
    .map(config => config.port)
    .fold(() => 8080, x => x)

    const parseJSON = contents => 
        tryCatch(() => JSON.parse(contents))
    
    // flattering either monad with chain
    const getPort = () => 
        readFileSync('config.json')
        .chain( content => parseJSON(content))
        .map(config => config.port)
        .fold(() => 8080, x => x)

const res = getPort()
console.log(res)