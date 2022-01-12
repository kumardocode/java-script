const movements = [200, 600, -700, 398, 149, -543, 423, 200, -1000, 220, -300,-100];

console.log("-----FOR OF-----")
for (const movement of movements) {
	if (movement > 0) {
		console.log(`Movement  : You deposited ${movement} `);
	} else {
		console.log(`Movement  : You withdrew ${Math.abs(movement)}`);
	}
}

console.log("--------FOR EACH---------")
movements.forEach(function(movement,index){
	if(movement > 0) {
		console.log(`Movement ${index + 1}: You deposited ${movement}`);
} else {
		console.log(`Movement ${index + 1}: You withdrew  ${Math.abs(movement)}`);
	}
})

//function(200)
//function(600)
//function(-700)
//function(398)
//function(149)
//function(-543)

console.log("----FOR OF ENTRIES------")
for (const [index, movement, key] of movements.entries()) {
	if (movement > 0) {
		console.log(`Movement  ${index + 1}: You deposited ${movement} `);
	} else {
		console.log(`Movement  ${index + 1}: You withdrew ${Math.abs(movement)}`);
	}
}
