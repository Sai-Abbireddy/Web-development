//1


const square = (num) =>num * num;

const number = 10;

const squareNumber = squareNumber(number);

console.log("Square:", squareNummber);


//2

const ages = [19,22,19,24,20,25,26,24,25,24];

//Step 1: Sort the array
ages.sort((a,b) =>a-b);

//Step 2: Find the min and max age
const minAge = ages[0];
const maxAge = ages[ages.length-1];

//Step 3: Find the median age
let medianAge;
if(ages.length %2 === 0) {
    const mid1 = ages[Math.floor(ages.length/2)-1];
    const mid2 = ages[Math.floor(ages.length/2)];
    medianAge = (mid1+mid2)/2;
}else{
    medianAge = ages[Math.floor(ages.length/2)]
}
    

//Step 4: Find the average age 
const sumAges = ages.reduce((sum,age) =>sum+age, 0);
`const averageAge = sumAges / ages.length;

//Step 5: Find the range of ages
const ageRange = maxAge - minAge;

//Step 6: Compare (min - average) and (max - average)
const minDifference = Math.abs(minAge - averageAge);
const maxDifference = Math.abs(maxAge - averageAge);

console.log('Sorted Ages:' , ages)
console.log('Min Age:',maxAge);
console.log('Max Age:', maxAge);
console.log('Median Age:', medianAge);
console.log('Average Age:', medianAge);
console.log('Age Range:', ageRange);
console.log('Min - Average Difference:', minDifference);
console.log('Max - Averege Difference:', maxDifference);




//3



const contactMap = new Map()

//Adding contacts to the Map
contactMap.set("John",{
    age:30,
    email: "john@example.com",
    locatin: "Bangalore",
});
contactMap.set("Alice", {
    age:25,
    email:"alice@example.com",
    locatin:"kolkata",
});
contactMap.set("Bob",{
    age:35,
    email:"bob@example.com",
    location:"UP",
});

// Function to retrieve contact details based on name
function getContact(name){
   return contactMap.get(name);
}

console.log(getContact("John"));





//4


const person = { name:"Alice", age:25};
const person = { name:"Bob', age:30};

function introduce() {
    console.log( 'Hello, I'm ${this.name}, and I'm ${this.age} years old.' );
}
introduce.call(person2);



//5



let uniqueNumbers = new set{[3,7,5,7,2,3,8]};
numbers 

let numbersquareMap = new Map();

uniqueNumbers.forEach(number =>{
    numberSquareMap.set(number,number*number);
});

console.log("Unique Numbers:");
console.log(Array.from(uniqueNumbers).join(', '));

console.log("\nNumber - square Map:");
numberSquareMap.forEach(square, number)=>{
    console.log('${number} : ${square}');
});



//6


//Task 1: Create teh displayInfo function
function displayInfo(name,role){
    console.log('Name: ${name}, Role: ${role} ');
}


//Task 2: Use Call to invoke displayInfo with specific arguments
displayInfo.call(null, "prabir", "Developer");


//Task 3: Use apply to involve displayInfo with arguments as an array
displayInfo.call(null,["son", "SDE"]);


//Task 4: Create the greet function 
function greet(){
    console.log("Hello, ${ this name}!');
}


//Task 5: Use bind to create a new function with a specific context
const user = {name:"PK"};
const boundgreet = greet.bind(user);
boundGreet();




//7


//Task 1: Create the calculator object
const calculator = {
   add:function(a,b) {
    return a+b;
   },
   subtract: function(a,b) {
    return a-b;
   },
   multiply: function(a,b) {
    return a*b;
   },
   calculate: function (operation,a,b) {
    if(operation === 'add'){
       return this.add(a,b) ;
    }else if(operation === 'subtract') {
        return this.subtract(a,b);
    }else if(operation === 'multiply') {
        return this.multiply(a,b);
    }
   },
};

//Task 3: Use call to perform an addition operation
const additionResult = calculator.calculator.call(calculator, 'add', 5,3);
console.log('Addition Result: ${additionResult} ');


//Task 4:Use apply to perform a multiplication operation with arguments as an array
const multiplicationResult : calculator.calculate .apply(calculator,['multiply',4,2]);
console.log('Multiplication Result: ${multiplicationResult}');
Result : 8


//Task 5:Create the discountCalculator object 
const discountCalculator = {
    discountpercentage:10,
    applyDiscount:function (amount) {
        return amount - (amount*this.discountpercentage)/100;
    },
};


//Task 6:Use bind to create a new function bound to discountCalculator
const calculatorDiscount =
discountCalculator.applyDiscount.bind(discountCalculator);
const discountAmount = calculateDiscount(100);
console.log('Discount Amount: ${discountAmount} ');//Discounted Amount:90




