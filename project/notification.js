const notification=document.querySelector('.notification')
export function notify(ok,msg){
    if(ok=='ok'){
        notification.innerHTML=`<ion-icon class='checkmark' name="checkmark-circle"></ion-icon> ${msg}`
    }
    else{
        notification.style.border='2px solid red'
        notification.innerHTML=`<ion-icon class='close' name="close-circle"></ion-icon> ${msg}`
    }
    console.log(ok,msg)
}