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