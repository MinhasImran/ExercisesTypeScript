let Q1="Question No. "
console.log (Q1+11 + " Use Array and write names of friends");
let names:string[]=[`Imran`, `Adnan`, `Usman`, `Soban`];

console.log (names [1])
console.log (names [3])

console.log (Q1+12 + " Use Array and greet friends");
let mes:string=(`Assalam o Alaikum. You are a lovely person Mr. `);
console.log (mes+ names [0]);
console.log (mes+ names [1]);

console.log (Q1+13 + " List of statement and favorite vehicles");
let auto=(" Range Rover ")
let state=["I would love to drive", "I would like to travel around the world on", "The strongest vehicle to travel on mountain is"];
console.log(state [0]+auto);
console.log(state [2]+auto);
let mes1:string=(" Assalam o Alaikum I am happy on your successful completion of business orders and establishing a great business empire. I would like to invite your at dinner on August 23, 2023 at 9:00 PM, at my home. Waiting for your response. Regards Imran");
console.log("Dear Mr. "+ names[0]+mes1);
console.log("Dear Mr. "+ names[2]+mes1);

console.log (Q1+14 + " Guest list and invitation");
let glist: Array<string> = [
    "Imran Hussain",
    "Adnan Ibrar",
    "Allam Iqbal"
];
//Loop for each guest name
glist.forEach((guestName) =>
{
console.log(`Dear ${guestName}, you are invited to join the conference.`)
})
console.log (Q1+15 + " One Guest can't come send new set of invitation");
/*let glist1: Array<string> = [
    "Imran Hussain",
    "Adnan Ibrar",
    "Allam Iqbal"
];*/
//Step 1 Print the name of guests who can't come
let gcnt: string = "Allama Iqbal"
console.log(`${gcnt}, can't come to conference.`)
//Step 2 Replace the name of guest 
let newg:string = "Sir Syed Ahmed"
let indexOfgcnt:number = glist.indexOf(gcnt)
//console.log(indexOfgcnt)

if (indexOfgcnt !== -0)
{
    glist [indexOfgcnt] = newg
}
//console.log(glist1[2])
// print second set of invitation
console.log("Second set of invitation messages:")
glist.forEach((guest: string) =>
{
    console.log( `Dear ${guest}, you are invited to conference.`)
})
// In 15 name not replaced??