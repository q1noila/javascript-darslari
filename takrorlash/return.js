let users = [
    { id: 1, name: "Sardor", surname: "Tursunov", age: 25, job: "Developer", admin: true, phone: '+998934443322' },
    { id: 2, name: "Malika", surname: "Islomova", age: 22, job: "Designer", admin: false, phone: '+7 911 556 33 22' },
    { id: 3, name: "Bekzod", surname: "Qodirov", age: 30, job: "Project Manager", admin: false, phone: '+1 310 555 1234' },
    { id: 4, name: "Zarina", surname: "Karimova", age: 27, job: "QA Engineer", admin: false, phone: '+998 91 234 5678' },
    { id: 5, name: "Jasur", surname: "Ahmedov", age: 28, job: "DevOps Engineer", admin: false, phone: '+7 912 334 5566' },
    { id: 6, name: "Dilnoza", surname: "Usmonova", age: 24, job: "Frontend Developer", admin: false, phone: '+998 93 556 7788' },
    { id: 7, name: "Islom", surname: "Rasulov", age: 32, job: "Backend Developer", admin: false, phone: '+1 646 987 6543' },
    { id: 8, name: "Shahnoza", surname: "Nazarova", age: 26, job: "UI/UX Designer", admin: false, phone: '+998 90 123 4567' },
    { id: 9, name: "Sardor", surname: "Xolmatov", age: 29, job: "System Analyst", admin: false, phone: '+7 915 234 3456' },
    { id: 10, name: "Nodira", surname: "Sattorova", age: 23, job: "HR Manager", admin: false, phone: '+1 213 765 9876' },
    { id: 11, name: "Murod", surname: "Ergashev", age: 31, job: "Fullstack Developer", admin: false, phone: '+998 94 654 3210' },
    { id: 12, name: "Gulnoza", surname: "Aliyeva", age: 22, job: "Data Analyst", admin: false, phone: '+7 916 112 3344' },
    { id: 13, name: "Aziz", surname: "Hamidov", age: 27, job: "Mobile Developer", admin: false, phone: '+1 415 321 4321' },
    { id: 14, name: "Dilshoda", surname: "Mirzayeva", age: 28, job: "Business Analyst", admin: false, phone: '+998 97 888 7777' },
    { id: 15, name: "Sardor", surname: "Bekmurodov", age: 33, job: "Software Architect", admin: false, phone: '+1 646 000 9999' }
];
//FILTER
// users=users.filter((element)=> element.surname.endsWith('va'))//va bilan tugagan familiyani topadi
// console.log(users)
// users=users.filter((element)=> element.surname.endsWith('va'))//va bilan tugamagan familiyani topadi
// console.log(users)
//huddi shu funksiyani nomer orqali topish uchun ham ishlatiladi, faqat startswith() bilan '+'dan keyingi raqamlarga qo`yish kerak
// users=users.filter((element)=> element.phone.startsWith('+998'))//+998 bilan boshlanadigan telefon raqamlarini topadi
// console.log(users)

//agar tartibli raqamli id bo`lsa idsi 15 bo`lsa 16, 16 bo`lsa 17 qilish kerak bo`lsa uni 'id: users.length+1' orqali qilsa bo`ladi

// users.push({ id: users.length+1, name: " Vali", surname: "Valiyev", age: 26})//yangi element qo`shish


// users=users.splice(9)//9 indexdan keyingi keladigan elementlarni oladi
// users=[...users, { id: users.length+1, name: "Ali", surname: "Aliyev", age: 26}]//yangi element qo`shish
// console.log(users)


// users.unshift({ id: users.length+1, name: "Otabek", surname: "Otabekov", age: 26})//boshiga yangi element qo`shish
// console.log(users)

// users.pop()//oxiridagi element olib tashlaydi
// console.log(users)

// users.shift()//boshidagi element olib tashlaydi
// console.log(users)


//return funksiyaga vazifa biriktirish va uni consolga kiritgan parametrimiz bilan chiqarish, necha marta consol.logga chiqarsak shuncha chiqadi
function returns(ism){ 
    return 'salom'+" "+ ism
}
console.log(returns('Noila'))
console.log(returns('Nigora'))

function obj({name, age}){ //objectni ichidan destructure qilib olish
    return 'hi'+" "+ name+" "+age
}

console.log(obj({name:'Sarvar', age: 12}))