//map method returns a new array , it helps to perform operation on each single element
//Example : - conversion of euro to usd
const movements = [200, 600, -700, 398, 149, -543, 423, 200, -1000, 220, -300, -100];

//here new array gets created using map method inbuild feature
const euroToUSD = 1.1;
const movementsUSD = movements.map(function (mov) {
	return mov * euroToUSD;
})
console.log(movements)
console.log(movementsUSD);


//here new array gets created manually 
const movementsUSDFor = [];
for (const mov of movements) {
	movementsUSDFor.push(mov * euroToUSD)
}
console.log(movementsUSDFor)

//returning the value from here 
const movementsDescription = movements.map((movement, index) => {
	const movType = movement > 0 ? 'deposited' : 'withdrew'
if (movement > 0) {
	return	`Movement  ${index + 1}: You ${movType} ${movement} `;
	} else {
	return	`Movement  ${index + 1}: You ${movType} ${Math.abs(movement)}`;
	}	
})
console.log(movementsDescription)