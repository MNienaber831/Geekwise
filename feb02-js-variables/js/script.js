var externalJavascript = "wha da actual heck?";

/*
var
function
typeof
new
*/

var camelCase,
    not_camel_case,
    camel_Case,
    $dollarCase,
    doolar$case,
    _underScore;


// var 1stVariable; No-No. Bad.
var firstVar;

// var var; No-No. Bad.
var variable;

var UppercaseCamel; // Please don't. For Constructor Objects Only.
var SUPERUPPERCASE; // Definitely don't.

var myNumberObject = 3,
    myNewNumberObject = myNumberObject.toString();

// console.log(myNumberObject);
// console.log(myNewNumberObject);

var myStringObject = "This is my string Object",
    myOtherStringObject = 'This is my other string Object';
//  myPoorGrammar = 'David\'s Basketball';
//  myNonWorkingStringObject = "This is not working';
// console.log(myStringObject, myOtherStringObject);

var myBooleanTrue = false, // 0
    myBooleanFalse = true; // 1

var myFloatObject = 3.1;

var myArrayObject = ['red', 8, true, ['r', 'b', 'g']];

// console.log(myArrayObject[3]);

var myObjectObject = {
  make: 'Envoy',
  model: 'GMC',
  color: 'white',
  year: 2002,
  package: function(){
    alert(this.make);
  }
};

console.log(myObjectObject);

var a = 5,
    b = 10,
    equalAdd = (a + b),
    equalSubtract = (a - b),
    equalDivide = (a / b),
    equalMultiply = (a * b);

console.log(equalAdd);
console.log(equalSubtract);
console.log(equalDivide);
console.log(equalMultiply);
