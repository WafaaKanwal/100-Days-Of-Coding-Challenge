"use strict";
/*24. More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
write more tests. Have at least one True and one False result for each of the following:




• Test whether an item is in a array
• Test whether an item is not in a array*/
let Name = "Wafa";
let upperCaseWafa = "WAFA";
let ten = 10;
let twenty = 20;
let colors = ["blue", "green", "orange"];
//• Tests for equality and inequality with strings
console.log("Is Wafa is equal to Wafa?");
console.log(Name == "Wafa");
console.log("\nIs Wafa is not equal to Wafa?");
console.log(Name != "Wafa");
//• Tests using the lower case function
console.log("\nIs WAFA is equal to wafa after converting to lowercase?");
console.log(upperCaseWafa.toLowerCase() == "wafa");
console.log("\nIs WAFA is not equal to wafa after converting to lowercase?");
console.log(upperCaseWafa.toLowerCase() != "wafa");
////• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
//equal to
console.log("\nIs ten is equal to twenty?");
console.log(ten == twenty);
//not equal to
console.log("\nIs ten is not equal to twenty?");
console.log(ten != twenty);
//greater than 
console.log("\nIs ten is greater than twenty?");
console.log(ten > twenty);
//less than 
console.log("\nIs ten is less than twenty?");
console.log(ten < twenty);
//Greater than or equal to
console.log("\nIs ten greater than or equal to 5?");
console.log(ten >= twenty);
//Less than or equal to
console.log("\nIs ten less than or equal to twenty?");
console.log(ten <= twenty);
//• Tests using "and" and "or" operators
//using && (and)
console.log("\nIs twenty not equal to ten and twenty is greater than ten");
console.log(twenty != 10 && twenty > 10);
console.log("\nIs twenty not equal to ten and twenty is greater than thirty");
console.log(twenty != 10 && twenty > 30);
//using || (OR)
console.log("\n20 is equal to 50 or 20 is equal to 20?");
console.log(20 > 50 || 20 == 20);
console.log("\n20 is equal to 50 or 20 is equal to 20?");
console.log(20 > 50 || 20 != 20);
//• Test whether an item is in a array
//• Test whether an item is not in a array
console.log("\nIs orange included in my colors array?");
console.log(colors.includes("orange"));
//not include
console.log("\nIs orange not included in my colors array?");
console.log(!colors.includes("orange"));
