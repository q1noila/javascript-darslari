import ism,{name} from "./data.js" //ism-default export-hohlagan ismimiz bilan chaqirishimiz mumkin-skobsiz chaqiriladi, name-nomli export orqali olindi-skob bilan chaqiriladi
console.log(name)
// console.log(ism.surname)
// console.log(ism.age)

let {surname,age} = ism //object destructuring qilish
console.log(` ${surname}\n ${age}`) //\n - yangi qatorga o’tish uchun ishlatiladi


const btn=document.getElementById("btn")
const box=document.getElementById("box")

btn.onmouseup=()=>{
    console.log("salom")
}

let card=document.createElement("div")
card.setAttribute("id","card")
document.body.appendChild(card)


// box.onmousemove=(event)=>{
//     console.log("x",event.x)
//     card.style.transform=`translateX(${event.x-100}px)`
//     card.style.transform=`translateY(${event.y-100}px)`
// }

box.onclick=(element)=>{
    card.style.cssText=`
    transform:translateX(${element.x-5}px) translateY(${element.y-100}px);
    `
    console.log('salom')
}


// bu yerga funksiya yozamiz h/m



