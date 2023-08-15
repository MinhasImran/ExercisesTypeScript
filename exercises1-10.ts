//Assign-01 Install Node.js, TypeScript and VS Code
//Done
let Q="Question Number ";
console.log (Q+2);
//Assign-02 Store a person's name in variable and print a message
let pn="Imran Hussain";
let pn1="Assalam o Alaikum "+ pn+ " would you like to stay here?";
let pn2=`Assalam o Alaikum ${pn}, would you like to stay here?`;
console.log(pn1);
console.log(pn2);
//Assign-03 defin variable and change cases
console.log (Q+3);
let upcs= pn.toUpperCase();

console.log(upcs);
console.log(
    `Hello ${pn.toUpperCase()}, would your like to eat something?`
);
let lwcs= pn.toLowerCase();
console.log(lwcs);
//title case is not clear
//Assgin=04 write quote of any famous person in quotations("")
console.log (Q+4 +" Famous person's quotations");
let fq="Hazrat Umar (r.a) said,";
let fq1=fq+ (' "I love Holy Prophet more than my life."');
console.log (fq1);

let f_person:string="Hazrat Umar (r.a) said"
let mess:string="I love Holy Prophet more than my life.";
console.log(`${f_person}, ${mess}`);
//Assign-05 Repeat with famous_Person and Message variables
console.log (Q+5);
let famous_person="Hazrat Umar (r.a) said,";
let message=famous_person+ (' "I love Holy Prophet more than my life."');
console.log(message);
// white spaces use '\n for vertical space, it works like enter a new line `\t for horizontal space it works like tab
//let name1="Muhammad Ali Jinnah";
//console.log(`\n ${name1}\n`);
//console.log(`\n \n ${name1}\n \n`);
//console.log(`\t ${name1}\t`);
//console.log(`\t \t ${name1}\t \t`);
//Assign-07 write addtion, substraction, multiplication & div
//console.log (Q+7 + " Add, substract, multiply and divide");
let name1:string="   Muhammad \n   Ali \t  Jinnah\t The \t Leader";
console.log(name1);
let n=8
console.log(n+0 + " =addition");
console.log(n-0 + " =substraction");
console.log(n*1 + " =multiplication");
console.log(n/1 + " =division");
console.log (Q+8+ " Create four lines");
let l="="
let ln="-"
const line = l.repeat(80);
const line1 = ln.repeat(80);
console.log(line);
console.log(line1);
console.log(`\t \t \t \t` + (5+3));
console.log(line1);
console.log(line);

console.log("-------------------------------");
console.log(n+0);
console.log("-------------------------------");
console.log(n-0);
console.log("-------------------------------");
console.log(n*1);
console.log("-------------------------------");
console.log(n/1);
console.log("-------------------------------");

console.log (Q+9 + " describe favorite number and print");
let n1:number =7
let n2:string=`My favourite number is ${n1}`;
console.log(n2)
console.log (Q+10 + " write comments");
//My name Imran Hussain
/* Imran Hussain, August 12, 2023
This program takes two number and return their sum */
const sum=(num1:number, num2: number)=>{
    return num1+num2;
}
console.log(sum (5, 9));
