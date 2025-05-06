// console.log(box.scrollHeight) // elementning asl balandligini olish
// console.log(box.scrollWidth) // elementning asl kengligini olish

// console.log(box.clientHeight) // elementning ichki balandligini olish
// console.log(box.clientWidth) // elementning ichki kengligini olish

// console.log(box.offsetHeight) // elementning tashqi(belgilangan) balandligini olish
// console.log(box.offsetWidth) // elementning tashqi kengligini olish

// console.log(box.scrollHeight)
// console.log(box.clientHeight)
// function getMore(){
//     if(box.scrollHeight==box.scrollWidth){
//         box.style.height='200px'
//     }
//     else if(box.scrollHeight!==box.scrollWidth){
//         console.log('salom')
//         box.style.height=`${box.scrollHeight}px`
//     }
// }

// =========================

// import { users } from './data.js'

// let data = users

// const title=document.createElement('h3')
// title.textContent= "Foydalanuvchi ma`lumotlari"
// document.body.append(title)

// const table = document.createElement('div')
// document.body.append(table) 
// table.setAttribute('class','userdata')

// function ondelete(id){
//     data=data.filter((item)=> item.id!==id)
//     table.innerHTML=''
//     data.forEach((item)=>{
//         let us=document.createElement('h3')
//         us.innerHTML=`${item.id}. ${item.name}`
//         table.appendChild(us)
//         let btn=document.createElement('button')
//         btn.innerHTML='delete'
//         us.append(btn)
//         us.style.cssText=`
//         color:white;
//         background-color:skyblue;
//         padding:10px;
//         `
//         btn.addEventListener('click',()=>{
//             ondelete(item.id)
//         })

//     })
// }

// data.forEach((item)=>{
//     let us=document.createElement('h3')
//     us.innerHTML=`${item.id}. ${item.name}`
//     table.appendChild(us)
//     let btn=document.createElement('button')
//     btn.innerHTML='delete'
//     us.append(btn)
//     us.style.cssText=`
//     color:white;
//     background-color:skyblue;
//     padding:10px;
//     `
//     btn.addEventListener('click',()=>{
//         ondelete(item.id)
//     })
// })

// =========================

import {users} from './data.js'
let data=users


const title=document.createElement('h3')
title.textContent= "Foydalanuvchi ma`lumotlari"
document.body.append(title)

const table = document.createElement('div')
document.body.append(table) 
table.setAttribute('class','userdata')

function ondelete(id){
    data=data.filter((item)=> item.id!==id)
    getUserData(data)  
    // if (ondelete()==null){
    //     title.textContent='Foydalanuvchi topilmadi'
    // }
}



function getUserData(yangi){
    if (yangi.length){
        table.innerHTML=''
        yangi.forEach((item)=>{
            let us=document.createElement('h3')
            us.innerHTML=`${item.id}. ${item.name}`
            table.appendChild(us)
            let btn=document.createElement('button')
            btn.innerHTML='  delete'
            us.append(btn)
            us.style.cssText=`
            color:white;
            background-color:skyblue;
            padding:15px 50px;
            display:flex;
            justify-content:space-between;
            `
            btn.addEventListener('click',()=>{
                ondelete(item.id)
            })
        })
    }
    else {
        table.innerHTML=''
        title.textContent='Foydalanuvchi topilmadi'
    }
}

getUserData(data)   

 
