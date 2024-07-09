
const dulha = "lab";
const dulhan  = "labby";
dulha + "  Weds " + dulhan
console.log(a);
// hoisting
 var a = 12;
 document.write("Hello wolrd...!")

 function add(x, y){
    return x + y;
 }

  
 var a = [1,2,3,4,5 ];
 a.push(6);
 a.shift();
 a.unshift();
 a.pop();
 a.splice(2,1);


function java(){

}
// objects
//  var akash = {
//     age: 21,
//     surname: "Maske",
//     edu: "BSC",
//     tech: java()
//     {

//     };
    
//    }


 document.write(akash);

var a = 12;
 let a1 =10;
 const b = 10;


// in es5 only var
// es6 only let and const


 // var function scoped
 // let const braces scoped

 //var adds itself in window object adds (adds features of browser's window object )-->box of features in browser
 // eg . alert,prompt, console, document
//  let ad const doesn.t

//window object


//browser context api 1) stack 2) heap memory 3) window

//stack = complete functions in stack in order of insertion 

//heap memory = store var or data 

// execution context
// every function make its ownn miaginary container when function called
//1) vaiables 
//2)  functions  inside that parent function
//3) lexical environment of that function = a type of chart which shows about the datamembers are accessible oand which are not 
// itholds its scope and scope chain 

function abcd(){
   var a = 12;
   function divis(){
      var b = 12;// b is not accessible for function abcd as its scope is only inside divid()
      // this is what lexical environment is called 
      
   }

   abcd();
}

// how to copy reference variables

var a = [1,2,3,4,5]
var c = [...a]//spread operator
//if we c.pop() only get out from c not from a

var obj = {name:"akash"}
var obj1 = {...obj}


// conditionals -----> either truethy or falsy
// falsy = 0 false unefined null Nan document.all
// else all values are truethy
if(7){// because 7 is truethy
   console.log("truethy");
} else {
   console.log("falsy");
}


//foreach loop
// ..worls only on array
// not changes in default array but makes changes in temperory copy

var ar = [1,2,3,4,5,6,7]
//val = name of the function to add 2 in each va;ue
ar.forEach(function(val){
 console.log(val + 2)
})


//forin loop

var akash = {
   age : 12,
   city: "mumbai"
}
for (const key in akash) {
        // key = age, city
        console.log(key, akash[key])
}


// callback funtions
//if we dont know after what time the function will execute to tell us about cmpletion 

// the below function is collback function like after 2 seconds it will work 
setTimeout(function(){
    console.log("2 seconds baad chala");
}, )//callback function will get called after completion 2000 miliseconds


//first class functions 
//a concept which use functions as a value

var a = function(){};

function m1(a){
   a();// function stored in it by passing the argument
}

m1(function(){console.log("hello");});
// in a = function(){console.log("hello");}

//how arrays are made in js
var arr = [1,2,3,4,];
//it is not an array it is a  object
// it get converts into 
arr = {
   0:1,
   1:2,
    2:3,
    3:4
}

arr[-1] = 2;

Array.isArray([]);//true
Array.isArray({});//false 


// objects properties
akash = {
   surname : "maske",
   age: 12,
   city : "pune"
}
akash.age = 21;
delete akash.city;