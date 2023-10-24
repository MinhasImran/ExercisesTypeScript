/*Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.*/
const make_shirt = (
  size: string = "Large",
  message: string = "I love typescript"
): void => //it is output, here if we can also use "void" in place of string
  //till we don't use return line 6 sting will give an error
  {
    console.log(`Size:${size}, Message: ${message}`);
    //return `Size: ${size}, Message: '${message}'`;
  };
// large shirt with default message
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I don't like small sizes");
//Call the function
/*let size: string = "Large";
let message: string = " This shirt is large size";
make_shirt(size, message);
make_shirt("Medium", "This is medium size shirt");
make_shirt("Small", "This shirt is small sized");*/
