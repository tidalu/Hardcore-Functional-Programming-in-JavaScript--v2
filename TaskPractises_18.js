// SETUP
// =========================
const posts = { 1: { title: "First" }, 2: { title: "Second" } }

const comments = { First: [{ id: 1, body: "Brilliant!" }], Second: [{ id: 2, body: "Unforgivable" }] }

const getPost = id =>
    new Task((rej, res) =>
        setTimeout(() => posts[id] ? res(posts[id]) : rej('not found'), 200))

const getComments = post =>
    new Task((rej, res) =>
        setTimeout(() => res(comments[post.title]), 200))



// Exercise: Task
// Goal: Refactor each example using Task
// Bonus points: no curly braces







// Ex1: Use the result of getPost() and upperCase the title. Posts and comments are defined above and look like {title: String} and {id: Int, body: String} respectively.
// =========================
const postTitle = id => // uppercase the title of the result of getPost()
    getPost(id).map(post => post.title.toUpperCase())


QUnit.test("Ex1: postTitle", assert => {
    const done = assert.async();
    postTitle(1)
        .fork(console.error, t => {
            assert.deepEqual(t, 'FIRST')
            done()
        })
})


// Ex2: pass in the post to getComments(), defined above, then assign the returned comments to the post
// =========================
const commentsForPost = id =>
    getPost(id)
        .chain(post =>
            getComments(post)
                .map(comments => Object.assign({ comments }, post))
        )

QUnit.test("Ex2: commentsForPost", assert => {
    const done = assert.async();
    commentsForPost(2)
        .fork(console.error, t => {
            assert.deepEqual(t.title, "Second")
            assert.deepEqual(t.comments, comments["Second"])
            done()
        })

})


// Ex3: Wrap location.href in a Task to make it "pure"
// =========================
const getHref =
    new Task((rej, res) => res(location.href))  // wrap me in Task


QUnit.test("Ex3: getHref", assert => {
    const done = assert.async();
    getHref
        .fork(console.error, t => {
            assert.equal(true, !!t.match("cdpn.io"))
            done()
        })

})


// i have  a problem with importing a package so go this link to run: https://codepen.io/Tidalu/pen/WNYGOLq?editors=0010