/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. 
The function should print a sentence summarizing the size of the shirt and the message printed on it. 
Call the function.*/
//Defining a function
const make_shirt = (
  size: string,
  message: string
): string => //it is output, here if we can also use "void" in place of string
  //till we don't use return line 6 sting will give an error
  {
    console.log(`Size:${size}, Message: ${message}`);
    return `Size: ${size}, Message: '${message}'`;
  };
//Call the function
let size: string = "Large";
let message: string = " This shirt is large size";
make_shirt(size, message);
make_shirt("Medium", "This is medium size shirt");
make_shirt("Small", "This shirt is small sized");
