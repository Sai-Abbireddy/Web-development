// 1
marks=45
 if (marks>=90)
{
    console.log('A grade');
 }
 else if (marks>=70 && marks<90)
 {
     console.log('B grade');
 }else if (marks>=50 && marks<70){
    console.log('C grade');
}else    console.log('F grade');
 }

//2

const num1 = 10;
const num2 = 25;

for(let i = num + 1; i <= num2; i++){
    console .log(i);
}

//3

const number = 0;
number > 0
? console.log("Positive")
: number < 0
? console.log("Zero");


//4

const a=10, b=20, c=30;
console.log(a,b,c);

//5

let username = "admin";
let password = "12345";

if(username == "admin" && password === "12345"){
   console.log("Login Successful");
}else{
console.log("Invalid credentials");
}
   
//6

let paymentMethod = "credit";

switch(paymentMethod){
 case "credit":
    console.log("processing fee for credit payment: 2%"):
    break;
 case "debit":
    console.log("processing fee for debit payment: 1.5%"):
    break;
 case"paypal":
    console.log("processing fee for paypal payment: 3%"):
    break;
    default:
        console.log("Invalid payment method"):
}


//7


let current Temperature = 28;

let weather Condition = current Temperature>30?"Hot" :"Moderate";

console.log("Current weather condition:${weatherCondition} " );


//8

let targetNumber = 8;

let sum=0;
let currentNumber = 1;

do {
  sum += currentNumber;
  currentNumber++;
} while(currentNumber <= targetNumber):

console.log('sum of numbers from 1 to ${targetNumber}: ${sum}')




  









