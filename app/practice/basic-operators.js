let currentPopulation = 1230; //in million
let firstHalfpopulationOfCountry = currentPopulation / 2;
let secondHalfPopulationOfCountry = firstHalfpopulationOfCountry;

console.log(`People live in firstHalf of country ==> ${firstHalfpopulationOfCountry} :\n People live in secondHalf of the country: ${secondHalfPopulationOfCountry}`);

currentPopulation++;
console.log(`Incremented populaton of country`, currentPopulation);

let populatonOfFinland = 0.666 //in million

if (currentPopulation > populatonOfFinland) {
	console.log(`India (my country is larger population than fionland)`)
} else {
	console.log(`Finland (my country is larger population than india)`)
}

if (_.isEmpty(currentPopulation) < 33) {
	console.log('Bellow average');
}

const description = `Banglore is in India and its ${currentPopulation} million people speaks Hindi`;
console.log(description);