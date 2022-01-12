// let numNeighbours = prompt('How many neighbour countries does your country have?');
// if (Number(numNeighbours) === 1) {
// 	console.log(`Only ${numNeighbours} Border`);
// } else if (Number(numNeighbours) > 1) {
// 	console.log(`Only ${numNeighbours} Border`);
// } else {
// 	console.log(`No Border`);
// }

let countryIndiaPopulation = Math.round((Math.random() *40) +20) + ' million'
console.log(countryIndiaPopulation);
const countryIndiaLanguage = 'en';
const indiaIsAnIsLand = false;
const countryName = 'india';

if (countryName === 'india' && countryIndiaPopulation <= '50 million' && countryIndiaLanguage === 'en' && !indiaIsAnIsLand) {
	console.log(`'You should live in ${countryName}`)
} else {
	console.log(`${countryName} does not meet to your criteria..`)
}