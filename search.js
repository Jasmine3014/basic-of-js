var arr=[7, 8, 90, 30, 12]

var find = 3
var isFound= false

for( var i=0; i< arr.length ; i++ ){
    if(arr[i] == find){
        console.log("array found index 0f :"+ i)
        isFound=true
        break
    }
   
}
if(!isFound){
    console.log("not found")
    
}