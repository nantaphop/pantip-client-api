import fetch from 'node-fetch'
import cheerio from 'cheerio'
import qs from 'qs'

const ENDPOINT = 'https://pantip.com/'

function getHeaders(){
    return {
        "origin": 'http://pantip.com',
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest",
        "Accept": "application/json, text/javascript, */*; q=0.01",
        "Accept-Encoding": "gzip,deflate,sdch",
        "User-Agent": "Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/36.0.1985.125 Safari/537.36",
        "Referer": "http://pantip.com/login?redirect=Lw==",
        "Accept-Language": "en-US,en;q=0.8,th;q=0.6",
    }
}

function get(path){
    return fetch(`${ENDPOINT}${path}`)
	.then(res => res.json())
}

function post(path, body){
    return fetch(`${ENDPOINT}${path}`, {
        method: 'POST',
        headers: getHeaders(),
        body: qs.stringify(body)
    })
	.then(res => res.json())
}

async function document(path){
    let resp = await fetch(`${ENDPOINT}/${path}`)
    return cheerio.load(await resp.text())
}

module.exports = {
    document,
    get,
    post
}