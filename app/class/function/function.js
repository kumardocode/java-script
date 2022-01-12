//function deceleration
function logger() {
console.log('Inside logger function...')
}
logger();
logger();
logger();

function foodProcessing(apple,orange) {
return `Enjoy your juice with ${apple} apple and ${orange} orange`;
}
const juice = foodProcessing(3,4);
console.log(juice);


//function expression
const juiceCorner = function (apple,orange) {
  return `Enjoy your juice with ${apple} apple and ${orange} orange`;
}
const haveJuice = juiceCorner(5,2);
console.log(haveJuice);


//arrow function
const myJuice = (apple,orange)=>{
  return `Enjoy your juice with ${apple} apple and ${orange} orange`;
}
console.log(myJuice(10,3));

//calling function inside function