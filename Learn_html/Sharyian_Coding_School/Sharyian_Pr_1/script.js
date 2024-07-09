

var crs = document.querySelector("#cursor");
var crsb = document.querySelector("#cursor-blur");

//on whole doecument         // dets-what happening with mouse cursor in both axes
document.addEventListener("mousemove", function(dets){
    crs.style.left = dets.x + "px"
    crs.style.top = dets.y + "px"
    crsb.style.left = dets.x - 250 + "px"
    crsb.style.top = dets.y - 250  + "px"
})





gsap.to("#nav", {
    backgroundColor:"#000",
    height:"150px",
    duration:0.5,
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -10%",
        scrub:1
    }
    
})

gsap.to("#main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -40vh",
        end:"top -70vh",
        scrub:2

    }
})

