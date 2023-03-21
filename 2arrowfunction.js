//Arrow Function
function sorwor(a,b){
    return a+b
}

let result = sorwor(1,2)
console.log("result",result)

//-------------------------

const arrow =(a,b)=>{
    console.log("processing......")
    return a+b
}

let result1 = arrow(1,2)
console.log("result1",result)


//-------------------------

const arrow2 =(a,b)=> a+b

let result2 = arrow2(500,2)
console.log("result2",result)


//-------------------------

// มีปีกกา กรณีมีคำสั่งมากกว่า 1 บรรทัด
const arrow3=(a)=>a+200
let result3 = arrow3(50)
console.log("reult3",result3)


const arrow4=a=>a+1000
let result4 = arrow3(50)
console.log("reult4",result4)

const student=name=>({name:name,age:10})
let result5=student("toey")
console.log("result5",result5)

//ไม่มีปีกกา -> parameter =1 