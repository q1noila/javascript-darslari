// let yosh=prompt("Yoshingizni kiriting:")
// if(90<=yosh){
//     alert('Xali ham tirikmisiz')
//     console.log('Xali ham tirikmisiz')
// }
// else if(yosh>=18){
//     alert('Passport beriladi')
// }
// else if(yosh==0){
//     alert('Passport berilmaydi')
// }
// else if(yosh<18){
//     alert('Passport berilmaydi')
// }
// else{
//     alert('Qiymatingiz xato kiritilgan')
// }


// //switch case
// let kun=prompt('Hafta kunini kiriting: ')
// switch(kun){
//     case 'dushanba':
//         console.log('Ha, bugun dushanba, kurs yo`q')
//         break
//     case 'seshanba':
//         console.log('Ha, bugun seshanba, kurs bor')
//         break
//     case 'chorshanba':
//         console.log('Ha, bugun chorshanba, kurs yo`q')
//         break
//     case 'payshanba':
//         console.log('Ha, bugun payshanba, kurs bor')
//         break
//     case 'juma':
//         console.log('Ha, bugun juma, kurs yo`q')
//         break
//     default:
//         alert('Bunday kun mavjud emas')
// }



//shart ? natija : else_natija
//shart ? natija : shart ? natija : else_natija
let ism='Saidjon'
// if (ism=="Noila"){
//     console.log('rost')
// }
// else{
//     console.log('yolg`on')
// }
//↕ ikkalasi bir xil
ism=='Noila' ? console.log('rost'): console.log('yolg`on') //=>uchlik operatori
ism=='Noila' ? console.log('Ismim Noila'): ism=='Sarvar'? console.log('Ismim Sarvar'): ism=='Saidjon' ? console.log('Ismim Saidjon'): console.log('Noma`lum shaxs')