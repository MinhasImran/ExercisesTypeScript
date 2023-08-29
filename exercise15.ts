let glist1: Array<string> = [
    "Imran Hussain",
    "Adnan Ibrar",
    "Allam Iqbal"
];
//Step 1 Print the name of guests who can't come
let gcnt: string = "Allama Iqbal"
console.log(`${gcnt}, can't come to conference.`)
//Step 2 Replace the name of guest 
let glist2=glist1.pop()
let glist3=glist1.push(`Sir Syed Ahmed Khan`)
//console.log(glist3);

console.log("Second set of invitation messages:")
glist1.forEach((guest: string) =>
{
    console.log( `Dear ${guest}, you are invited to conference.`)
})