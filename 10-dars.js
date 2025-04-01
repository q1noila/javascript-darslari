// //{key:value} /// obj-key va value dan iborat to`plam
// let obj={ism:'Noila', fio:'Olimjanova'}
// console.log(obj)
// console.log(obj.ism) //faqat ismni chiqarish uchun ishlatiladi

// let til='uz'
// console.log(obj.ism, til=='uz' ? console.log(usd.ism) : til=='ru' ? console.log('Ноила') )

// let info={name:'Noila', fio:'Olimjanova',yosh:16,'ism fio':'Noila Olimjanova'}
// console.log(info.name, info.fio)
// console.log(info['ism fio'])

// info.name='Malika' //qo`shish
// delete info.name   //o`chirish

// let ism='Noila'
// let fio='Olimjanova'
// let info={ism,fio} //agar tashqaridan kiradigan input objectni ichidagi o`zgaruvchi bilan bir xil bo`lsa shunday yoziladi
// Object.freeze(info)  //muzlatib qo`yadi, bundan keyin yozilgan hamma kodlar ishlamaydi
// Object.seal(info)  //bundan keyin faqat yangilash funksiyasi ishlaydi
// info.ism='Ruxshona'
// info.age=16    //agar yo`q bo`lsa qo`shadi, bor bo`lsa yangilaydi

// console.log(info)


// //Ma`lumot bazasi bilan ishlash
// let ism='Noila'
// let parol='1234567'
// let userData={ism,parol}

// const mbb={
//     ism:'Noila',
//     fio:'Olimjanova',
//     email:'email@gmail.com',
//     parol: '12345678'
// }
// if(userData.ism==mbb.ism){
//     console.log('ism tasdiqlandi')
// }
// else if(userData.ism !== mbb.ism){
//     console.log('bunday foydalanuvchi mavjud emas')
// }
// if(userData.parol==mbb.parol){
//     console.log('parol tasdiqlandi')
// }
// else if(userData.parol.length<8){         // .length-faqat stringda ishlaydi               
//     console.log('Parol kamida 8ta qiymatdan iborat bo`lishi kerak')
// }
// else if(userData.parol !== mbb.parol){
//     console.log('parol xato kiritilgan')
// }


// const obj={
//     name:'Noila',
//     fio:'Olimjanova',
//     'fullname':{age:16, gender: 'female', boshqa:{job:'student'}}
// }
// console.log(obj.name)
// console.log(obj['fullname'].boshqa.job)

// let name=obj.name
// let job=obj['fullname'].boshqa.job
// console.log(name,job)

// const obj1={
//     name:'Noila',
//     fio:'Olimjanova',
//     fullname:{job:'student'}
// }

// let obj2=obj1   //bu kopiya qilish deyiladi, bunday kopiya qilganda bitta obj ni o`zgartirganda ikkalasi ham o`zgaradi
// obj2.name='Ruxshona'
// console.log(obj1)
// console.log(obj2)

// let obj2={}
// Object.assign(obj2,obj1) //bunday kopiya qilganda yuzaki objectlar(name,fio)ni qaysi birini o`zgartirilsa shunisi ozgaradi, ichki objectlar(fullname)ni bittasini o`zgartirganda ikkalasi ham o`zgaradi
// console.log(obj1)
// console.log(obj2)


// let obj2=structuredClone(obj1) //bunday kopiya usulida ichki objectlarni faqat o`zgartirilgani o`zgaradi
// obj2.fullname.job='nurse'
// obj1.name='Ruxshona'
// console.log(obj1)
// console.log(obj2)

const obj1={
    name:'Noila',
    fio:'Olimjanova',
    age:16,
    job:'student'
}

for(let i in obj1){           //faqat obj1 ni ichidagi value olishga ishlatiladi
    console.log(obj1[i])   
}
console.log(obj1)