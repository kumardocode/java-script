//In-java-script there are different type of conversion
//1. type-conversion
//2. type-coercion

// In type conversion js converts the value explictly
// and in type-coersin js coverts the vale internally

const inputYear = '1992';
console.log(inputYear); //1992
console.log(inputYear + 18); //199218
console.log(Number(inputYear) + 18); //2010

//tring to convert thestring into number result it gives NAN

console.log(Number('John')); // NAN
console.log(typeof (Number('John'))) // but when we tried to check typeof NAN here it gives number

//java-script have its internal type-coersion which does converts it into the specific type

let details = 'I am ' +23+ ' years old ';
//details = 'I am ' +String(23)+' years old ';
// here java-script internally converts the number into string ==>  'I am ' String(23)' years old ';
console.log(details)

let a = '23';
let b = '50';
let res = a+b; // this + internally concatenates
console.log('addition-res =>',res);

res = b - a;
console.log('subtraction-res =>',res);

res = b * a;
console.log('multiplication-res =>',res);


res = b / a;
console.log('division-res =>',res);

res = b ** a;
console.log('multiplication-res =>',res);

res = b > a;
console.log('comparision-res =>',res);

// const firstNum = this.prompt('Enter firstNum');
// const secondNum = this.prompt('Enter secondNum');
