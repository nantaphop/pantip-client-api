const fetch = require('node-fetch')
const cheerio = require('cheerio')

const ENDPOINT = 'https://pantip.com/'

function get(path){
    return fetch(`${ENDPOINT}/${path}`)
	.then(res => res.json())
}

async function document(path){
    let resp = await fetch(`${ENDPOINT}/${path}`)
    return cheerio.load(await resp.text())
}

module.exports = {
    document,
    get,
}