'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2,
  minBalance: 25000,
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  minBalance:25000,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  minBalance:25000,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  minBalance:25000,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

let inputLoginUsername = document.querySelector('.login__input--user');
let inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const errorMessage = document.querySelector('.error');


const displayMovements = ((movements) => {
  containerMovements.innerHTML = ``
  movements.forEach((movement, index) => {
    const type = (movement > 0)? 'deposit':'withdrawal'
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${index + 1} ${type}</div>
      <div class="movements__date">3 days ago</div>
      <div class="movements__value">${movement}</div>
    </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html);
  })
})
displayMovements(account1.movements);

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;
// calculate total deposits UDS 

const calcDisplaySummary = (movements) => {
  const income = movements.filter((movement) => movement > 0).reduce((accum, current) => accum + current, 0);
  const expense = movements.filter((movement) => movement < 0).reduce((accum, current) => accum + current, 0)
  const calculateInterest = movements.filter((movement) => movement > 0).map((deposit) => {
    return (deposit * 1.2) / 100;
  }).filter((int, i, arr) => {
    return int >= 1;
  }).reduce((accum, current) => {
    return accum + current
  });
  labelSumIn.textContent = income + '$'
  labelSumOut.textContent = Math.abs(expense) + '$'
  labelSumInterest.textContent = calculateInterest +'%'
}
calcDisplaySummary(account1.movements)

//login user 

const getUserLoginName = (accounts) => {
  let userName;
  return function (accounts) {
    accounts.map((account) => {
      userName = account.owner.toLowerCase().split(' ').map((user => {
        return user[0]
      })).join('')
      account.userName = userName;
    })
    return userName;
  }
}

let currentAccount;
btnLogin.addEventListener('click', (event) => {
  let userLoginName;
  let userLoginDetails;
  let isvalidUser;
  let account;
  event.preventDefault();
  userLoginName = getUserLoginName(accounts);
  userLoginDetails = userLoginName(accounts); // example of function returning function
  

  currentAccount = accounts.find((account) => {
    return account.userName === inputLoginUsername.value 
  })
  
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome back ${currentAccount.owner.split(' ')[0]}`
    containerApp.style.opacity = 100;
  } else {
    isvalidUser = `INVALID USER`;
  }

  //display error message
 if(isvalidUser === `INVALID USER`){
    console.log('2')
    const html = `INVALID USER`
   errorMessage.innerHTML = html
   setTimeout(() => {
     errorMessage.innerHTML = ''
   },5000)
  }
})

// an example to show display summary 
const totalDepositUSD = movements.filter((movement) => {
  return movement > 0
}).map((eur) => {
  return eur * eurToUSD
}).reduce((accum, current) => {
  return accum + current
},0)
//console.log(totalDepositUSD);
/////////////////////////////////////////////////
