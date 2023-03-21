//Template Literals

//แบบเดิม
const name="Jedsadaporn"
const last="Puttakosai"
const city="Bangkok"

const all=name+last+city
const allName="Name =  "+name+" Last = "+last+" City = "+city
const allNew="Name = "+name+"\
\nLast = "+last+"\
\nCity = "+city
console.log(all)
console.log(allName)
console.log(allNew)


//แบบใหม่
const newallName=`Name = ${name} Last = ${last} City = ${city}`
console.log(newallName)


