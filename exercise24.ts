/* More Conditional Tests: You don’t have to limit the number of tests you 
create to 10. If you want to try more comparisons, write more tests. 
Have at least one True and one False result for each of the following:*/
const str1: string = "Good Morning";
const str2: string = "good morning";
//Euqal and not equal test
console.log(str1 === str2); //false
console.log(str1 !== str2); //true
//lower case test
console.log(str1.toLowerCase() === str2); //true
//numerical test
const num1: number = 100;
const num2: number = 50;
console.log(num1 === num2); //false
console.log(num1 !== num2); //true
console.log(num1 > num2); //true
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //false
//tests with and or functions
const a: number = 50;
const b: number = 100;
const c: number = 150;
console.log(a < b && b < c); //true
console.log(a < b || b > c); // true at least one
console.log(a > b && b > c); //false
console.log(a > b || b > c); // true at least one both false
//Test whether item present in the array
const cars: string[] = [`Honda`, `Toyota`, `Audi`];
console.log(cars.includes(`Audi`)); //true
console.log(cars.includes(`Mercedeze`)); //false
