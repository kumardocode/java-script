console.log("----MAP----")
const currencies = new Map([
 ['USD', 'UNITED STATES OF AMERICA'],
 ['EUR', 'EURO'],
 ['GBP','POUND STERLING'],
])

currencies.forEach(function (currency, key, map) {
	console.log(`You have currency \$${key}  for ${currency}`)
});

console.log("----SET----")
const currenctType = new Set([
	'USD',
	'EUR',
	'INR',
	'USD',
	'DINNAR',
	'INR',
	'USD'
])


currenctType.forEach(function (value) {
	console.log(`You have ${value}`)
})