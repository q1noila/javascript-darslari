const btn = document.getElementById('btn')
const box = document.getElementById('box')

const container = document.querySelector('.container')

// console.log(text.innerText = '<i>lorem </i>')
// console.log(box.innerHTML = `<div class="box1">
//     <h1>salom dunyo</h1>
//     </div>`
// )

const yangi = document.createElement('u')
yangi.textContent = 'Taraqqiyot center'
const list = document.createElement('ol')
container.appendChild(yangi)
container.appendChild(list)

// -----------------------------------------------


const textBox = document.createElement('div')
textBox.className = 'textBox'
const matn = document.createElement('p')
matn.textContent = 'salom men dasturchi '
textBox.appendChild(matn)
const italic = document.createElement('i')
italic.textContent = 'salom nima yangiliklar'
matn.appendChild(italic)
document.body.appendChild(textBox)

// let newUser = prompt('ism kiting')

let users = [
    {
        name: "Rahmadjon"
    },
    {
        name: "Sardorbek"
    },
    {
        name: "Jahongir"
    },
    {
        name: "new user"
    },
]

console.log(users)
const userslist = document.createElement('ol')
userslist.className = 'usersList'
users.map((user) => {
    const userlist = document.createElement('li')
    userlist.textContent = user.name
    userslist.appendChild(userlist)
})
document.body.appendChild(userslist)

const usersList2 = document.getElementById('usersList2')
users.map((user) => {
    usersList2.innerHTML += `<li>${user.name}</li>`
})