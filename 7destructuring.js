//Detructing Onject

//แบบเดิม
var person={
    name:"Jedsadaporn",
    skill:"java springboot"
}

// var name=person.name
// console.log(name)
// var skill = person.skill
// console.log(skill)
// console.log(`name = ${name} skill = ${skill}`)

//แบบใหม่
var player={
    name:"Jedsadaporn",
    skill:"java springboot"
}

let {name,skill} = player
console.log(`name = ${name} skill = ${skill}`)