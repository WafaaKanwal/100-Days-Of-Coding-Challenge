/*12.Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized with
the person’s name.*/
/*Adding Comments(Part2): Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have
anything specific to write because your programs are too simple at this point, just add your name and the current date
at the top of each program file. Then write one sentence describing what the program does.*/
//WAFA KANWAL
//3rd March, 2024
//Storing friends names in variable
var friendsName = ["Wafa", "Kanwal", "Abdul", "Wakeel"];
//Printing message for each friend
friendsName.forEach(function (friendName) { return console.log("Hello ".concat(friendName, ", hope you're doing well.")); });
