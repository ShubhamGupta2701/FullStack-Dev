// Variables
// there is also 'var' which is also used to declare varibales and its same as let but its old method
const x = 1   // we can not change the value of a constant variable
let y = 2

console.log("x" , x)
console.log("y" , y)
y = y+50
console.log("new value of y is ",y) 

y = "new name"
console.log("now the new value is a string : ",y)

// Arryas
const arr  = [1,-1,4]

console.log(arr)

arr.push(6) // but here we can do it because it refers to the same object but that object now refers to a new value too 
console.log(arr)

arr.forEach(value => {
    console.log(value)  // numbers 1, -1, 4, 6 are printed, each on its own line
})  

console.log(arr.length)

const arr2 = arr.concat([9,3,1])
console.log(arr2)

const newarr = arr.map(value => value*2)
console.log(newarr)

const num = [1,2,3,4,5]
const [one,two,...rest] = num  /// here we can take rest of the values using expanding operator '...'


console.log(one,two)
console.log(rest)


// objects

