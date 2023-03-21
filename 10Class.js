// Class

// var user={
//     name:"Jedsadaporn",
//     age:22,
//     SayHi:function(){
//         return "Hello " + this.name //this เพื่อไปเรียก method มาใช้งาน
//     }
// }

// console.log(user.SayHi())  //Hello Jedsadaporn


//แบบเดิม
// function user(name,age){
//     this.name=name,
//     this.age=age
// }
// user.prototype.SayHi=function(){
//     console.log("Hello = "+this.name + "Age = "+this.age)
// }

// var user1  = new user("Jedsadaporn",22)
// user1.SayHi()  // Hello = JedsadapornAge = 22

//แบบใฟม่
class User{
    constructor(name,age){
        this.name=name,
        this.age=age
    }
    SayHi(){
        console.log("Hello = "+this.name + " Age = "+this.age)
    }
}

let user1 =  new User("Jedsadaporn",22)
user1.SayHi()  // Hello = Jedsadaporn Age = 22