//java-script do not have any term of passing-by-refference it pass the value as refference it has its own
//memory area in the heap, value pass by refferenc can be manipulated outside but in case of 
//primitive type if we pass the value it will be local value to the scope it do not reflect any out side the scope 
//it do not refelect the global scope variable

const flight_Num = '48SIXINDIGO'
const johnDetails = {
	name: 'John Doe',
	passportDetail: 120719929009,
	seatNumber: '20B',
	flightName: ['Indigo']
};

const flightStatus = (flightNum) => {
	if (flightNum === '48SIXINDIGO') {
		return true
	} else {
		return false;
	}
}
const checkIn = (flight_Num, passangerDetails) => {

	if (passangerDetails.passportDetail === 120719929009) {
		console.log(`Passanger Please checkeIn`)
	} else {
		console.log(`Wrong Passport`)
	}

	const flightStatusCheck = flightStatus(flight_Num);
	if (flightStatusCheck) {
		return `Please checkIn! on flight ${flight_Num}`
	} else {
		return `Please Wait!`
	}
	
}


const checkInResult = checkIn(flight_Num, johnDetails);
console.log(checkInResult);