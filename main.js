const cheerio = require('cheerio');
const axios = require('axios');
function getOrder() {
axios.get('https://freelance.habr.com/tasks?categories=development').then(data => {
    const $ = cheerio.load(data.data)
    let res = ''
    $('#tasks_list > li:nth-child(1) > article > div > header > div.task__title > a').each((i, elem) => {
        res += `${$(elem).text()}\n`
    })
    console.log(res)
})
}
setInterval(getOrder , 1000*60)