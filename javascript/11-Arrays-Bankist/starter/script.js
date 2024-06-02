'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

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

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

accounts.forEach(function (user) {
  user.user_name = user.owner.split(" ").reduce((acc, ele) => `${acc}${ele[0]}`,"")
})

// the login function
let display_stats = function(user) {
  user.movements.forEach(function(mov, i, arr) {
    const options = {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    let mov_date = new Date(user.movementsDates[i])
    let date = Intl.DateTimeFormat(user.locale, options).format(mov_date)
  let mov_element = document.createElement('div')
  let stat = mov > 0 ? 'deposit' : 'withdrawal'
  let new_mov_html = ` <div class="movements__row">
          <div class="movements__type movements__type--${stat}">${i + 1} ${stat}</div>
          <div class="movements__date">${date}</div>
          <div class="movements__value">4 000€</div>
        </div>`
  mov_element.innerHTML = new_mov_html
  containerMovements.appendChild(mov_element)
  })
  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };
  let today = Intl.DateTimeFormat(user.locale, options).format(new Date())
  labelDate.innerHTML = today
  let total_balance = user.movements.reduce((acc, amm) => acc + amm,0)
  labelBalance.innerHTML = total_balance;
}

btnLogin.addEventListener('click', function(e) {
  e.preventDefault();
  let user_index 
  let theuser = {}
  let valid = false;
  let name = inputLoginUsername.value.toUpperCase();
  let pin = Number(inputLoginPin.value);
  for(let user of accounts) {
    if(user.user_name == name && user.pin == pin)  { 
      valid = true 
      theuser = accounts[accounts.indexOf(user)]
      }
    else {
      valid = valid
    }
  }
  if(valid) {
    display_stats(theuser)
  }
  else {
    return
  }
})

