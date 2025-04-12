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

let test=['salom','nima gapla',1,2,3,'Ali',4]

test.map((element)=>{ //forEach bilan bir xil, farqi forEachda return ishlamaydi
    console.log(element)
})

let newforEach=test.forEach((element)=>{ 
    return element +200
})
console.log(newforEach) //undefined-chunki return ishlamaydi

let newmap1=test.map((element)=>{
    return element +200
})
console.log(newmap1)

let newmap=test.map((element)=> element +200 //return bo`lsa shunday qisqacha yozsa bo`ladi
)
console.log(newmap)

