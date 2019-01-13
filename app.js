const axios = require('axios')

const baseUrl = 'https://api.github.com'
const since = '2018-10-15T00:00:00Z'
const until = '2019-01-23T03:00:00Z'

const repo = 'super-fishz/til'

function getCommitsByRepo(repo) {
    getCommits(`${baseUrl}/repos/${repo}/commits?since=${since}&until=${until}`)
}

function getCommits(url) {
    // get first page
    // then parse headers link (like this)
        // <https://api.github.com/repositories/125554518/commits?since=2018-10-15T00%3A00%3A00Z&until=2019-01-23T03%3A00%3A00Z&page=2>; rel="next", <https://api.github.com/repositories/125554518/commits?since=2018-10-15T00%3A00%3A00Z&until=2019-01-23T03%3A00%3A00Z&page=3>; rel="last"
    // spread request
    return axios({
        method: 'get',
        url: `${baseUrl}/repos/${repo}/commits?since=${since}&until=${until}`
    }).then(function(resp) {
        console.log(resp.headers)
        // console.log(resp.data)
        console.log(resp.data.length)
        return resp
    })
}

function parseCommit(commit) {
    // parse 
    // commit.commit.committer.date
    // commit.commit.message
}

function getContent(commit) {
    // parse 
    // https://developer.github.com/v3/repos/contents/#get-contents
}

// https://developer.mozilla.org/ko/docs/Web/API/WindowBase64/Base64_encoding_and_decoding
function b64DecodeUnicode(str) {
    // Going backwards: from bytestream, to percent-encoding, to original string.
    return decodeURIComponent(atob(str).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
}
