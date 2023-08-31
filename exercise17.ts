//More Guests: add at the beginning of the array
let guestlist1: Array<string> = [
    "Imran Hussain",
    "Adnan Ibrar",
    "Allam Iqbal",
    "Tipu Sultan"
];
for (let guest of guestlist1) {
    console.log(`Hello, ${guest}, we can invite only two people for the dinner`)
}
// step 2 add new guest at beginning (unshift)
while (guestlist1.length> 2) 
{
    let guestlist2 = guestlist1.pop();
    console.log(`sorry ${guestlist2} we cannot invite you to dinner`);
}
for (let guest of guestlist1) {
    console.log(`Hello, ${guest}, you are still invited for the dinner`)
}
