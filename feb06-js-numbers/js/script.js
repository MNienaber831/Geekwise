var myNumberVar = 10,
    myFloatVar = 5.2,
    myBooleanVar = false,
    myStringVar = 'Micaela Nienaber',
    myArrayVar = ['red', 'yellow', 'blue', true, 24],
    myObjectVar = {
      make: 'Envoy',
      model: 'GMC',
      year: 2002,
      color: 'white'
    };

// console.log(myNumberVar);
// console.log(myFloatVar);
// console.log(myBooleanVar);
// console.log(myStringVar);
// console.log(myArrayVar);
// console.log(myObjectVar);

// Number Object

var numOne = 2,
    numTwo = new Number(5);

// console.log(numOne);
// console.log(numTwo);

var numThree = '3',
    numFour = '5.2',
    numFive = 'Micaela';

// console.log(parseInt(numThree)); //Makes it a number
// console.log(parseFloat(numFour));
// console.log(parseInt(numFive));

// if(isNaN(numFive)){
//   alert('its not a number');
// }
// else{
//   alert('it is a nuumber');
//}

//parseInt
//parseFloat
//isNaN


// alert('Wha?');
// var userLang = confirm('Do you speak it?');
// console.log(userLang);
// var formuoli = prompt('What is your favorite flavor of ravioli');
// console.log(formuoli);

// var firstName = prompt('What is your first name?'),
//     favColor = prompt('What is your favorite color?'),
//     ssN = prompt('What is your Social Security Number?');
// console.log(firstName, favColor, ssN);

// var ssN = prompt('What is your Social Security Number?');
// console.log( parseInt(ssN) );

var username = prompt('What is your name?')
    intro = "Welcome to my story " + username + '.' +  prompt('What is your dog\'s name?');
alert(intro);

//All 3 alerts (alert, prompt, confirm)
//4 objects (number, float, string, boolean)
//Minimum of 10 variables saves
//Minimum of 5 confirms
//Use 1 if statement
//Use 2 mathematical operations (+, -, *, /)
/*
if(isNaN(numFive)){
   alert('its not a number');
 }
 else{
   alert('it is a nuumber');
}
*/
