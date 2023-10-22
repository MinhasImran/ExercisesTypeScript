/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
const favFruits: string[] = ["mango", "grapes", "Lyche", "blueberry"];
if (favFruits.includes("blueberry")) {
  console.log("I like blueberry");
}
if (favFruits.includes("mango")) {
  console.log("Mango is a king of fruits");
}
if (favFruits.includes("grapes")) {
  console.log("Grapes are delicious");
}
if (favFruits.includes("Orange")) {
  console.log("Oranges are tasty");
}

let a = favFruits.includes("Apple");
console.log(a);
