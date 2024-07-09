// higher ordr functions 

function m1(val){
     return function m2(){}
}

m1(function(){});
// m1 = higher order function accepts function as parameter or return fncn


// constructor fncs
//normal func in which 'this' is used and call 
// when most proeprties of the elements are same then create constructor
//this --> bydefault points window

function sachaOfBiscuit(){
    this.width = 12;
    this.height = 22;
    this.color = "brown";
    this.taste = "sugary";

}

var bis1  = new sachaOfBiscuit()// to create new biscuit 
var bis2  = new sachaOfBiscuit()
var bis3  = new sachaOfBiscuit()

function button(color){
    this.color = color;
    this.shape = "square";
}

var redbtn = new button("red");

var bluebtn = new button("blue");

//first class fncs
// in javascript funcs can be saved and passed like normal values to another funcs i.e. it has first class funcs

//new keyword
// create new object for constructor funnction

//iife -- > immediately invoked function expression
//feature to run function immidiately 
// to hide data inside the variable 
var ans = (function(){
    var privateval = 12;// to make private variables
    
    return {
        getter: function(){
            console.log(privateval);
        },
        setter: function(val){
            privateval = val
        }
    }

})()
// it get called immidiately after running  



//prototype
//whenever we create object automatically inherits [[prototype]] to every object 
// with many builtin helper functions/properties to help in code 


//prototypical inheritence
// trasfering features via prototype in js
var human = {
    name: 'akash',
    canTalk: true,
    canFly: false,
    canWalk: true
}

var CsStudent = {
    CanMakeWebsites : true,
    canmakeanimations: true
}

CsStudent.__proto__= human;
//prototypically inherited human properties 



//this call apply bind

console.log(this) // in global scope this ==>  window

function m3(){
    console.log(this);
}
m3(); // in fnction too this ==> window

var parentObject = {

    baatkaro: function(){
        console.log(this);

    } // if function is inside an object then it is called method
                             // eg. baatkaro ==> method
}
parentObject.baatkaro();
// Inside method this ==> parent object --> parentObject of 
//this refers to parentObject

function m4(){
    console.log(this);
}

var obj2 = {
    age:24
}

m4.call(obj2);     // make this point to obj2 not to window 

//paramerized
function m5(val, val1){
    console.log(this)
}

var obj3 = {
    age:40
}

m5.call(obj3, 1,2); // when we want this to point to obj i nparemeteized functions 
m5.apply(obj3, [1,3]);
// in apply function we pass obj and alues in array as it accepts only two parameters

//usecase ==> tpo make 'this' point to an object we want to point i.e which we have passed 

m5.bind(obj3); //bind only  binds obj3 and m5 never runs it directly 

// to run it 
var bindfun = m5.bind(obj3);
bindfun();// we'll bind it in future for future purposes i.e when event is done 
// 


//Eventlistners
var button = document.querySelector<"button">("button");
button.addEventListener("click", function(){
    console.log(this);
})      // this ==> refers to button istself i.e whatever before addeventlistner


//

//pure fncs
// Same output for same inupt
//ansd not change the global variabls's value   

//eg impure function

var ant = 12;

function m6(val){

   var ant = 24;

    return Math.random()*val;
}

var ans1 = m6(4);
var ans2 = m6(4);// answer will be different 



//closures

