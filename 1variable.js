// global variable -> var // local variavle -> block scope let

// var ->global 
let price = 20
//define
let fruit = "mango"

if(price===20){
    let fruit="apple"
    console.log("in block",fruit)
    //ประกาศเป็นlet ตัวแปรจะเปลี่ยนแค่ใน block scope
    
}
//ประกาศเป็น var ค่าจะถูกเปลี่ยนไปเลย
console.log("out block ",fruit)


//const ถ้าข้อมูลเป็นตัวเลข ข้อความจะไม่สามารถเปลี่ยนได้
const total =1
console.log(total)

//const ถ้าข้อมูลมีลักษณะเป็น object สามารถเปลี่ยนแปลงได้
const person ={name:"Jedsadaporn",last:"Puttakosai"}
console.log(person)
person.name="toey" // 
console.log(person)