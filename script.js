gsap.to("#box",{
    x:1000,
    duration:2,
    delay:1,
    borderRadius: "50%",
    scale: 0.5,
    backgroundColor: "white",
    repeat:3,
    yoyo:true
})
gsap.from("h1",{
    opacity:0,
    duration:2,
    y:1000,
    delay:1,
    stagger:0.3
})