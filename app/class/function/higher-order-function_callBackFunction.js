//function calling other function and returning other function
//There is higher-order-function it also helps to achieve the high order abstraction and without knowing the 
//hiding internal details it call the other operation --> it do not know what other function is performing internally 
//it call the other function 

//callback function
const oneWord = (strToBeTransformed) => {
	return strToBeTransformed.replace(/ /g,'').toLowerCase()
};

const upperFirstWord = (strToBeTransformed) => {
	const [first, ...others] = strToBeTransformed.split(' ');
	return [first.toUpperCase(), ...others].join(' ');
};

const transFormed = (string,callback) => {
	console.log(`Original string : `, string);
	console.log(`Transformed string : ${callback(string)}`);
	console.log(`Transformed string oneWord : ${callback(string)}`);
 }

transFormed('JavaScript is best', upperFirstWord);
transFormed('JavaScript is best', oneWord);

//function returning function

const greet = function (greeting) {
	return function(name) {
		console.log(`${greeting} ${name}`);
	}
}
const greetingQuote = greet('Hello'); // function that return other function get stored in the variable 
greetingQuote('John');
greetingQuote('Doe');
greet('Hello')('Kumar'); //2nd way of calling 

//arrow function
const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Ola Hi')('Williams');

//the call and apply method this explictly tells the this keyword what to use 
//the very first argument of the call/apply method is the object name that refers to this 

const lufthasana = {
	airline: 'lufthasana',
	iatacode: 'LH',
  bookings: [],
  numberOfPlane: 300,
	book(flightNum, passangerName, numberOfSeat) {
		console.log(`${passangerName} booked ${numberOfSeat} seats in ${this.airline} airline iatacode: ${this.iatacode} || flightNumber: ${flightNum}`)
		this.bookings.push({
			'airline': this.airline,
			'iatacode': this.iatacode,
			'flightNum':flightNum,
			'passangerName': passangerName,
			'numberOfSeat': numberOfSeat
		}
		);
  },
  buyPlane() {
    console.log(`BUY PLANE`, this)
    this.numberOfPlane++;
  },
}

lufthasana.book('X16SEINDIGO', 'JOHN', 2);
lufthasana.book('XAIFEAIRASIA', 'DOE', 4);
//console.log(lufthasana.bookings)

const euroWings = {
  airline: 'euroWings',
  iatacode: 'EW',
  bookings:[],
}

const book = lufthasana.book
book.call(euroWings, 'X16SEINDIGO', 'MARRY', 3)
book.call(euroWings, 'X16SEINDXTGO', 'WILLIAMS', 3)
//console.log(euroWings.bookings)

//apply method >>> only takes array as input 
const swissAirlines = {
	airline: 'swissAirline',
	iatacode: 'SW',
	bookings: []
}
const swissAirParamData1 = ['SWISSXTMP59', 'KUMAR', 3]
const swissAirParamData2 = ['SWISSXTMP90', 'RAHUL', 3]
book.apply(swissAirlines, swissAirParamData1);
book.apply(swissAirlines, swissAirParamData2);
//console.log(swissAirlines.bookings)

//bind method returns a new fuction
//in bind method this keyword is bounded where we expect to point this keyword

const lufthasanaBind = book.bind(lufthasana);
const euroWingsBind = book.bind(euroWings);
const swissAirlineBind = book.bind(swissAirlines);

lufthasanaBind('LUFTAN007X', 'Denis', 7);
lufthasanaBind('LUFTAN009XT', 'RITHIE', 2);

//alternative of passing argument using bind method that binds this keyword explicitly where to point
const lufthasanaBind2 = book.bind(lufthasana,'LUFTAN0BIND@2');
lufthasanaBind2('MOHAN', 16);

const buyPlane = document.querySelector('.buy').addEventListener('click', lufthasana.buyPlane.bind(lufthasana))


//use of bind in other way 

const addTax = (rate,value) => {
	return (value + value * rate);
}
console.log(addTax(0.1, 200))

const addVaT = addTax.bind(null, 0.23);
console.log(addVaT(100))



// make this function returning new function advanse topic 
const addTaxOne = (rate) => {
	return function( value){
		return value + value * rate;
	}
}

const addVaTOne = addTaxOne(0.23);
console.log(addVaTOne(300))
console.log(addVaTOne(200))
