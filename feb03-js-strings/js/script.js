var firstString = "A literal string",
//                 0123456789...
    secondString = new String("A string object"),
    concatString = firstString + ", " + secondString;

// console.log( concatString );

// concatenator +

var firstName = "Micaela",
    lastName = "Nienaber",
    fullName = firstName + " " + "Christiana" + " " + lastName;

// console.log(fullName);

var getIndex = firstString.lastIndexOf('i');

console.log(getIndex);

var birthDay = 1999,
    newAge = 2020 - birthDay,
    concatString = "My name is " + fullName + ". I was born on " + birthDay + " and in 2020, I will be " + newAge + ".";

console.log(concatString);
