//Section 1

//what types are these? Write your answer in a comment beside it.

1; // number
"cat"; // string
true; // boolean
[]; // array
{}; // object
1.1; // number
undefined; // undefined

//Section 2

// // what is the truthy/falsiness values of the following
// // write your answer in a comment beside it
// // you can use an if to test this...
1; //true
"cat"; //true
true; //true
NaN; //false
[]; //true
{}; //true
undefined; // false
""; //false
0; //false


// //Section 3

// //Using examples that are different from above...

// //3.1 Assign a variable that is a number
var number = 3;
// //3.2 Assign a variable that is a string
var string = "String";
// //3.3 Assign a variable that is a boolean
var boolean = false;
// //3.4 Assign a variable that is an object
var object = {objectName: "object"};

// //Section 4
// 4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
if(true) { 
  console.log('Hello');
} else {
  console.log('false');
};

//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

// //5.1. Assign the first element to a variable
var raccoon = animals[0];
console.log(raccoon);
// //5.2. Assign the last element to a variable
var gerbil = animals[3];
console.log(gerbil);
// //5.3. Assign the length of an array to a variable
var animalsLength = animals.length;
console.log(animalsLength);
//5.4. Add an item to the end of the array
animals.push('pig');
//5.5. Add an item to the start of the array
animals.unshift('duck');
console.log(animals);
//5.6. Assign the index of hedgehog to a variable
  for (var i = 0; i < animals.length ; i++) {
    if (animals[i] === 'hedgehog') {
     var hedgehogIndex = i;
    }
  }
console.log(hedgehogIndex);

//Section 6

// //6.1 Create an array of 5 vegetables
var vegetables = ['carrot', 'leek','potato', 'radish', 'parsnip']
// //6.2 Loop over the array and write to the console using a "while"
var i = 0;
while (i < vegetables.length) {
  console.log(vegetables[i]);
  i++;
}
// //6.3 Loop again using a "for" with a counter
for (var i = 0; i < vegetables.length; i++) {
  console.log(vegetables[i]);
};
// //6.4 Loop again using a "for of"
for (var vegetable of vegetables) {
  console.log(vegetable);
}

//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];
//7.1 Calculate the total cash in accounts

var totalCash = 0;
for (account of accounts) {
  totalCash += account.amount;
};
console.log(totalCash);

//7.2 Find the amount of money in the account with the largest balance

var amounts = [];
for (account of accounts) {
   amounts.push(account.amount);
};
amounts.sort();
amounts.reverse();
console.log(amounts[0]);

//7.3 Find the name of the account with the smallest balance

amounts.reverse();
var leastMoney = amounts[0];
for (account of accounts) {
  if (account.amount === leastMoney) {
    poorDude = account.name;
  }
};
console.log(poorDude);

//7.4 Calculate the average bank account value

var totalValue = totalCash / accounts.length;
console.log(totalValue);

//7.5 Find the value of marcs bank account

for (account of accounts) {
  if (account.name === 'marc') {
    console.log(account.amount);
  }
}

//7.6 Find the holder of the largest bank account

amounts.reverse();
for (account of accounts) {
  if (account.amount === amounts[0]) {
    console.log(account.name);
  }
}

//7.7 Calculate the total cash in business accounts

var totalBusinessFunds = 0;
for (account of accounts) {
  if (account.type === 'business') {
    totalBusinessFunds += account.amount;
  }
};

console.log(totalBusinessFunds);

//7.8 Find the largest personal account owner

var personalAccountAmounts = []

for (account of accounts) {
  if (account.type === 'personal') {
    personalAccountAmounts.push(account.amount);
  }
};

personalAccountAmounts.sort();
personalAccountAmounts.reverse();

for (account of accounts) {
  if (personalAccountAmounts[0] === account.amount && 'personal' === account.type) {
  console.log(account.name); 
}
}

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {
  name: 'Some Person',
  age: '102',
  height: 'Five foot Five',
  favouriteFood: 'Heinz Raviolli',
  eatMethod: 'noisy'
}