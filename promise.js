const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(true){
            resolve({"success": true, "message" : "Server responsed data correctely"});
        }else{
            reject({"success" : false, "message": "Server responsed an error"});
        }
    },2000);
});

promise.then(
    data=>{
        console.log(data);
        return "Second then";
    },
    error=>console.log(error)
).then(data=>console.log(data)).catch(error=>console.log(error));

//Promise with reject

const promise1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        if(false){
            resolve({"success": true, "message" : "Server responsed data correctely"});
        }else{
            reject({"success" : false, "message": "Server responsed an error"});
        }
    },2000);
});

promise1.then(
    data=>console.log(data),
    error=>console.log(error)
);

//Promise with throwing  error

const promise2 = new Promise((resolve, reject)=>{
    throw new Error("Alert");
    setTimeout(()=>{
        if(true){
            resolve({"success": true, "message" : "Server responsed data correctely"});
        }else{
            reject({"success" : false, "message": "Server responsed an error"});
        }
    },2000);
});

promise2.then(
    data=>console.log(data),
    error=>console.log(error)
);


