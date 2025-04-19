//Array-javascriptdagi eng katta mavzulardan biri
// const arr=['olma','banan','nok',12]
// console.log(arr[1])

// let arr1= new Array(1,2,3,4,5)
// console.log(arr1[2])

// const arr=['olma','banan','nok',12]
// console.log(arr[arr.length-2])//oxiridan o`chiradi
//console.log(arr1.at[-1])//↕ikkalasi bir xil

// let numbers=[1,2,3,4]
// numbers.push(5) //oxiriga element qo`shadi
// numbers.unshift(0)//boshiga elementni qo`shadi
// numbers[1]=12 //indexni ichida yozilgan sonni yangilaydi
// numbers.pop()//oxiridagi elementni o`chiradi
// numbers.shift()//boshidagi elementni o`chiradi
// console.log(numbers)


// let arr=[1,2,3]
// let arr1=[4,5,6]

// console.log(arr)
// console.log(arr.toString()) //typeni stringga o`zgartiradi
// console.log(arr+arr1) //bunday qo`shish xato hisoblanadi

// console.log(arr.concat(arr1,[7,8]).join("-"))//↕o`rniga shuni ishlatiladi, bunga yana elementlarni qo`shsa bo`ladi qo`shsa bo`ladi

// console.log(arr.join("-"))//typeni stringga o`zgartiradi va qavsni ichidagi qiymatni qo`shadi

// let test=['salom','nima gapla',1,2,3,'Ali',4]
// console.log(Array.isArray(test))
// let test1='salom'

// if(Array.isArray(test)){
//     test.push('qo`shildi')
//     console.log(test)
// }
// else{
//     console.log('Array emas')
// }

// let test=['salom','nima gapla',1,2,3,'Ali',4]

// for(let i=0; i<test.length;i++){
//     console.log(test[i])
// }

// test.forEach((index,item)=>{
//     console.log(index,item)
// })

// let test=['salom','nima gapla',1,2,3,'Ali',4]

// let num=[]
// let text=[]

// test.forEach((item)=>{  //number bilan stringni alohida chiqarish
//     if(typeof item=='number'){
//         num.push(item)
//     }
//     else{
//         text.push(item)
//     }
// })
// console.log(num)
// console.log(text)

// let test=['salom','nima gapla',1,2,3,'Ali',4]

// test.map((element)=>{ //forEach bilan bir xil, farqi forEachda return ishlamaydi
//     console.log(element)
// })

// let newforEach=test.forEach((element)=>{ 
//     return element +200
// })
// console.log(newforEach) //undefined-chunki return ishlamaydi

// let newmap1=test.map((element)=>{
//     return element +200
// })
// console.log(newmap1)

// let newmap=test.map((element)=> element +200 //return bo`lsa shunday qisqacha yozsa bo`ladi
// )
// console.log(newmap)

// let num=[12,5,7,1,2,4,6,7,2,9,11,'salom']

// let result=num.filter((element)=> element%2==0)
// console.log(result)

// ===================================================
// let test=['salom','nima gapla',1,2,3,'Ali',4]
// for(item in test){
//     console.log(test[item])
// }
// for(item of test){
//     console.log(item)
// }

let arr=[1,2,3,4,5]
arr.splice(1,2)
console.log(arr)
// ↕ikkalssini farqi splice asl arrayni o`zgartiradi slice esa o`zgartirmaydi,slice alohida o`zgaruvchiga olish kerak
let arr1=[1,2,3,4,5]
let arr12=arr.slice(0,2)
console.log(arr12)

// let arr2=[1,2,3,4,5,6,2,7]
// console.log(arr2.indexOf(4)) //qiymat arrayni ichida bo`lsa indexini chiqarib beradi, agar bo`lmasa "-1"ni chiqaradi
// console.log(arr2.indexOf(2,3))//bunda 1chi qiymat qidirilayotga son 2chi qiymat nechanchi indexdan keyin qidirilishini belgilaydi 

// console.log(arr2.lastIndexOf(2)) //bu ohiridan birinchi kiritgan qiymatimizni topadi
// console.log(arr2.includes(2))//qidiradi

// let name='Noila' 
// let newArr=name.split()
// console.log(newArr) //elementni stringdan arrayga o`zgartirish

// newArr.map((i)=>(console.log(i)))

// let name = 'taraqqiyot';
// name = name.toLowerCase()
// let harflar = {}
// for (let i = 0; i < name.length; i++) {
//     let harf = name[i]

//     if (harflar[harf]) {
//         harflar[harf] += 1
//     } else {
//         harflar[harf] = 1
//     }
// }
// for (let harf in harflar) {
//     console.log(harf, " : ", harflar[harf]);
// }

// // =============================================================






