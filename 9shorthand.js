//Short Hand Property & Method

//แบบเดิม

let name = "Jedsadaporn"
let last = "Puttakosai"
let age=20
let user = {
    name:name,
    last:last
}
//แบบนี้ก็ได้ แต่ต้องมีื key เหมือนกัน
// let user = {
//     name,last
// }
console.log(user)   //{ name: 'Jedsadaporn', last: 'Puttakosai' }

//แบบใหม่
function user1(name,last,age){
    return{
        name,
        last,
        age
    }
}

console.log(user1("Jedsadaporn","Puttakosai",22))  //{ name: 'Jedsadaporn', last: 'Puttakosai', age: 22 }