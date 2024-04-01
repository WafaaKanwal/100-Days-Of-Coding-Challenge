/*19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.*/
var guestList = ["Wafa", "Momin", "Hassan", "Nilam"];
guestList.forEach(function (guest) { return console.log("Assalamu Alaikum Dear ".concat(guest, "! Would you like to dinner with me tonight?")); });
var lengthGuests = guestList.length;
console.log("We are inviting total ".concat(lengthGuests, " guests to dinner."));
