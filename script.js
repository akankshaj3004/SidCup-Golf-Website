var crsr = document.querySelector("#cursor")

document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x+30 + "px"
    crsr.style.top = dets.y + "px"
})

var crsr_b = document.querySelector("#cursor-blur")

document.addEventListener("mousemove", function (dets) {
    crsr_b.style.left = dets.x - 150 + "px"
    crsr_b.style.top = dets.y - 150 + "px"
})

var h4All = document.querySelectorAll("#nav h4")
h4All.forEach(function (elem) {
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "0.5px solid #fff"
        crsr.style.backgroundColor = "transparent";
    })
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        crsr.style.border = "0px solid #95C11E";
        crsr.style.backgroundColor = " #95C11E";
    })

})

gsap.to("#nav", {
    backgroundColor: "#000", 
    duration: 0.5,
    height: "90px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1

    }
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: "#main",
        scroller: "body",
        // markers:true,
        start: "top -25%",
        end: "top -70%",
        scrub: 1
    }
})

// gsap.from("#about-us img","#about-us-in",{
//     y:50,
//     opacity:0,
//     duration:1,
//     stragger:0.4,
//     scrollTrigger:{
//         trigger:"#about-us",
//         scroller:"body",
//         markers:true,
//         start:"top 60%",
//         end:"top 58%",
//         scrub:3
//     },
// });

gsap.from("#about-us img,#about-us-in", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 70%",
      end: "top 65%",
      scrub: 1,
    },
  });