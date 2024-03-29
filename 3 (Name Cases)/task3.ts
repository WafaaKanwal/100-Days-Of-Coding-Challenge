//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase


//making variable of person's name
let personName: string = "Wafa Kanwal";

//printing person's name in lowerCase 
console.log(personName.toLowerCase());

//printing person's name in upperCase
console.log(personName.toUpperCase());

//printing person's name in titleCase
console.log(personName.replace(/\b\w/g, (c) => c.toUpperCase()));
