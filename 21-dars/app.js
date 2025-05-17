// const title=document.getElementById("title");
const toggle = document.getElementById("toggle");
const modal = document.querySelector(".modal");
const close = document.getElementById("close");
const form = document.getElementById("form");
const username = document.getElementById("username");
const parol = document.getElementById("parol");
const submit = document.getElementById("submit");

// title.oncontextmenu=()=>{ //salom deb yozgan narsa ustiga sichqonchani o`ng tarafini bosganda chiqadigan narsa 
//     alert('menu')
// }

// modal.classList.add('openModal')
toggle.onclick = () => {
    modal.classList.remove('openModal')
}
close.onclick = () => {
    modal.classList.add('openModal')
}
modal.onclick = (e) => {
    if (e.target.className == "modal") {
        modal.classList.add('openModal')
    }
}

submit.onclick = (e) => {
    e.preventDefault();
    let ism = username.value;
    let pas = parol.value;
    console.log(ism, pas);
    username.value=''
    parol.value=''
}