const card=document.querySelector(".card");
const btn=document.getElementById("btn");

document.body.style.cssText=`
justify-content:center;
text-align:center;
margin-top:150px;
`
card.style.cssText=`
width:200px;
height:200px;
border:1px solid black;
margin-left:660px;
`
const colorrgb = document.createElement('h3')
colorrgb.textContent =""

function generete() {
    let son1 = Math.trunc(Math.random() * 100)
    let son2 = Math.trunc(Math.random() * 100)
    let son3 = Math.trunc(Math.random() * 100)
    card.style.background = `rgb(${son1}, ${son2}, ${son3})`
    colorrgb.textContent = `${son1}, ${son2}, ${son3}`
    btn.append(colorrgb)
}


btn.addEventListener('click', () => {    
    generete()
    
})

