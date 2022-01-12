
const arr = ['a', 'b', 'c', 'd', 'e'];

//slice returns a new array do not mutates original array
console.log(arr);
console.log(arr.slice());
console.log(arr.slice(2)); // c , d, e
console.log(arr.slice(2, 4)) // c,d
console.log(arr.slice(-2)) // d,e


//splice do not return new array mutates the original array 
const arr2 = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log('arr2==>',arr2)
console.log(arr2.splice(2, 5))
console.log('arr2==>',arr2)

//Reverse do not return new array mutates the original array 
const arr3= ['a', 'b', 'c', 'd', 'e', 'f']
console.log(arr3.reverse())
console.log(arr3)

// concat returns new array do not mutates the original array 
let array4 = ['g', 'h', 'i', 'j', 'k', 'l']
array4.concat(arr3)
console.log('concat ||',array4);


//do not mutates the original array returns the new array 
let array5 = ['mon', 'tue', 'wed', 'thu'];
array5 = array5.join(' | ')
console.log('join: | ',array5);
console.log(array5.includes('mon'));
