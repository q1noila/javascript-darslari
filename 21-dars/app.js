// const title=document.getElementById("title");
const toggle=document.getElementById("toggle");
const modal=document.querySelector(".modal");
const close=document.getElementById("close");

// title.oncontextmenu=()=>{ //salom deb yozgan narsa ustiga sichqonchani o`ng tarafini bosganda chiqadigan narsa 
//     alert('menu')
// }

modal.classList.add('openModal')
toggle.onclick=()=>{
    modal.classList.remove('openModal')
}
close.onclick=()=>{
    modal.classList.add('openModal')
}
modal.onclick=(e)=>{
    if(e.target.className=="modal"){
        modal.classList.add('openModal')
    }
}