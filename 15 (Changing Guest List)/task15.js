var guestList = ["Wafa", "Momin", "Hassan", "Nilam"];
var dontCome = guestList[0];
console.log(dontCome, "nahi aa rahi.");
guestList.splice(0, 1, "Saba");
guestList.forEach(function (guest) { return console.log("Assalamu Alaikum ".concat(guest, ", would you like to dinner with me tonight?")); });
