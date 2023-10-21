//Intentional error in array
function fruits(name: string, color: string, taste: string) {
  return {
    name,
    color,
    taste,
  };
}
// Create an array of fruits
const fruits1 = [
  fruits("Mango", "Yellow", "Sweet"),
  fruits("Pineaple", "Yellow/green", "Sour"),
  fruits("Grapes", "Green", "Bitter"),
  fruits("Orange", "Orange col", "Mix"),
  fruits("Watermelon", "Dark green", "Sweet"),
];
//Access and invalid index
const invalidIndex = 10; // We have only 5 objects, it will give error
console.log(`Fruit at index ${invalidIndex};`, fruits1[invalidIndex]);
//Print the fruits
fruits1.forEach((fruits) => {
  console.log(
    `Name: ${fruits.name}, Color:${fruits.color}, Taste: ${fruits.taste}`
  );
});
