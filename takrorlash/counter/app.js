const plus=document.getElementById("plus");
const minus=document.getElementById("minus");
const clear=document.getElementById("clear");
// const count=document.getElementById("count");
const img=document.getElementById("img");

arr=['./images/asus.png','./images/bg.png','./images/dron.png','./images/goPro.png','./images/ipad.png','./images/iphone.png','./images/mac.png','./images/play.png','./images/pods.png','./images/samsung.png','./images/sony.png']

let result=0
img.src=arr[result]
plus.addEventListener('click',()=>{
    result++
    img.src=arr[result]
    console.log(result)
    if(result==arr.length){
        result=0
        img.src=arr[result]
        console.log(result)
    }
})

clear.addEventListener('click',()=>{
    result=0
    img.src=arr[result]
    console.log(result)
})

minus.addEventListener('click',()=>{
    if(result==0){
        console.log(result)
    }
    else if(result>0){
        result--
        img.src=arr[result]
        console.log(result)
    }
    
})
