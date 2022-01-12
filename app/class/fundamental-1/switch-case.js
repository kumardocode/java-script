const date = new Date();
const presentDay = date.getUTCDay();

switch (presentDay) {
  case 1 :
    console.log(`Plan course structure`);
    console.log(` course structure`);
    break;
  case 2:
    console.log(`Prepare theory videos`);
    break;
  case 3:
  case 4:
    console.log(`Write code examples`);
    break;
  case 5:
    console.log(`Test the written code examples`);
    break;
  case 6 :
  case 7:
    console.log(`Enjoy the weekend :D`);
    break
  default :
    console.log(`NOT A VALID DAY`);
}

// write this using if-else case

if (presentDay === 1){
  console.log(`Plan course structure`);
  console.log(` course structure`);
} else if (presentDay === 2) {
  console.log(`Prepare theory videos`);
} else if (presentDay === 3 || presentDay === 4) {
  console.log(`Write code examples`);
} else if (presentDay === 5) {
  console.log(`Test the written code examples`);
}else if (presentDay === 6 || presentDay===7){
  console.log(`Enjoy the weekend :D`);
} else {
  console.log(`NOT A VALID DAY`);
}