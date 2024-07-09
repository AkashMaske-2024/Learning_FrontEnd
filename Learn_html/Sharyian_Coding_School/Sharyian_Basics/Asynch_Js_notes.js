// sync and async 
//sync --> at the time only one work should be done 
//Async --> all the work start wokr at the time and as work get finished

// task a = 5 sec     //async = total time 15 sec
// task b = 2 sec     //synch = 23 seconds 
// task c = 1 sec
// task d = 15 sec

//Asynchronous Code when we use following

// setTimeout
// setInterval
// Promises
// fetch
// // XMLHttpRequest
//Rest all code is sync i.e only one work at the time (work line by line)


//  What is async Js

console.log("hey");
setTimeout(function() {
    console.log("hey2");// run after 2 seconds 
    // thats why callback func works in async in after answer came 


}, 2000);
console.log("hey3");


// --> when we are dealing with another server we cannot work in ssync as we not know when our code will execute 
// then we'll work async code


// js is not asynchronous
//async == many work at the time 

// main stack = execution
// side stack = async works after completing proccessing then comes in main stack 
console.log("hey");
setTimeout(function() {
    console.log("hey2");
}, 0); // even with 0 timeout it will execute at last because it will 
// wait till main stack to be empty and then side stack will execute 

console.log("hey3");
console.log("hey4");


//EventLoop ==> cimmunication between main and side stack about completion

//----> that's why javascript is work only with single thread 


// asynch ki poori jankari 

// single threading and multi threading 

//  call backs  
// always a function ---> when async get completed eg. settimeout
// fetch
// axios             // to async codes
// setTimeout
// setInterval();


// then catch            // to get answers about async codes or requests
// callbacks
// async wait



//  promises 
//  then and catch

//Async Code --------> if resolved/successfully solved     'then' block excute
//           --------> if rejected     'catch' block excute

var ans = new Promise((res,rej)=>{
    if(true){
        return res();

    }else {
        return rej();
    }
})

ans
.then(function(){
    console.log("resolved");
})
.catch(function(){
    console.log("rejected")
})



//task //1. ghar par aao
//2.gate kholo
//3.khana pakao
//4. khana khaao 
//5.so jao

var promise1 = new Promise(function(res,rej){
    return res("ghar par aao");  // first async task is completed 
})

var promise2 = promise1.then(function(data){
    console.log(data);  //  data = return res("ghar par aao");
   return new Promise(function(res, rej){
        return res("gate kholo")

    })
})

var promise3 = promise2.then(function (data) {
    console.log(data);

    return new Promise(function (res, rej) {
        return res("khana pakaao")

    })
});
    
var promise4 = promise3.then(function (data) {
        console.log(data);

        return new Promise(function (res, rej) {
            return res("khana khaao")
        })
});

   
var promise5 = promise4.then(function (data) {
        console.log(data);

        return new Promise(function (res, rej) {
            return res("so jaao")
        })
});

promise5.then(function (data) {
        console.log(data);
});

    
//  try and catch 


//  asynch await 
//
// using then 
function m1(){
    fetch('https://randomuser.me/api/')

    .then(function(raw){
        return raw.json();
    })
    .then(function(data){
        console.log(data);
    })
}

//To avoid the use of then

async function m2(){
    let raw = await fetch('https://randomuser.me/api/') // wait on this line till you get answer
    let ans = await raw.json();
    console.log(ans);
    // if we'll removev await then it will show pending line 
}




//  5 uses cases real wolrd wale 
//1.node.js databse
//2.fetch
// Every thing dependent on third party

//  [concept aside]

//concurrency = when sync and asycn code proccess at the same time eg. main stack and side stack 

//parallelism = similar to conoruncy but focuses more on working of 
                // diff proccessors  and their wroking on cores

 



//  throttling  = controlling the no. of execution 
                // eg. controlling  no. of scrolling events for a page



