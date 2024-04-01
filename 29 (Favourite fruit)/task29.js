/*29.Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check
for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
//creating an array
var favourite_fruits = ["Strawberry", "Mango", "Raspberry"];
//Using 5 If statements
if (favourite_fruits.includes("Mango")) {
    console.log("I really like Mangoes.");
}
if (favourite_fruits.includes("Strawberry")) {
    console.log("I really like Strawberries.");
}
if (favourite_fruits.includes("Raspberry")) {
    console.log("I really like Raspberries.");
}
if (favourite_fruits.includes("Banana")) {
    console.log("I really like Bananas.");
}
if (favourite_fruits.includes("Cherry")) {
    console.log("I really like Cherries.");
}
