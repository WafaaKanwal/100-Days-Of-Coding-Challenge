/*15.Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out
a new set of invitations. You’ll have to think of someone else to invite.*/


let guestList = ["Wafa", "Momin", "Hassan", "Nilam"];

let dontCome = guestList[0];

console.log(dontCome, "nahi aa rahi.");

guestList.splice(0, 1, "Saba");

guestList.forEach(guest => console.log(`Assalamu Alaikum ${guest}, would you like to dinner with me tonight?`));