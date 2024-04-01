/*Question 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time,
and you can only invite two guests.

Explain & TIP:Sometimes plans change, and you'll need to adjust your guest list.
Removing guests from your list is straightforward but should be done thoughtfully.*/

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
guestList.forEach((guest) =>
  console.log(
    `Assalamu Alaikum ${guest}! would you like to dinner with me tonight?`
  )
);

//inform that only two people can be invited
console.log(
  "Unfortunately, i can only invite two people to dinner with me because the new dinner table won't arrive on time"
);

//using while-loop to remove guests from array until only two names remain
while(guestList.length > 2) {
    let removeGuest = guestList.pop();
    console.log(`Sorry, ${removeGuest}, I can't invite you to dinner`);
}
//sending a invitation to the last two guests
console.log("Invitations to the last two guests.");

guestList.forEach(lasttwo => console.log(`Dear ${lasttwo}, you are still invited to dinner.`));


//removing the last two guests from list
guestList.pop();
guestList.pop();

console.log("Empty List:", guestList);