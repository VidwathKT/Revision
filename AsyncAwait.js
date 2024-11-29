function fetch1() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const data = {Id:1,name:"Alex"}
        resolve(data);
      }, 2000);  

    })
}
function fetch2() {
    return new Promise((resolve,reject)=>{
      setTimeout(() => {
        const data = {Id:2,name:"Adam"}
        resolve(data)
      }, 2000);  

    })
}

async function sync(){
    try{
         const data1 = await fetch1();
         const data2 = await fetch2();
         console.log(`id is ${data1.Id} name is ${data1.name} and id is ${data2.Id} name is ${data2.name}`);     
    }
    catch(error){
        console.log(`Error is ${error}`);
    }
}
sync();