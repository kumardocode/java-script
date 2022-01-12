//closure example 1

const secureBooking = () => {
	let passangerCount = 0;
	return function() {
		passangerCount++;
		console.log(`Total ${passangerCount} Passangers`)
	}
}

const booker = secureBooking();
booker();
booker();

console.dir(booker)

//closure example 2

let f;
const g=()=>{
	const num1 = 3;
	f =()=> {
	 console.log(`After multiplication : ${num1 * 20}`);
	}
}

const h=()=>{
	const num1 = 23;
	f =()=> {
	 console.log(`After multiplication : ${num1 * 2}`);
	}
}

g();
f();

h();
f();

//closure example 3

const boardpassangers = (numberofPassangers, wait) => {
	const perGroup = numberofPassangers / 3;
	setTimeout(() => {
		console.log(`We are boarding all ${numberofPassangers} passangers`);
		console.log(`All the passangers are divided into 3 group with each having ${perGroup} passangers`)
	},wait * 1000)
console.log(`We will start boarding in ${wait} seconds`)
}
boardpassangers(300, 2);

(function () {
const header = document.querySelector('h1');
	header.style.color = 'red';
	let flag = true;
	document.querySelector('body').addEventListener('click', function () {
		if (flag) {
			header.style.color = 'blue';
			flag = false;
		} else {
			header.style.color = 'red';
		}
	})
})();
