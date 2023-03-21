//Default Parameter
const addUser=(name,last,city="Bangkok")=>{  //city is default paramet
    return name + last+" city = "+ city
}

console.log(addUser("Jedsadaporn","Puttakosai","SamutPrakarn"))
//if not add city  
console.log(addUser("toey","Puttakosai"))

