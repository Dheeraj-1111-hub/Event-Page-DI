gsap.from(".first-page h1",{
    x:-400,
    duration:1,
    delay:0.1,
    opacity:0,
       
})
gsap.from(".first-page p",{
    y:30,
    duration:1,
    opacity:0,
    delay:1,
    stagger:-1,
})
gsap.from(".right img",{
    opacity:0,
    x:400,
    
})
gsap.from(".left button",{
    opacity:0,
    scale:0,
    duraion:1,
    
})
gsap.to(".left button",{
    opacity:1,
    scale:1,
    duraion:2,
    scrub:3,
})

gsap.from(".right-2 img",{
    
    delay:2,
    duration:3,
    y:-600,
    duration:2.5,
    ease: "bounce.out",
    scrollTrigger:{
        trigger:".right-2 img",
        scroller:"body",
        start:"top 20%",
        end:"top 100%", 
    }
})

var main=document.querySelector(".first-page");
var main2=document.querySelector(".section-2");
var main3=document.querySelector(".section-3");
var cursor = document.querySelector(".cursor");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x-62,
        y:dets.y-60,
        duration:0.1,
        ease: "back.out",
    })
})
main2.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x-60,
        y:dets.y-80,
        duration:0.1,
       
    })
})
main3.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{
        x:dets.x-60,
        y:dets.y-80,
        duration:0.1,
        
    })
})

gsap.from(".left-2 p",{
    opacity:0,
    x:-200,
    stagger:1,
    duration:0.7,
    delay:0.1,
    scrollTrigger:{
        trigger:".left-2 p",
        scroller:"body",
        start:"top 50%",
    }
})
gsap.from(".rules li",{
    opacity:0,
    x:-200,
    stagger:1,
    duration:0.49,
    delay:0.1,
    scrollTrigger:{
        trigger:".rules li",
        scroller:"body",
        start:"top 80%",
    }
})

gsap.from(".section-3 h2",{
    opacity:0,
    x:300,
    duration:1,
    delay:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".section-3 h2",
        scroller:"body",
        start:"top 60%",
    }
})
gsap.from(".section-3 h3",{
    opacity:0,
    x:-300,
    duration:1,
    delay:0.5,
    stagger:1,
    scrollTrigger:{
        trigger:".section-3 h3",
        scroller:"body",
        start:"top 90%",
    }
})
gsap.from(".details-heading p",{
    opacity:0,
    y:-100,
    duration:.7,
    delay:0.5,
    stagger:-1,
    scrollTrigger:{
        trigger:".details-heading p",
        scroller:"body",
        start:"top 80%",
        end:"top 100%"
    }
})
gsap.from(".Name",{
    opacity:0,
    x:300,
    duration:0.1,
    stagger:1,
    scrollTrigger:{
        trigger:".Name",
        scroller:"body",
        start:"top 80%",
        
    }
})
gsap.from(".section-2",{
    opacity:0,
    scale:0.5,
    duration:1,
    scrollTrigger:{
        trigger:".section-2",
        scroller:"body",
        start:"top 120%",
    }
})
