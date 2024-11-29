const p1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise1")
    }, 1000);
})
const p2 = new Promise((resolve,reject)=>{
    setTimeout(() => {
       // resolve("promise2");
        reject("Errorrrr")
    }, 2000);
})
const p3 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve("promise3");
    }, 3000);
})

// const promise_api = Promise.all([p1,p2,p3]);
//Output:-[ 'promise1', 'promise2', 'promise3' ]
//const promise_api = Promise.allSettled([p1,p2,p3]);
//Output:-[
//   { status: 'fulfilled', value: 'promise1' },
//   { status: 'rejected', reason: 'promise2' },
//   { status: 'fulfilled', value: 'promise3' }
// ]

//const promise_api = Promise.race([p1,p2,p3]);
//Output:-triggerUncaughtException(err, true /* fromPromise */);
//or if the time of resolved is less it will be displaed
const promise_api = Promise.any([p1,p2,p3]);
//output:-promise1
promise_api.then((value)=>{
    console.log(value); 
});