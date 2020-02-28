const balance = document.getElementById('balance');
const money_plus = document.getElementById('money-plus');
const money_minus = document.getElementById('money-minus');
const list = document.getElementById('list');
const form = document.getElementById('form');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummyTransactions = [
  {
    id: 1,
    text: 'Flower',
    amount: -20
  },
  {
    id: 2,
    text: 'Salary',
    amount: 6000
  },
  {
    id: 3,
    text: 'Book',
    amount: -30
  },
  {
    id: 4,
    text: 'Camera',
    amount: -700
  }
];

let transactions = dummyTransactions;

//Add transactions to DOM list
function addTransactionDOM(transaction) {
  //Get sign
  const sign = transaction.amount < 0 ? '-' : '+';
  const item = document.createElement('li');
  //add class based on value
  item.classList.add(transaction.amount < 0 ? 'minus' : 'plus');
  //Math.absolute if the number is negative it will turn it into a possitive one
  item.innerHTML = `
  ${transaction.text} <span>${sign}${Math.abs(
    transaction.amount
  )}</span><button class="delete-btn">x</button>
  `;
  list.appendChild(item);
}
//upadye the balance income and expense
function updateValues() {
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  console.log(total);
}

//Init app
function init() {
  list.innerHTML = '';
  transactions.forEach(addTransactionDOM);
  updateValues();
}
init();
