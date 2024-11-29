//Hoisting is a behaviour of javascript in which variables and function declaration is moved
//to the top of their containing scope during compilation phase just before execution so that
//the variable and functions can be used before they are actually declared in the code 
console.log(h)
hoist()
var h =10;
function hoist(){
    console.log("This function is called before declaration"); 
}
//OutPut:-
//undefined
//This function is called before declaration
//Only declaration is loaded so the initialization of the value is not displayed so it displays default value
//only variable declared with var keyword can be accessed before declaration not but not let and const
