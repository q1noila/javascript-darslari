const container = document.querySelector('.container')

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
