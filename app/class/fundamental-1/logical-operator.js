let sarahHasDriving_Licence = true;
let sarahHasGoodVision = false;
let isTired =
console.log(sarahHasDriving_Licence && sarahHasGoodVision);
console.log(sarahHasDriving_Licence || sarahHasGoodVision);

console.log(sarahHasDriving_Licence && sarahHasGoodVision && isTired);
console.log(sarahHasDriving_Licence && !sarahHasGoodVision && !isTired);

if (sarahHasDriving_Licence && !sarahHasGoodVision && !isTired){
  console.log(`Sarah is able to drive`)
} else {
  console.log(`Someone-else can able to drive`);
}

