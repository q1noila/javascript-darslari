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

// const obj1={
//     name:'Noila',
//     fio:'Olimjanova',
//     age:16,
//     job:'student'
// }

// for(let i in obj1){           //faqat obj1 ni ichidagi value olishga ishlatiladi
//     console.log(obj1[i])   
// }
// console.log(obj1)

//destructure
// let name='Ruxshona'
// const obj1={
//     name:'Noila',
//     fio:'Olimjanova',
//     age:16,
//     job:{jobname:'student'}
// }
// let {name: newname, job: {jobname:jobb}}=obj1   //name: newname-agar obj ni ichidagi o`zgaruvchi tashqaridagi o`zgaruvchi bilan bir xil bo`lsa shundan foydalansa bo`ladi
// console.log(newname)
// console.log(jobb)


// let obj1={
//     name:'Noila',
//     fio:'Olimjanova',
//     age:16,
//     name2:{ism:'Fotima'},
//     // sayHi({job}){
//     //     console.log('salom',job)
//     // }
//     MainFunc(){
//         console.log(this.name2.ism) //buni qiymati obj1 ga teng
//         // console.log(obj1.name) //agar bu o`chib ketsa yoki qiymati null ga teng bo`lsa terminal xatolik beradi, shunga this ishlatiladi
//     }
// }
// // obj1.sayHi({job:"Designer",age:12})

// let obj2=obj1
// obj1=null
// obj2.MainFunc()
// //Garbiche collection- bu javascriptda ishlatilinmayotgan obj larni avtomatik o`chirib tashlaydi
// ///this-bu javascriptdagi eng katta objectlar bir va u qayerda ishlatilinsa qiymati o`sha yerga teng bo`ladi

// let obj={
//     name:'Noila',
//     child:{
//         baxo1:5,
//         baxo2:2,
//         baxo3:5
//     }
// }

// // let son1=obj.child.baxo1+obj.child.baxo2+obj.child.baxo3

// // let ob=function(){
// //     return son1/3
// // }
// // console.log(ob())

// let getData=({name,child:{baxo1,baxo2,baxo3}})=>{
//     return `${name} ${(baxo1+baxo2+baxo3)/3}`
// }
// console.log(getData(obj))


// let obj={
//     name:'Noila',
//     child:{
//         baxo1:5,
//         baxo2:2,
//         baxo3:5
//     },
//     son({name,child:{baxo1,baxo2,baxo3}}){
//         return `${name} ${(baxo1+baxo2+baxo3)/3}`
//     }
// }

// let {son}=obj
// console.log(son(obj))
// // console.log(obj.son(obj))



// let obj1={
//     name:'Noila',
//     age:12,
//     child:{
//         childname:"Ali",
//         age:99,
//         child:{
//             childname:"Aziz",
//             age:1,
//         }
//     }
// }
// //obj1 ni ichidagi barcha age larni qo`shib chiqadi
// let natija=0 
// while(1){
//     if(obj1){
//         natija+=obj1.age
//         // console.log(obj1.age)
//     }
//     else{
//         break
//     }
//     obj1=obj1.child
// }
// console.log(natija)

// // ↕ikkalasi bir xil
// while(obj1){
//     natija+=obj1.age
//     obj1=obj1.child
// }

let obj={
    name:'Noila',
    age:15,
    job:'student'
}
// "..."-spread operatori, bu object ma`lumotlarini o1zgartirish uchun ishlatiladi "...obj" bu holda qiymatlarni tashqariga chiqaradi
let newobj={...obj,gender:'women',fio:'Olimjanova'}
console.log(newobj)