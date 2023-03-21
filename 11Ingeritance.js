//Inheritance การสืบทอด

class Admin{
    constructor(){
        console.log("Call Constructor")
    }
    isPermission(){
        console.log("Read Write Data From Database")
    }
}


class User extends Admin{  //extends Admin คือการสืบือดจาก class แม่
    constructor(name,age){
        super()
        this.name=name
        this.age=age
    }
    SayHi(){
        console.log("Hello = "+this.name + " Age = "+this.age)
    }
}

let user1 =  new User("Jedsadaporn",22)
user1.SayHi()  // Hello = Jedsadaporn Age = 22
// Call Constructor
// Hello = Jedsadaporn Age = 22

//การเรียกใช้ method จาก class แม่ เพราะสืบทอดมา
user1.isPermission()     

//Call Constructor
//Hello = Jedsadaporn Age = 22
//Read Write Data From Database
