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
    darkBtn.innerHTML =   toogle ? `<ion-icon name="sunny-outline"></ion-icon>`:`<ion-icon name="moon-outline"></ion-icon>`
    document.body.classList.toggle('dark-mode')
}

