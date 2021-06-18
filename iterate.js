var obj = {
    x:10,
    y:4
}
//search in object
// console.log('x'in obj )
for(i in obj){
    console.log(i)
    console.log (obj[i])
}