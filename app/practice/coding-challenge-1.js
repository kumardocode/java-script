const marksHeight = 1.69;
const marksWeight = 78;
const johnWeights = 92;
const johnHeights = 1.95;

const marksBMI = marksWeight / (marksHeight * marksHeight);
console.log(marksBMI.toPrecision(3));

const johnsBMI = johnWeights / (johnHeights * johnHeights);
console.log(johnsBMI.toPrecision(3));
const higherBMI = (marksBMI > johnsBMI) ? `marks-has-Higher-BMI ${marksBMI.toPrecision(3)}` : `johnHas-has-Higher-BMI ${johnsBMI.toPrecision(3)}`;
console.log(higherBMI)