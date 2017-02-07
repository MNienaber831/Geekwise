var firstName = prompt('What is your name?');
var intro = 'Welcome to my story ' + firstName + '.';
// var userGen = prompt('Are you a female?');
console.log(firstName);
alert(intro);
// alert('I wanna be the very best.');
// console.log(userGen);

// alert('Wha?');
// var userLang = confirm('Do you speak it?');
// console.log(userLang);
// var formuoli = prompt('What is your favorite flavor of ravioli');
// console.log(formuoli);

var ageNum = prompt('How old are you?'),
    response = 'Nice. I am 17 years old. The means that you are ' + (parseInt(ageNum) - 17) + ' years older than me.';

alert(response);
console.log(response);

var gender = confirm('Are you a girl?');
console.log(gender);

alert('Sorry I assumed your gender. It is 2017 after all. There is now a such thing called transage. Which is rediculous.');

var transAge = confirm('Did you just ask what transage is?');

alert('I don\'t care if you did or didn\'t. For an example, it is like when a 56 year old man claims that he is a 5 year old girl. Someone told me this don\'t quote me.');

var spongeSong = prompt('Who lives in a pineapple under the sea?');
console.log(spongeSong);
alert('If you put what I think you put you are cool.');

var dabTime = confirm('Okay, it is 2017 right?');
console.log(dabTime);

var dabTime2 = confirm('New year, new you?');
console.log(dabTime2);

var dabTime3 = prompt('Will you hit a hard dab for me? Please?');
console.log(dabTime3);

if (!isNaN(dabTime3)){
  alert('Cash me ousside. How bow dah.');
}else {
  alert('Can I get a hell yea!');
}

var sorrySorry = confirm('I am sorry if I come off aggressive. I know you have feelings. I am sorry. Do you think I am aggressive?');
console.log(sorrySorry);

alert('Okay then. Kewl beeeeeeeeeaaaaaaaaans doooooods.');

var guessMoney = prompt('Guess how much money I have in my bank account. Kek');
console.log(guessMoney);

var guessResponse = 'Close but no cigar. You were $' + (parseFloat(guessMoney) - 1.05) + ' off.';
alert(guessResponse);
console.log(guessMoney);

alert('If you couldn\'t guess how much after that I have $1.25 in my account.');

alert('Yup you don\'t have to tell me I know I am broke.')

var accountBal = prompt('Are you broke like me? If you aren\'t tell me how much you have.');

if (!isNaN(accountBal)) {
  alert('Buy the class some pizza yea?');
} else {
  alert('I feel you man. I feel you.');
}

alert('Okay let us play a game. Yea. It is a color game.');
alert('You are going to pick one number from 0 to 5 and that is going to be your new favorite color. Okay.');

var colorOne = prompt('Okay. What is the number you are going to choose from 0 to 5?'),
    colors = ['red', 'blue', 'yellow', 'purple', 'green', 'orange'];



alert('Okay. Your favorite color is ' + colors[colorOne] + ' now.' )

alert('Alright ' + firstName + ' this is it have a good day.');
