//Spread OPerator  การกระจายสมาขิก

//Array
let fruit=['mango','watermelon']
console.log(fruit)
let newfruit=[...fruit,'apple','Durian']  //...fruit การทำเอาค่าใน array fruit มารวมกับ newfruit
console.log(newfruit)
let food=['basil','paper']
console.log(food)
let allfood =[... newfruit,...food]
console.log(allfood)

let product={name:"Durian",price:200}
console.log(product)
let newproduct={...product,category:"fruit"}
console.log(newproduct)
let newprice={...newproduct,price:500}
console.log(newprice)