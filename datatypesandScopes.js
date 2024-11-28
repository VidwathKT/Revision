//the types of variable decleration are :-
//1.var 2.let 3.const
var x =11;
var x = "hii"// -> this can be done with var it'll initialize the assined value to variable but the type should be diff
console.log(x);//hii

{
    let x= 10
    console.log(x);//10
    
   // let x= 5; -> cannot declare the variable with same name in let
}
{
  let x =5;//-> this can be done bcz let is resrictrd to block scope but var is bloce scope
  console.log(x);//5
  
}
//fuction Scope
function myFunction(){
    //Variables declared with var, let and const are similar when declared inside a function
    //variables declared inside the functiion are not visible outside the function scope
    var car ="lambo";
    console.log(car);   
}
//console.log(car)-> this gives error bcz variables declared inside function scope is not vasible outside the function
myFunction();
//global scope
//Variables declared with var, let and const are similar when declared outside a block

var a = 2;       // Global scope
let b = 2;       // Global scope
const c = 2;       // Global scope
myFunction1();
console.log(carName);
// code here can use carName

function myFunction1() {
  carName = "Volvo";
} 
