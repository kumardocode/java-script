// function decelaration


function describeCountry(country, population, capitalCity) {
	return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const firstCountryDetails = describeCountry('India', 8, 'Delhi');
const secondCountryDetails = describeCountry('USA', 6, 'WasingTon-DC');
const thirdCountryDetails = describeCountry('Paris', 12, 'France');
console.log(firstCountryDetails)
console.log(secondCountryDetails)
console.log(thirdCountryDetails)

//function-decleration part-2
//method hoisting eample function calling can be done before function decleration 

const percentageOfWorldValue1 = percentageOfWorld1(1441);
const percentageOfWorldValue2 = percentageOfWorld1(1890);
const percentageOfWorldValue3 = percentageOfWorld1(3452);

function percentageOfWorld1(populationValue) {
	const populationPercentage = ((populationValue / 7900) * 100);
	return populationPercentage;
}


console.log('percentageOfWorldValue1 : ', Math.trunc(percentageOfWorldValue1) + ' %');
console.log('percentageOfWorldValue1 : ', Math.trunc(percentageOfWorldValue2) + ' %');
console.log('percentageOfWorldValue1 : ', Math.trunc(percentageOfWorldValue3) + ' %');



//function expression 

const percentageOfWorldTwo = function (populationValue) {
	const populationPercentage = ((populationValue / 7900) * 100);
	return populationPercentage;
}
const percentageOfWorldValueOne = percentageOfWorldTwo(3421);
const percentageOfWorldValueTwo = percentageOfWorldTwo(6000);
const percentageOfWorldValueThree = percentageOfWorldTwo(4356);

console.log('percentageOfWorldValueTwo : ',Math.trunc(percentageOfWorldValueOne) + ' %');
console.log('percentageOfWorldValueTwo : ',Math.trunc(percentageOfWorldValueTwo) + ' %');
console.log('percentageOfWorldValueTwo : ', Math.trunc(percentageOfWorldValueThree) + ' %');


//arrow function 


const percentageOfWorld3 = populationValue => populationPercentage = ((populationValue / 7900) * 100);


const percentageOfWorldValue_One = percentageOfWorld3(9087);
const percentageOfWorldValue_Two = percentageOfWorld3(9009);
const percentageOfWorldValue_Three = percentageOfWorld3(1207);

console.log('percentageOfWorldValue_Three : ',Math.trunc(percentageOfWorldValue_One) + ' %');
console.log('percentageOfWorldValue_Three : ',Math.trunc(percentageOfWorldValue_Two) + ' %');
console.log('percentageOfWorldValue_Three : ',Math.trunc(percentageOfWorldValue_Three) + ' %');


//function calling inside other function
console.log("====function calling inside other function====");

const describePopulation = (country, population) => {
  const countryPopulationPercentage = percentageOfWorld3(9080);
	const countryDescription = `${country} has ${population} million people, which is about [ ${Math.round(countryPopulationPercentage)} % ] of the world total population`
	return countryDescription;
}

console.log(describePopulation('India', 90000));