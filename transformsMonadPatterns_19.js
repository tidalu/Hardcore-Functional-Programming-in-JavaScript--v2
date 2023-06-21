import fs from 'fs';
import pkg from 'types';
const { Task, Either, Id } = pkg;
const { Right, Left, fromNullable } = pkg;
import pkp from 'immutable-ext';
const { List, Map } = pkp;


// const httpget = (path, params) =>
//     Task.of(`${path}: result `)

// const getUser = x => httpget('/user', { id: x })
// const getTimeLine = x => httpget(`timeLine/${x}`, {})
// const getAds = () => httpget('/ads', {})
// // console.log(Promise.all([getUser, getTimeLine, getAds]))


// List([getUser, getTimeLine, getAds])
//     .traverse(Task.of, f => f())
//     .fork(console.log, x=> console.log(x.toJS()))

const greaterThan5 = x => 
    x.length > 5 ? Right(x) : Left('not greater than 5')

const looksLikeEmail = x=> 
    x.math(/@/ig) ? Right(x) : Left('not an email')

const email = "hhshhs@gmail.com"
const res = [greaterThan5, looksLikeEmail].map( x => x(email))
console.log(res)
const reswithList  = List([greaterThan5, looksLikeEmail].traverse( Either.of(), x => x(email)))
console.log(res)

res.fold(console.log, console.log(x.toJS()))
reswithList.fold(console.log, console.log(x.toJS()))