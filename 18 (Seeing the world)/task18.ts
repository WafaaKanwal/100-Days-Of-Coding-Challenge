/*18. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.*/

let places: string [] = ["Australia", "Egypt", "Brazil", "Dubai"];
console.log('Original order:' , places);

//• Print your array in alphabetical order without modifying the actual list.
console.log('Alphabetical order:' , [...places].sort());

//• Show that your array is still in its original order by printing it.
console.log('Still in Original order:' , places);

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log('Reverse order:' , [...places].sort().reverse());

//• Show that your array is still in its original order by printing it again.
console.log('Still in Original order:' , places);

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log('Original array Reversed:' , places.reverse());

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log('Back to Original order:' , places.reverse());

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log('Sorted in Alphabetic order:' , places.sort());

//• Reverse the order of your list. Print the array to show that its order has changed.
console.log('Original array Reversed again:' , places.reverse());