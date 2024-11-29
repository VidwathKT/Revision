//call -> it calls the function with the given object 
const Car1 ={name:"Lambo",color:"Yellow"}
function details1(Message){
    console.log(Message+" .!. Car Company is "+this.name+" and "+this.color);
}
details1.call(Car1,"Namaskara");
//Output:- Namaskara .!. Car Company is Lambo and Yellow

//apply -> it apply the function with the given object but diff is it gives array as argument 
const Car2 ={name:"Ferrari",color:"Red"}
function details2(Message,Closing){
    console.log(Message+" .!. Car Company is "+this.name+" and "+this.color+" :) "+Closing);
}
details2.apply(Car2,["Vanakkam","Thankyou"]);
//Output:- Vanakkam .!. Car Company is Ferrari and Red :) Thankyou

//bind -> it does not pass any parameter to function only binds the given object
const Car3 ={name:"Audi",color:"Black"}
function details3(){
    console.log(" Car Company is "+this.name+" and "+this.color);
}
const bind=details3.bind(Car3)
bind();
//Output:- Car Company is Audi and Black