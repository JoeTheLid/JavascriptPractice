function colourflip(){
    
    let body = document.querySelector('html')
    let button = document.querySelector('#colourbutton')
    var randomColor = String('#'+(Math.floor(Math.random()*16777215).toString(16)));

    
    {body.style.backgroundColor = randomColor;
    button.value = randomColor
    return} 

}

function countreset()
{document.querySelector('#counter').innerHTML = '0'}

function countup()
{let count = document.querySelector('#counter').innerHTML
count++
document.querySelector('#counter').innerHTML = count}

function countdown()
{let count = document.querySelector('#counter').innerHTML
count--
document.querySelector('#counter').innerHTML = count}

function randavatar(){
    picsource = String('./images/avatar'+(Math.floor(Math.random()*3)+1)+'.png')
    document.querySelector('#avatar').src = picsource 
}

function newreview(){
let words = ['The', 'former', 'top', 'adviser', 'denied', 'leaking', 'text', 'messages', 'sent', 'between', 'Mr', 'Johnson', 'and', 'businessman', 'Sir', 'James', 'Dyson'];
let wordlen = words.length
let numWords = (Math.floor(Math.random()*(30)+10))
let review = Array([])
for (i=0 ; i<numWords; i++)
{let randWord = String(words[(Math.floor(Math.random()*wordlen))])
review.push(randWord)}
document.querySelector('#reviewtext').innerHTML = review.join(' ')
randavatar()
}
