//document
//window

// const ul=document.getElementsByTagName("ul");
// const li=document.getElementsByTagName("li");
// const h1=document.getElementsByTagName("h1");
// console.log(ul)
// console.log(li)
// console.log(h1)

// const title=document.querySelector('.title')
// function addclass(soz){
//     title.className += 'yangi'
//     title.textContent= soz
// }

// console.log(title)

// const box=document.getElementById('box')
// box.innerHTML += `<h1>yangi teg</h1>`
// console.log(box)

// const title=document.querySelector('.title') //class bilan olish
// const box=document.getElementById('box')//id bilan olish
// const addTeg=document.getElementById('addTeg')

// title.textContent += " dom" //matnni o`zgartirish
// title.innerHTML += "<h1>DOM</h1> <i>salom</i>"  //yangi html qo`shish
// title.className+= " yangi" //class qo`shish
// console.log(title)

// addTeg.addEventListener('click',()=>{ //button bosilganda 
//     title.className = 'title'
// })

// document.addEventListener('keydown', (key)=>{
//     title.textContent += key.key //klaviaturadan bosilgan tugma
// })

const change=document.getElementById('change')
const box1=document.getElementById('box1')

// box1.classList.add('text') //class qo`shish
// box1.classList.remove('text')//classni o`chirish
// box1.classList.toggle('text') //class bo`lsa o`chirish bo`lmasa qo`shish

// document.addEventListener('click', ()=>{
//     change.classList.toggle('text')
// })
// console.log(change)

// =====================================h/w===================================
const container=document.querySelector('.container')
const card1=document.querySelector('.card1')
const card2=document.querySelector('.card2')
const card3=document.querySelector('.card3')
const btn=document.getElementById('btn')
const card4=document.querySelector('.card4')

btn.addEventListener('click', ()=>{
    container.className = 'container2'
    card1.className = 'card4'
    card2.className = 'card4'
    card3.className = 'card4'
})

card4.addEventListener('click', ()=>{
    card4.className='card5'
})
