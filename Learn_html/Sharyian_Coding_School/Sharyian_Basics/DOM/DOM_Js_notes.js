
// what is DOM
//DOM = Document Object Model
//frontend javascript

// 4 pillors of DOM
//1. selection of elements
var a = document.querySelector("h1");

//2. changing html
a.innerHTML = "ChangedHTML";
a.textContent = "<h1>Hi</h1>";
//3. Changing CSS
a.style.color = "brown";
a.style.backgroundColor = "yellow";
//4. Event Listneres
a.addEventListener("click",function(){
    a.innerHTML = " badal gaya hu mai";
    a.style.color = "black";
    console.log("clicked");
})


// simple eg of bulb or whatever clicking the same button 
var bulb = document.querySelector("#bulb");
var btn = document.querySelector("button");

var flag  = 0;

btn.addEventListener("click", function(){
    if(flag == 0){
        bulb.style.backgroundColor = "yellow";
        flag = 1;
        console.log("clicked");
    }
    else{
        bulb.style.backgroundColor = "transparent";
        console.log("Again clicked")
        flag = 0;

    }
    
})


// multiple events 


//selecting multiple elements at a same time

var h2 = document.querySelectorAll("h2");  // get saved in nodelist 

console.log(h2);
// to show in normally
h2.forEach(function(e){
    console.log(e);
})



//setimeout
//setinterval
// future projects

