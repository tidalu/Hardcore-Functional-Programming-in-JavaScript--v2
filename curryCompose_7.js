const _ = require('ramda');
const { curry, compose, prop, head, map } = _ ;

const url = t => `http://gdata.youtube.com/feeds/api/videos?q=${t}&alt=json`

const src = _.compose(_.prop('url'), _.head, _.prop('media$thumbnail'), _.prop('media$group'))

const srcs = _.compose(_.map(src), _.prop('entry'), _.prop('feed'))

const images = _.compose(_.map(imageTag), srcs)

const widget = _.compose(_.map(images), getJSON, url)



widget('cats').fork(log, setHtml(document.querySelector('#youtube')))

console.log(url("alfa"));