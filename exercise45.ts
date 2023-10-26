/*Cars: Write a function that stores information about a car in a Object. The function 
should always receive a manufacturer and a model name. It should then accept an arbitrary 
number of keyword arguments. Call the function with the required information and 
two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned 
to make sure all the information was stored correctly.*/
function make_Car(
  manufacturer: string,
  model: string,
  ...properties: [string, any][]
): any {
  const car: any = {
    manufacturer,
    model,
  };
  for (const [key, value] of properties) {
    car[key] = value;
  }
  return car;
}
// usage
const myCar: string = make_Car(
  "Civic",
  "Honda",
  ["color", "White"],
  ["Optional Featurs", "Oriel"],
  ["Speed", "240 KM/Hour"]
);
console.log(myCar);
