//Nulish-faqatgina null va undefined kelganida ?? dan keyingi qiymatni chiqaradi
// let son=0
// console.log(son ?? 'undefined')
// let son1=null
// console.log(son1 ?? 'qiymat')
// console.log(son1 && 'qiymat') //bunda null bo`ladi chunki && operatori faqat hammasi to`g`ri bo`lganida qiymatni chiqaradi
// console.log(son1 || 'qiymat')

//for loop-bitta kodni qayta ishlash uchun ishlatiladi
//for(boshlanish, manzil, qadam){
//  console.log('salom')
//}


//////

// for(i=0; i<=10; i=i+1){
//     // console.log('salom')
// }
// let sum=1 
// for(u=1; u<=10; u=u+1){
//     // console.log(sum+=u)
// }

// let sum1=1
// for(y=1; y<=10; y=y+1){
//     console.log(sum1*=y)
// }


// let sum=0
// let i=0
// for(i; i<=12; i++){
//     sum+=i
//     if (sum==55) break
//     console.log(sum)
// }

// for(i=1; i<=4; i++){
//     for(j=1; j<=4; j++){
//         console.log('salom')
//     }
// }

// for(i=1; i<=10;i++){ //1 dan 10 gacha karra jadvali
//     for(j=1; j<=10; j++)
//     //  console.log(`${i} * ${j}=${i*j}`)
  
// // }

// for(i=1; i<=10;i++){ //faqat 7 karra
//     for(j=1; j<=10; j++)
//      if(i==7) console.log(`${i} * ${j}=${i*j}`)
  
// }

// for(i=1; i<=10; i++){
//     if(i%2==0) continue //bu yerda 2 ga bo`lganga qoldig`i 0 ga teng sonlar chiqadi
//     console.log(i)
// }

// let i=7 
// for(j=1; j<=10; j++)
//     console.log(`${i}*${j}=${i*j}`)


// ------------------------------------------------
// //1-masala
// let a=-2
// a>0 ? console.log(a++): a<=0 ? console.log(a) : console.log('Xatolik bor')

// // 2-masala
// let a=3
// a>0 ? console.log(a+1): a<=0 ? console.log(a-2): console.log('Xatolik bor')

// //3-masala
// let a=0
// a>0 ? console.log(a+1): a<0 ? console.log(a-2): a==0 ? console.log(a+10) : console.log('Xatolik bor')

// //4-masala
// let a=-12
// let b=-11
// let c=-1
// let musbat=0
// if(a>0){
//     musbat++
// }
// if(b>0){
//     musbat++
// }
// if(c>0){
//     musbat++
// }
// console.log('Musbat sonlar soni:',musbat)

// //5-masala
// let a=12
// let b=-11
// let c=-1
// let musbat=0
// let manfiy=0
// if(a>0){
//     musbat++
// }
// else if(a<0){
//     manfiy++
// }
// if(b>0){
//     musbat++
// }
// else if(b<0) manfiy++
// if(c>0) musbat++
// else if(c<0) manfiy++
// console.log('Musbat sonlar soni:',musbat)
// console.log('Manfiy sonlar soni',manfiy)

// //6-masala
// let a=7
// let b=7
// if(a>b){
//     console.log(a)
// }
// else {
//     console.log('Xatolik bor')
// }

// //7-masala
// let a=3
// let b=6
// if(a>b) console.log('Tartib raqami birinchi')
// else if(a<b) console.log('Tartib raqami ikkinchi')
// else {
//     console.log('teng')
// }

// //8-masala
// let a=67
// let b=70
// if (a>=b){
//     console.log(a,b)
// }
// else if (b>a){
//     console.log(b,a)
// }
// else{
//     console.log('Xatolik bor')
// }

// //9-masala
// let a=13
// let b=11
// if(a<b){
//     console.log(`a=${a}, b=${b}`)
// }
// else if(a>b){
//     console.log(`a=${a}, b=${b=a+1}`)
// }


// //10-masala
// let a=12
// let b=12
// if(a!=b){
//     console.log(a+b)
// }
// else if(a==b){
//     console.log(0)
// }

// //11-masala
// let a=11
// let b=11
// if(a!=b){
//     if(a>b){
//         console.log(a)
//     }
//     else if(a<b){
//         console.log(b)
//     }
// }
// else if(a==b){
//     console.log(0)
// }

// // 12-masala
// let a=1
// let b=12
// let c=13
// if(a<b && a<c){
//     console.log(a)
// }
// else if(b<c && b<a){
//     console.log(b)
// }
// else if(c<a && c<b){
//     console.log(c)
// }

// //13-masala
// let a=82;
// let b=23;
// let c=63;
// if (a>b && a<c || a<b && a>c){ 
//     console.log(a)
// }
// else if(b>a && b<c || b<a && b>c){
//     console.log(b)
// }
// else{
//     console.log(c)
// }

// //14-masala
// let a=17
// let b=12
// let c=19
// if(a<b && a<c){
//     console.log(a)
// }
// else if(b<c && b<a){
//     console.log(b)
// }
// else{
//     console.log(c)
// }
// if(a>b && a>c){
//     console.log(a)
// }
// else if(b>c && b>a){
//     console.log(b)
// }
// else{
//     console.log(c)
// }

// //15-masala
// let a=8
// let b=7
// let c=11
// if (a + b >= a + c && a + b >= b + c) {
//     console.log(a, b);
// } else if (a + c >= a + b && a + c >= b + c) {
//     console.log(a, c);
// } else {
//     console.log(b, c);
// }

//16-masala
let a=2
let b=11
let c=10
if(a<b && b<c){
    console.log(a*2,b*2,c*2)
}
else{
    console.log(a=-a,b=-b, c=-c)
}

