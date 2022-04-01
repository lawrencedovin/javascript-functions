//This method adds two or more strings and returns a new single string.

let str1 = new String( "This is string one" ); 
let str2 = new String( "This is string two" ); 
let str3 = str1.concat(str2.toString());
console.log("str1 + str2 : "+str3)

// output:
// str1 + str2 : This is string oneThis is string two