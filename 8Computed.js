//Computed Property Name

let food1={name:"Orange Cake",price:200}
let food2={name:"Mango Cake",price:250}

console.log(food1)
console.log(food2)

let user={
    user1:"Jedsadaponr",
    user2:"aaaa"
}
let user1={
    ['user'+1]:"Jedsadaponr",
    ['user'+2]:"aaaa"
}
console.log(user1)

// การเปลี่ยน โดยใส่ [ ]ครอบ
//การนำตัวแปรด้านนอกมาประกาศ property ข้างใน
let name ="fruit"
let food={
    [name]:"Mango Cake",price:200  //{ Cake: 'Mango Cake', price: 200 }
}
console.log(food)

let menu={
    [name]:name+"ส้ม",[name+"Mix"]:"ผลส้ม"  //{ Cake: 'Cakeส้ม', CakeMix: 'ผลส้ม' }
}
let {fruit,fruitMix}=menu
console.log(fruit) //-> fruitส้ม
console.log(menu)