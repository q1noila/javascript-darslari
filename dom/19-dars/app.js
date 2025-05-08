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



// ==================================================================
import { products } from './data.js'
const sidebar = document.getElementById('sidebar')
const main = document.getElementById('main')
let product1 = products[0]
function getElement(element) {
    main.innerHTML = ''
    let main1 = document.createElement('div')
    main1.className = 'main1'
    main.append(main1)
    let image = document.createElement('img')
    image.src = element.child.img;
    main1.append(image)
    let desc = document.createElement('p')
    let title = document.createElement('h2')
    title.textContent = element.name
    let price = document.createElement('h1')
    desc.textContent = element.child.description;
    price.textContent = element.child.price;
    main1.append(title)
    main1.append(desc)
    main1.append(price)
    main1.setAttribute('data-aos', 'zoom-in')
    // -------------------conmments------------
    let Maincomments = document.createElement('div')
    Maincomments.className = 'Maincomments'
    Maincomments.setAttribute('data-aos', 'zoom-in')
    for (let i of element.child.comments) {
        let commet = document.createElement('p')
        commet.textContent = i
        Maincomments.append(commet)

    }
    main.append(Maincomments)

}

products.forEach(element => {
    let navigate = document.createElement('div')
    navigate.textContent = element.name;
    navigate.classList.add('navigate')
    sidebar.append(navigate)
    navigate.addEventListener('click', () => {
        getElement(element)
    })
});

getElement(product1)

AOS.init();


let toogle = false
const darkBtn = document.getElementById('darkBtn')
darkBtn.onclick = () => {
    toogle = !toogle
    darkBtn.innerHTML =   toogle ? <ion-icon name="sunny-outline"></ion-icon>:'<ion-icon name="moon-outline"></ion-icon>'
    document.body.classList.toggle('dark-mode')
}


