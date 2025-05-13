const date= new Date; //to`liq vaqtni olish
// console.log(date);
// console.log(date.getDate()); //kunni olish
// console.log(date.getDay()); //haftaning kunini olish
// console.log(date.getFullYear()); //yilni olish
// console.log(date.getMonth()); //oyni olish
// console.log(date.getHours()); //soatni olish 
// console.log(date.getMinutes()); //daqiqani olish
// console.log(date.getSeconds()); //soniyani olish
// console.log(date.getMilliseconds()); //millisoniyani olish


// let kun=date.getDate() 
// let oy=date.getMonth() 
// let yil=date.getFullYear() 
// let fulldate=`${kun}.${oy+1}.${yil}` //oy+1 qilmasak 0 dan boshlanadi
// console.log(fulldate);



// let soat1 = date.getHours()
// let min1 = date.getMinutes()
// let seconds = date.getSeconds()
// let fullsoat = `${soat1}:${min1 > 9 ? min1 : 0 + '' + min1}:${seconds > 9 ? seconds : 0 + '' + seconds}`
// getSoat.textContent = fullsoat



// setTimeout(()=>{ //qanchadir intervaldan so`ng bajariladigan funksiya(interval-vaqtga o`rniga qo`yiladi)
//     my code
// },vaqt)


// console.log('salom') //salom chiqadi 5 sekunddan ketin 'hi' chiqadi (vaqtni millisekundda belgilanadi)
// setTimeout(() => {
//     console.log('hi')
// }, 5000)

// console.log('alik')//undan keyingi kodlar vaqt 'hi'ni tugaguncha chiqadi, "hi"-ulardan keyin chiqadi


// setInterval(() => { //hozirgi vaqtdagi soat vaqti, refresh qilish shart emas
//     const date = new Date
//     let soat2 = date.getHours()
//     let min2 = date.getMinutes()
//     let seconds2 = date.getSeconds()
//     let fullsoat = `${soat2}:${min2 > 9 ? min2 : 0 + '' + min2}:${seconds2 > 9 ? seconds2 : 0 + '' + seconds2}`
//     getSoat.textContent = fullsoat
// }, 1000)

let oylar=['Yanvar','Fevral','Mart','Aprel','May','Iyun','Iyul','Avgust','Sentabr','Oktyabr','Noyabr','Dekabr']
let kunlar=['Dushanba','Seshanba','Chorshanba','Payshanba','Juma','Shanba','Yakshanba']
// let kunlar1=['Du','Se','Chor','Pay','Ju','Sha','Yak']
// function moment(){
    // const date= new Date
//     return{
//         format:(item)=>{
//            switch(item){
//                 case 'LT':
//                     return`${date.getHours()}:${date.getMinutes()}`;
//                 case 'LTS':
//                     return`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
//                 case 'L':
//                     return`0${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
//                 case 'l':
//                     return`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`;
//                 case 'LL':
//                     return`${oylar[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
//                 case 'll':
//                     return`${oylar[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
//                 case 'LLL':
//                     return`${oylar[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}  ${date.getHours()-12}:${date.getMinutes()} PM`;
//                 case 'lll':
//                     return`${oylar[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}  ${date.getHours()-12}:${date.getMinutes()} PM`;
//                 case 'LLLL':
//                     return`${kunlar[date.getDay()]}, ${oylar[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}  ${date.getHours()-12}:${date.getMinutes()} PM`;  
//                 case 'llll':
//                     return`${kunlar1[date.getDay()]}, ${oylar[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}  ${date.getHours()-12}:${date.getMinutes()} PM`;  
                
//             }
//         }
//     }
// }
// console.log(moment().format('llll')  ) 

const box=document.getElementById('box')
const box2=document.getElementById('box2')

setInterval(() => { 
    const date = new Date   
    box.innerHTML = `${kunlar[date.getDay()]}, ${oylar[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}\n
 <h1>${date.getHours()}:${date.getMinutes()>9? date.getMinutes(): '0'+date.getMinutes()}:${date.getSeconds()>9? date.getSeconds(): '0'+date.getSeconds()} PM</h1> `
}, 1000)

setInterval(() => { 
    const date = new Date   
    box2.innerHTML = `${kunlar[date.getDay()]}, ${oylar[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}\n
 <h1>${date.getHours()}:${date.getMinutes()>9? date.getMinutes(): '0'+date.getMinutes()}:${date.getSeconds()>9? date.getSeconds(): '0'+date.getSeconds()} PM</h1> `
}, 1000)
