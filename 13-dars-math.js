//Math
// let son=-11
// console.log(Math.abs(son))//modulga nisbatan ishlatiladi(| |)

// console.log(Math.round(45.5))//oddiy yaxlitlash (округление)
// console.log(Math.floor(45.5))//son 5dan katta bo`lsa ham faqat pastga yaxlitlaydi
// console.log(Math.ceil(45.17))//son 5dan kichik bo`lsa ham faqat tepaga yaxlitlaydi

// console.log(Math.trunc(23.324234)) //trunc kasr qismini tashlab chiqarib beradi

// console.log(Math.random())//0 dan 1 gacha bo`lgan tasodifiy sonni chiqaradi


 generate=(son)=>{ //0 dan generate()ni ichidagi bo`lgan tasodifiy sonlar
    console.log(Math.trunc(Math.random()*son))
}
generate(10)

