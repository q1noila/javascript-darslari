const box=document.querySelector(".box");
const image=document.querySelector(".image");
const plus=document.getElementById("plus");
const minus=document.getElementById("minus");

let img=document.createElement('img')
image.append(img)
img.setAttribute('id','img')

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
    if(result>0){
        minus.classList.remove('disabled')
    }

    img.classList.add('hover')        
    
    setTimeout(()=>{
        img.classList.remove('hover')
    },300)
})

minus.addEventListener('click',()=>{
    if(result==0){
        minus.classList.add('disabled')
        console.log(result)
    }
    else if(result>0){
        minus.classList.remove('disabled')
        result--
        img.src=arr[result]
        console.log(result)
    }
    img.classList.add('hover')        
    
    setTimeout(()=>{
        img.classList.remove('hover')
    },300)
    
})