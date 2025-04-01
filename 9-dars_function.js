//function-amallarni 
//functionni ichida if ham ishlaydi
// //function declaration
// function salomber(){
//     console.log('salom') //bu yerda hali ishlamaydi, chunki chaqirilmagan
// }
// salomber() //endi ishlaydi

// //function-kalit so`z
// //salomber-funksiya nomi (ixtiyoriy nom qo`yish mumkin)
// //{}-ichida yoziladigan kod yoziladi


// //parametr function  ///parametr va function salomber(parametr=default function)
// function salomber(ism='ma`lumot yo`q'){ 
//     console.log(`Salom ${ism} nima gap`)
// }
// salomber('Noila')
// salomber('Asad')
// salomber() //agar hech narsa bo`lmasa function dagi salomber qiymatini o`zlashtiradi

// function salomber(ism, son1, son2){
//     console.log(ism,son2,son1)
// }
// salomber('Noila', 12, 11)


// function hisobla(){
//     let natija=2*3
//     return natija     //returndan keyin hech nima ishlamaydi
// }
//return - funksiyadan qiymat qaytaradi va to`xtatadi
//return-funksiya qiymatini qaytarish
// console.log(hisobla())


// sum=0
// function hisobla(){
//     let natija=2+6
//     sum+=natija
// }
// hisobla()
// console.log(sum+12)

// ↕ pasttagisi qisqarog`i

// function hisobla(){
//     let natija=2+6 //bularni o`rniga parametr qo`ysa bo`ladi
//     return natija
// }
// console.log(hisobla()+12)

//↕ ikkalasi bir xil
// function hisobla(son1,son2){
//     let natija=son1+son2
//     return natija
// }
// console.log(hisobla(2,6)+12)

// //FUNCTION EXPRESSION
// const hisobla= function(){
//     return 12+3
// }
// console.log(hisobla())

// //ARROW FUNCTION
// const salomber=(salom) =>{
//     console.log('Salom',salom)
// }
// salomber('Noila') //==>salom

//bu htmlda ishlatiladigan holi (index.html)
// const salomber=(salom) =>{
//     console.log('Salom',salom)
// }

// //kalkulator
// const hisobla=(amal,a,b)=>{
//     switch(amal){
//         case 'qo`shish':
//             console.log(a+b)
//         break
//         case 'ayirish':
//             console.log(a-b)
//         break
//         case 'ko`paytirish':
//             console.log(a*b)
//         break
//         case 'bo`lish':
//             console.log(a/b)
//         break
//         case 'kvadrat':
//             console.log(a**b)
//         break
//         default:
//             console.log('Bunday amal mavjud emas')
//     }
// }
// hisobla('kvadrat',5,2)

// function hisobla(){
//     console.log(10+5)
// }
// hisobla()

// const hisobla=function(){
//     return 12+3
// }
// console.log(hisobla())

// const hisobla=(teng) =>{
//     console.log(`15 teng`,teng)
// }
// hisobla(12+3)


