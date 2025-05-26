import { mevalar } from './data.js'
import { notify } from './notification.js'
const container = document.getElementById('container')
const modalContent = document.getElementById('modal-content')
const modal = document.getElementById('modal')
modal.classList.add("open-modal")

const shopingArr = []

mevalar.forEach((item) => {
    const meva = document.createElement('div')
    meva.classList.add('meva')
    const liked = document.createElement('div')
    meva.append(liked)
    liked.classList.add('likedbox')
    liked.classList.add('likedBox')
    const chegirma = document.createElement('div')
    chegirma.textContent = `${item.chegirmaFoizi}%`
    const likeIcon = document.createElement('ion-icon')
    likeIcon.setAttribute('name', 'heart')
    likeIcon.className = 'like'
    liked.append(chegirma)
    liked.append(likeIcon)
    const imagage = document.createElement('img')
    imagage.classList.add('imgage')
    meva.append(imagage)
    imagage.setAttribute('src', item.img)

    const kelibChiqishi = document.createElement('p')
    kelibChiqishi.textContent = item.kelibChiqishi

    const title = document.createElement('h4')
    title.textContent = item.nomi
    meva.append(title)

    const narx = document.createElement('div')
    meva.append(narx)

    const info = document.createElement('div')
    info.classList.add('info')

    meva.append(info)
    info.append(kelibChiqishi)
    info.append(title)

    const price = document.createElement('h3')
    price.textContent = item.narxi
    const mainspan = document.createElement('span')
    mainspan.textContent = `/${item.miqdori}`

    const priceBox = document.createElement('div')
    priceBox.classList.add('priceBox')
    priceBox.append(price)
    priceBox.append(mainspan)

    info.append(priceBox)

    const shop = document.createElement('ion-icon')
    shop.setAttribute('name', 'cart-outline')
    meva.append(shop)
    shop.className = 'shopicon'
    container.append(meva)


    likeIcon.onclick = () => {
        likeIcon.style.color = 'red'
    }

    shop.onclick = () => {
        modal.classList.remove('open-modal')
        const modalimg = document.createElement("img")
        modalContent.append(modalimg)
        modalimg.className = 'modalimg'
        modalimg.src = item.img
        const name = document.createElement('h2')
        name.textContent = item.nomi
        modalContent.append(name)

        const sharhi = document.createElement("p")
        sharhi.textContent = item.sharh
        modalContent.append(sharhi)
        const sifati = document.createElement("p")
        sifati.textContent = `sifati:${item.sifati}`
        modalContent.append(sifati)

        const vitaminlarBox = document.createElement('div')
        vitaminlarBox.className = 'vitaminlarBox'
        item.vitaminlar.forEach((item) => {
            const vitaminlar = document.createElement('h3')
            vitaminlar.textContent = item
            vitaminlarBox.append(vitaminlar)
        })
        modalContent.append(vitaminlarBox)

        const SotibOlish = document.createElement('button')
        SotibOlish.className = 'sotibolishBtn'
        SotibOlish.textContent = 'Savatga'
        modalContent.append(SotibOlish)

        SotibOlish.onclick = () => {
            const notification = document.querySelector('.notification')
            notification.classList.add('openNotify')
            notify('ok', 'bajarildi')

            setTimeout(() => {
                notification.classList.remove('openNotify')
            }, 2000)
            shopingArr.push(item)
            count.textContent=shopingArr.length

        }
    }

    modal.onclick = (e) => {
        if (e.target.className == 'modal') {
            modalContent.innerHTML = ""
            modal.classList.add('open-modal')
        }
    }


})