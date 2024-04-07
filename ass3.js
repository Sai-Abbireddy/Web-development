//1


const ordersList = {
  {name:"Laptop", price: 120000},
  {name:"Laptop", price: 70000},
  {name:"Mobile Charger", price:1500},
  {name:"Laptop Charger", price:10500},
};

let sum = 0;
ordersList.forEach((data) => (sum += data.price));

console.log('The total price is Rs.${sum}' );



//2



function randomNumberGenerator() {
    const randomNumber = Math.floor (Math.random()*100);
    console.log(randomNumber)
}
 
function printWithInterval(){
    randomNumberGenerator();
    setInterval(randomNumberGenerator,2000);
}

printWithInterval();



//3


let expenses =[
 {amount:100, category:"Utilities" },
 {amount:200, category:"Groceries" },
 {amount:50, category:"Entertainment" },
];

let expensesWithTax = expenses.map((expense) => {
    let tax = expense.amount* 0.1;
    return{ ...expense, tax : tax};
});

console.log("Expenses with Tax:", expenseWithTax);

output:
Expenses With Tax: [
    {amount: 100, category: 'Utilities', tax: 10 },
    {amount: 200, category: 'Groceries', tax: 20},
    {amount: 50, category: 'Entertainment', tax: 5}
]

//4




Let expenses = [
    {amount :100,category: "Utilities"},
    {amount :200, category: "Groceries"},
    {amount :50, category: "Entertainment"},
];

let groceriesExpenses = expenses.filter(
    (expense) => expense.category === "Groceries"8+
); 

console.log( "Groceries Expenses:", groceriesExpenses);


Output:
Groceries Expenses:[{ amount:200, category:'Groceries'} ]





//5


Let expenses = [
    {amount : 100, category: "Utilities" },
    {amount : 200, category: "Groceries" },
    { amount : 50, category: "Entertainment" },
];

let totalExpenses = expenses.reduce{(acc, expense) => acc + expense.amount, 0};

console .log("Total Expense:" ,  totalExpenses);

//Output:
Total Expenses : 350




//6  


let expenses = [
    { amount : 100, category: "Utilities" },
    { amount : 200, category: "Groceries" },
    { amount : 50, category: "Entertainment" },
];
function categorizeExpense(expense) {
    if( expense.amount > 100) {
        return 
    }
}

let categorizeExpenses = expenses.map((expense) =>
categorizeExpense(expense));

console.log("Categorized Expenses:", categorizedExpenses);

//Output:
Categorized Expenses: { 'Low Expense', 'High Expense', 'Low Expense '}



//7




let originalNumbers = {2,5,8,10,3};

originalNumbers.forEach((number, index, array) => {
    array[index] = number *2;
});

console.log("Doubled Numbers:", originalNumbers);

Output:Doubled Numbers: [ 4,10,16,20,6 ]



//8



let evenNumbers = [];

originalNumbers.forEach(number => {
    if (number %2===0){
        evenNumbers.push(number);
    }
});

console.log("Even Numbers:", evenNumbers);

Output: Even Numbers:[ 2,8,10 ]








