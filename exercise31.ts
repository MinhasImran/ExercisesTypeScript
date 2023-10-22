/*No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is printed.*/
//Empty user name case
const emptyUserNames: string[] = [];

//Non array empty case
let userNames: string[] = ["admin", "Ali", "Umar,", "Hassan", "Hussain"];
//functional case
function greetUsers(usernames: string[]): void {
  if (usernames.length === 0) {
    console.log("Please find some user");
    return;
  }
  for (const username of usernames) {
    if (username.toLowerCase() === "admin") {
      console.log("Hello admin, do you need any report?");
    } else {
      console.log(`Hello ${username}, thank you for visiting again `);
    }
  }
}
console.log(`For non empty username:\n`);
greetUsers(userNames);
//for emply array
userNames = [];
console.log(`for emply username:\n`);
greetUsers(emptyUserNames);
export {};
