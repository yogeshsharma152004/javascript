//array method

let names = ['yogesh','yash','kalpit','anuj','rahul']

// for print full array

console.log(names) 

// for find length of array

console.log(names.length) 

// fot he find index number of any value from array

console.log(names[1]) 

// we dont't know the length of array and print the last value 

console.log(names.length-1); 

// for change any value from array

names [3] = 'karthik'
console.log(names)

// PUSH IN ARRAY (it is used to add new value in array) (it always add value in last)

let names01 = ['yogesh','yash','kalpit','anuj','rahul']
names.push('gaurav')
console.log(names01)


// SLICE IN ARRAY (it is uesd to print multiple value from array and it take two parameter )

let names02 = ['yogesh','yash','kalpit','anuj','rahul']
console.log(names02.slice(1,3)) // in this the last value is not considring it means we give index number 3 it gives 3-1 index value

// SPLICE IN ARRAY (it is used to inser value in array)

let name03 = ['yogesh','yash','kalpit','anuj','rahul']
name03.splice(2,0 ,'yuvraj') // when we give 0 then next value is not delete
name03.splice(3,1,'shreyash')// the next value we given is delet
console.log(name03)

// CONCATINATION IN ARRAY (connet to things)

let  names04 = ['yogesh','yash','kalpit','anuj','rahul']
let names05 = ['yogesh','yash','kalpit','anuj','rahul']

console.log(names04.concat(names05)) 

// FILL IN ARRAY (it is used to fill any value in array)

let  numbers = [1,2,3,4,5,6,7,8,9]
numbers.fill('yogesh',2,4) 
console.log(numbers)

// INCLUDE IN ARRAY (in simple way the any value is get their proper index value or not )

let number01 = [1,2,3,4,5,6,7,8,9]
console.log(number01.includes(5,4)) // first value is number of array and second is index number

// INDEX OF IN ARRAY ( it is for print index number of array)

let number02 = [1,2,3,'yogesh',4,5,6,7,8,9]
console.log(number02.indexOf('yogesh')) // any value we give from array it give their index number

//ISARRAY IN ARRAY (it is for we give value is array or not)

let number03 = [1,2,3,4,5,6,7,8,9,]
let a ='yogesh'
console.log(Array.isArray(number03))
console.log(Array.isArray(a))

//JOIN IN ARRAY (it is uesd to add multiple array or value and it join the value between all the caharacter in the array)

let number04 = [1,2,3,4,5,6,7,8,9]
console.log(number04.join(10))

//LAST INDEX OF IN ARRAY (when the same value have in array it gives the last values index number from the same value)

let sports = ['cricket','football','cricket','vollyball','cricket','baseball']
console.log(sports.lastIndexOf('cricket'))

// MAP IN ARRAY (it means what we have to write inside map will be linked with all the element)

let maths = [1,2,3,4,5,6,7,8,9]
console.log(maths.map(Math.pow))

// POP IN ARRAY (it means remove somthing from array it removes last value of array)

let num = [1,2,3,4,5,6,7,8,9]
console.log(num.pop())
console.log(num)

// REVERSE IN ARRAY (for reverse the arry)

let numb = [1,2,3,4,5,6,7,8,9]
console.log(numb.reverse(numb))

//SHIFT IN ARRAY (it removes the value from the first)

let numbe = [1,2,3,4,5,6,7,8,9]
console.log(numbe.shift(numbe))
console.log(numbe)

// SORT IN ARRAY (it is sort the array in asscending means abcd wise)

let friut = ['apple','mango','graphes','banana','pinepple'] 
console.log(friut.sort())

// UNSHIFTE IN ARRAY (it is use to add new value in the beggning of the array)

let friut01 = ['apple','mango','graphes','banana','pinepple']
friut01.unshift('watermalon','yogesh')
console.log(friut01)

// CONVERTING IN ARRAY (for converts any string or any thing in array)

let nam = 'yogesh'
console.log(nam.split())
console.log(nam.split(''))






