/*16.More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests
to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that
you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/


//Creating A Guest List Array
let guestList = ["Wafa", "Momin", "Hassan", "Nilam"];

//Making variable for those who cant come
let dontCome = guestList[0];

//print name of guest who dont come
console.log(dontCome, "nahi aa rahi.");

//Add or Remove values from guest array
guestList.splice(0, 1, "Aman");

//message print for bigger table
console.log("Good News! We have found a bigger table for dinner.");

//Adding a new value at starting index o Array
guestList.unshift("Aina");

//Adding a new value at ending index of array
guestList.push("Fatima");

//get a middle index of guest list Array
let middleIndex: number = Math.floor(guestList.length / 2);

//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Abdullah");

//print message of updated list
console.log("Updated List Of Our Guests.");

//sending a invitation message to our guests one by one by their names
guestList.forEach(guest => console.log(`Assalamu Alaikum ${guest}! would you like to dinner with me tonight?`));