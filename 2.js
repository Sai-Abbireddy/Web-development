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



