/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() 
with a copy of the array of magicians’ names. Because the original array will be unchanged, 
return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names 
and one array with the Great added to each magician’s name.*/
const magName: string[] = ["Samri", "Hamoon", "Karnani"];
function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}
show_magicians(magName);

//great mag function
function make_great(magicians: string[]): string[] {
  const greatmagicians: string[] = magicians.map(
    (magician) => `the Great ${magician}`
  );
  return greatmagicians;
}
//modify the array to add great
const greatmagiciansNames: string[] = make_great(magName);
//call the function to show great
console.log("\nGreat Magicians:");
show_magicians(greatmagiciansNames);
//Call the function to show the original
console.log("\nOriginal Magicians:");
show_magicians(magName);
