/*19. Dinner Guests: Working with one of the programs from Exercises 14 through 18,
print a message indicating the number of people you are inviting to dinner.*/

let guestList = ["Wafa", "Momin", "Hassan", "Nilam"];

guestList.forEach(guest => console.log(`Assalamu Alaikum Dear ${guest}! Would you like to dinner with me tonight?`));

let lengthGuests: number = guestList.length;

console.log(`We are inviting total ${lengthGuests} guests to dinner.`);