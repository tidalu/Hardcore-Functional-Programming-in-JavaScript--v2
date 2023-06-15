var xs = [1, 2, 3, 4, 5];

// not  a function

xs.splice(0, 3); // [1, 2, 3]
xs.splice(0, 3); // [4, 5]
xs.splice(0, 3); // []

// a function
xs.slice(0, 3); // [1, 2, 3]
xs.slice(0, 3); // [1, 2, 3]
xs.slice(0, 3); // [1, 2, 3]


// not a function  
const toSlug = (title) => {
    const urlFriendly = title.replace(/\W+/ig, '-')
    if (urlFriendly.length < 1) {
        throw new Error('is bad')
    }
    return urlFriendly
}


// function

const toSlugPure = (title) => {
    return new Promise((res, rej) => {
        const urlFriendly = title.replace(/\W+/ig, '-')

        if (urlFriendly.length < 1) {
            rej(new Error('is bad'))
        }
        return res(urlFriendly)
    })
}

// not a function
const signUp = (attrs) => {
    let user = saveUser(attrs)
    welcomeUser(user);
}

// function

const signUpPure = (attrs) => {
    return () => {
        let user = saverUser(attrs)
        welcomeUser(user);
    }
}

const birthday = user => {
    user.age += 1;
    return user; // not a function, we are mutating user's age everytime
}

const shout = word => {
    word.toUpperCase().concat("!"); // it is a function
}


const headerText = header_selector => {
    querySelector(header_selector).text();  // it is not  a function
}

const parseQuery = () => {
    location.search.substring(1).split('&').map(x => x.split('='));// impure
}

var parseQueryString = function (queryString) {
    var params = {}, queries, temp, i, l;

    queries = queryString.split("&");

    for (i = 0, l = queries.length; i < l; i++) {
        temp = queries[i].split('=');
        params[temp[0]] = temp[1];
    }
 // this is a function
    return params;
};

