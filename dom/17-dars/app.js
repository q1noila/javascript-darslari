const box=document.createElement('div')
document.body.appendChild(box)

const matn=document.createElement('p') //htmldagi p elementini yaratish
box.appendChild(matn) //boxni ichiga matnni biriktirish
matn.textContent='salom'
matn.className='matn'//class berish

box.setAttribute('id','box') // id berish
box.setAttribute('class','box') // class berish
box.removeAttribute('class') // class ni o`chirish
box.removeAttribute('id') //id ni o`chirish
console.log(box.getAttribute('id')) // id ni olish

const text=document.getElementById('text') // id orqali elementni olish
let txt=document.createTextNode('salom dom elementlari') //matn bo`shqa yo`l bilan qo`shish
text.append(txt)//appendChild ga o`xshash
const ul1=document.querySelector('.ul') 
// ul.prepend(text) //tepaga qo`shish
// ul.append(text)//pastga qo`shish

box.style.cssText=`
font-size: 30px;
`

const ul=document.querySelector('.ul')
let arr=ul.children
for (let i=0; i<arr.length; i++){
    if(i%2==0) arr[i].style.backgroundColor='red'
    else if(i%2!==0) arr[i].style.backgroundColor='blue'
}


const table=document.getElementById('table')
let arr1=table.children[0]
for(let i=0; i<arr1.children.length; i++){
    let tr=arr1.children[i]
    let td=tr.children
    for (let j=0; j<td.length; j++){
        td[j].addEventListener('click',()=>{
            td[j].classList.toggle('trStyle')
        })
    }
}
// =======================
const btn = document.getElementById('btn')
function generete() {
    let son1 = Math.trunc(Math.random() * 100)
    let son2 = Math.trunc(Math.random() * 100)
    let son3 = Math.trunc(Math.random() * 100)
    document.body.style.background = `rgb(${son1}, ${son2}, ${son3})`
    const colorrgb = document.createElement('h3')
    colorrgb.textContent = `${son1}, ${son2}, ${son3}`
    btn.append(colorrgb)

}

btn.addEventListener('click', () => {
    generete()
})