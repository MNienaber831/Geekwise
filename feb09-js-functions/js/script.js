// IIFE -  Immediately invoked Function Executable
// (function(){


  // Function Declaration
  function funcDec(userMessage, userAge){
    // alert('this is from the declaration');
    console.log(userMessage, userAge);
  }
  // PARAMETER
  // ARGUMENT
  funcDec('goodbye', 17);
  // funcDec(); // calling (aka invoking aka running) the function

  var myNum; // Undefined variable
  // Function Expression
  var funcExp = function(){
    myNum = 3;
    // alert('this is from the expression');
    // funcDec();
  };

   // Immediately invoke the function with ()
  // funcExp(); // calling (aka invoking aka running) the function
  // HOISTING - places all function DECLARATIONS and variable names to memory before running scripts
  // SCOPE - variable that exists only within a function where it was created
  // RETURN -
  function getFullName(a, b){
    return a + ' ' + b;
  }
  console.log(getFullName('Micaela', 'Nienaber'));

  function getUserName(){
    var name = prompt('What would you like your username to be?'),
        message = 'Hello ' + name + ' how was your day?';
    return message;
  }

  function getMessage(){
    alert(getUserName());
  }

  getMessage();



// })();
