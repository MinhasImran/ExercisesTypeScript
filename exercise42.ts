/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function 
called make_great() that modifies the array of magicians by adding the phrase the Great to 
each magician’s name. Call show_magicians() to see that the list has actually been modified.*/
const magName: string[] = ["Samri", "Hamoon", "Karnani"];

function show_magicians(magicians: string[]): void {
  for (const magician of magicians) {
    console.log(magician);
  }
}
show_magicians(magName);

function make_great(magicians: string[]): string[] {
  const greatmagicians: string[] = magicians.map(
    (magician) => `the Great ${magician}`
  );
  return greatmagicians;
}

//show_magicians(magName);
const greatmagicians: string[] = make_great(magName);
//Call function
console.log("\nGreat Magicians:");
show_magicians(greatmagicians);
