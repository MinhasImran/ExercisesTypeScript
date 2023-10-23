/*Animals: Think of at least three different animals that have a common characteristic. 
Store the names of these animals in a list, and then use a for loop to print out the name of each animal. 
• Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!*/
const Animals = ["Goat", "Sheep", "Deer"];
for (let p = 0; p < Animals.length; p++) {
  console.log(Animals[p]);
}
console.log("\nThese are all halal animals");
for (let p = 0; p < Animals.length; p++) {
  console.log(`Allah has permitted to eat ${Animals[p]} meat.`);
}
//Print sentence for each animal
//for (const p of Animals) {
//console.log(p);
//}
for (const p of Animals) {
  if (p === "Goat") {
    console.log(`${p} has a delicious meat.`);
  } else if (p === "Sheep") {
    console.log(`${p} is best for wool.`);
  } else if (p === "Deer") {
    console.log(`${p} runs very fast.`);
  }
}
//Common
console.log("\nWhat's common in these animals");
console.log("All the three animals are halal to eat have four legs");
