const container = document.querySelector('.container')
const btnbox = document.querySelector('.btnbox')
const b50=document.getElementById('b50')
const clipPath=document.getElementById('c2')

function flex() {
    container.style.display = 'flex'
}
function gap() {
    container.style.gap = '20px'
}
function justifyCenter() {
    container.style.justifyContent = 'center'
}
function justifySpaceArround() {
    container.style.justifyContent = 'space-around'
}
function between() {
    container.style.justifyContent = 'space-between'
}
function evenly() {
    container.style.justifyContent = 'space-evenly'
}
function alignCenter() {
    container.style.alignItems = 'center'
}
function fontSize() {
    container.style.fontSize = '20px'
}
function borderRadius() {
    container.style.borderRadius = '40px'
}
function fontSize() {
    container.style.fontSize = '20px'
}
function border_1() {
    b50.style.borderRadius = '50%'
    b50.style.width = '70px'
    b50.style.textAlign = 'center'
}
function clipPath() {
    container.style.clipPath = '50% 0, 100% 100%, 0 100%'
}
