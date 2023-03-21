//Rest Operator

const addUser=(name,last,city)=>{
    return name+" "+last+" "+city+" "
}

console.log(addUser("เจษฎาภรณ์","พุทธโกศัย","สมุทรปราการ"))
console.log(addUser("เจษฎาภรณ์","พุทธโกศัย","สมุทรปราการ","กรุงเทพ"))


const addUser1=(name,last,... city)=>{  // การเพิ่ม ... city ทำให้สามารถรับข้อมูลของcity เข้่าไปหลายค่า
    return name+" "+last+" "+city
}

console.log(addUser1("เจษฎาภรณ์","พุทธโกศัย","สมุทรปราการ"))
console.log(addUser1("เจษฎาภรณ์","พุทธโกศัย","สมุทรปราการ","กรุงเทพ","เชียงใหม่"))


const addMessage=(first,... message)=>{
    //function map ไปการทำ array
    return message.map(m=>first+message)
}

console.log(addMessage("Hello","JS","React"))

const addNumber=(...number)=>{
    return number.map(m=>number)
}

const addNumber2=(...number)=>{
    return number.reduce((first,current)=>{
        return first+current
    })
}
    
console.log(addNumber(2,3))

console.log(addNumber2(2,3))
