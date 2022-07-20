//ПАРСЕР 
/*
const cheerio = require('cheerio');
const axios = require('axios');
function getOrder() {
axios.get('https://vk.com/idvorona123').then(data => {
    const $ = cheerio.load(data.data)
    let res = ''
    $('#page_rows_audios > div.audio_row.audio_row_with_cover._audio_row._audio_row_461090913_456245787.audio_can_add.audio_lpb.audio_has_thumb.audio_explicit.audio_row2.audio_has_track_page.audio_row_playable > div > div.audio_row__inner > div.audio_row__performer_title > div.audio_row__performers > a:nth-child(1)').each((i, elem) => {
        res += `${$(elem).text()}\n`
    })
   return res 
})
}
console.log(getOrder())
*/

//
//ПАРСЕР ДЛЯ ТРЕКОВ
//

/*
let tracks = []
let a = document.body.querySelectorAll('a.audio_row__title_inner._audio_row__title_inner')
for(let i = 0; i<a.length;i++){
    tracks.push(a[i].innerText);
}
let res = tracks.map(item => [item]);



let performers =[]
let b = document.body.querySelectorAll('div.audio_row__performers > a:nth-child(1)')
for(let i = 0; i<b.length;i++){
    performers.push(b[i].innerText);
}


res.forEach(function(elem){
    for(let i = 0; i<performers.length; i++){
        elem.push(performers[i])
        performers.shift()
        break
    }
    
})

console.log(res)
*/

//
//ЗАДАЧА С CODEWARS
//

function wave(str){
    let mus = str.split('')
    let res = []
    res.push([].join.call(mus.map(item => item.toUpperCase()),"")) 
    return res
  }
  console.log(wave('hellow'))