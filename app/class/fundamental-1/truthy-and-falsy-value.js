// In javascript there is concept of truthy and falsy values
// some of the falsy values in javascript are
// values: undefined , null , '',0,NAN,

// 1. when we try to convert these values to boolean then then it becomes falsy value
// example :

console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(0));

// assume the if and else case

const salary = 0;
if (salary){
  console.log('Yes you got your salary...Dont spend it all');
}else {
  console.log('Start your saving...');
}

let height = 0;

if (height){  // height = 0 . is a valid value it is defined some-times but this takes to bug also
  console.log('YEH HEY... height is defined');
}else {
  console.log('Height is undefined');
}
