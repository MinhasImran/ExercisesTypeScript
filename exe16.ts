//More Guests: add at the beginning of the array
let glist: Array<string> = [
    "Imran Hussain",
    "Adnan Ibrar",
    "Allam Iqbal"
];
for (let guest of glist) {
    console.log(`Hello, ${guest}, we found a bigger table`)
}
// step 2 add new guest at beginning (unshift)
let newg:string= "Quide Azam"
glist.unshift(newg)
console.log(glist);
// Step 3 add guest in the middle of array
let newg1:string= "Sir Syed Ahmed" 
let midIndx: number =Math.floor(glist.length/2)
glist.splice(midIndx, 0, newg1)
console.log(glist);
// Step 4 Use append and add a new guest at the end
let newg2:string="Tipu Sultan"
glist.push(newg2)
console.log(glist);
// last step print a new set of inv to all 
console.log("New set of invitation:")
for(let guest of glist) 
{
    console.log(`Dear ${guest}, you are invited to conference`)

}