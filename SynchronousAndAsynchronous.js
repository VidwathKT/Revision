 //Synchronous
 let y=10;
 let z=30;
 let a=z-y;
 
 function sync(value){
     console.log(value)
 }
sync("Vidwath")
console.log(`substraction of z and y ${a}`)

//Asynchronous functions 
let y1=22;
let z1=35;
let a1=z1-y1;
 
 function sync1(value){
     setTimeout(()=>
        {console.log(value)},2000);
 }
sync1("Vidwath K T")
console.log(`substraction of z and y ${a1}`)

//OUtPUT:-
// Vidwath
// substraction of z and y 20
// substraction of z and y 13
// Vidwath K T

//we can observe the above out put the function containing setTimeout() function is executed 
//after the execution of below lines bcz that function'll take time that we don't know so the 
//JavaScript machine will push such function to jobqueue it will called after all the execution 
//is done by event loop from job queue to callStack and executed at last
//This is called asynchronous property in JavaScript