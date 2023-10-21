//typescript object store in array and use in a program
const flowers = {
  name: "Spring Delight",
  price: 400,
  description: "A set of beautiful spring flowers",
};
//define an arrany

let flower1: Array<typeof flowers> = [];

//pushing mulitple object
flower1.push(flowers);

flower1.push({
  name: "Summer Flower",
  price: 500,
  description: "Summer beauty",
});
let flower2 = {
  name: "Winter Season Delight",
  price: 1000,
  description: "A set of beautiful winter flowers",
};
flower1.push(flower2);
console.log(flower1);
