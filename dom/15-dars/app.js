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

const title=document.querySelector('.title') //class bilan olish
const box=document.getElementById('box')//id bilan olish
const addTeg=document.getElementById('addTeg')

title.textContent += " dom" //matnni o`zgartirish
title.innerHTML += "<h1>DOM</h1> <i>salom</i>"  //yangi html qo`shish
title.className+= " yangi" //class qo`shish
console.log(title)

addTeg.addEventListener('click',()=>{ //button bosilganda 
    title.className = 'title'
})

document.addEventListener('keydown', (key)=>{
    title.textContent += key.key //klaviaturadan bosilgan tugma
})


