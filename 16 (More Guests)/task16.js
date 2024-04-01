//Creating A Guest List Array
var guestList = ["Wafa", "Momin", "Hassan", "Nilam"];
//Making variable for those who cant come
var dontCome = guestList[0];
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
var middleIndex = Math.floor(guestList.length / 2);
//Adding a new guest to middle index of array
guestList.splice(middleIndex, 0, "Abdullah");
//print message of updated list
console.log("Updated List Of Our Guests.");
//sending a invitation message to our guests one by one by their names
guestList.forEach(function (guest) { return console.log("Assalamu Alaikum ".concat(guest, "! would you like to dinner with me tonight?")); });
