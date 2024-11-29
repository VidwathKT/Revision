//normal function delaration and execution
function a(){
    console.log("Hello");
    
}
a();
//Function Expression
const b=function(){
    console.log("Expression Function");
    
}
b();
//Arrow Function 
const c = (x,y)=> console.log( `Arrow Function Addition ${x+y}`)
c(22,36);
//Anonymous Function -> used as a callback or immediately invoked function
setTimeout(function(){
  console.log("Anonymous function inside setTimeout()");
},100);

//IIFE(Imediatly invoked Function Expression)
(function(){
console.log("Imediatly invoked Function Expression")
})();//their is no need to call it it'll execute when the machine comes it that line of execution

//Generator Function
function* d(){
    console.log("Generator Function execution strats here...");
   yield "One";
   yield "Two";
   yield "Three";
   yield "Four";
}

const e = d();
console.log(e.next().value);
console.log(e.next().value);
console.log(e.next().value);
console.log(e.next().value);
console.log(e.next().value);
//If we just put * next to function keyword (ex:function*)it will become generator function
//Here we can control the execution(pause and resume the execution

//Async Function
function f(){
  return new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve(console.log("Async Function"));
        },1000);
});
}
async function g() {
      await f();
      console.log("Finished Async Function")
}
g();
//the below line of function called with await keyword is executed after the execution of asynchronous function
//this shows that it'll wait or pause untill that function got executed 

//Construction function
function person(name){
    this.name=name;
}
const h=new person("Alex");
console.log(h.name);

//Higher Order Function
//a function that takes function as an argument or return the function
function hof(cbf){
    console.log("Calling another function");
    return cbf;
}
function Hofi(name){
    console.log(`Higher Order Function ${name}`);  
}
let run = hof(Hofi);
run("Alex");

//OUTPUT:-
// Arrow Function Addition 58
// Imediatly invoked Function Expression
// Generator Function execution strats here...
// One
// Two
// Three
// Four
// undefined
// Alex
// Calling another function
// Higher Order Function Alex
// Anonymous function inside setTimeout()
// Async Function
// Finished Async Function
