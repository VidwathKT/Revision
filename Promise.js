//Call back Hell
function getData(data,DataCallback){
    setTimeout(()=>{
        console.log(`Data ${data}`)
        if(DataCallback){
            DataCallback();
        }
    },1000);
}
//console.log("Getting data 1....");
getData(1,()=>{
    console.log("Getting data 2....");
    getData(2,()=>{
        console.log("Getting data 3....");
        getData(3)
    })
})//difficult to understand
//OUTPUT:-
// Data 1
// Getting data 2....
// Data 2
// Getting data 3....
// Data 3

//Promises
function getData1(data){
    return new Promise((resolve,reject)=>{
          setTimeout(() => {
            console.log(`data ${data}`);
            resolve("Success")
          },1000);
    })
}
function getData2(data){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(`data ${data}`);
            resolve('Success')
        }, 1000);
    })
}
getData1(1).then((value)=>{
    console.log(value); 
    getData2(2).then((value)=>{
        console.log(value);
    })   
});//This is promise chaining(two function exe one after other so it is inside one promise so it is promise chaining)

//OUTPUT:-
// data 1
// Success
// data 2
// Success
const Data = Promise.all([getData1(3),getData2(4)])
console.log(Data);
