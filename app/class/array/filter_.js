const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];


const checkDeposit = ((accounts) => {
  return accounts.map((account) => {
    const depositArr = account.movements.filter((movement) => {
      return movement > 0;
    });
    return depositArr
  });
});

const checkWithdrawal = ((accounts) => {
  let withDrewArr;
  return accounts.map((account) => {
    withDrewArr = account.movements.filter((movement) => {
      return movement < 0;
    });
    return withDrewArr;
  });
});

const checkAuthentication = (accounts) => {
    let userId;
  accounts.map((account) => {
    userId = account.owner;
    userId = userId.toLowerCase().split(' ').map((userLogin) => {
      return userLogin[0];
    }).join('')
    console.log(userId);
  })
}


const checkCashFlowAndUserAutherization = (accounts,callback) => {
  const getDepositedAmount = callback(accounts);
  const getWithdrewAmount = callback(accounts);
  const getUserLogin = callback(accounts);
}

checkCashFlowAndUserAutherization(accounts, checkDeposit);
checkCashFlowAndUserAutherization(accounts, checkWithdrawal);
checkCashFlowAndUserAutherization(accounts, checkAuthentication);