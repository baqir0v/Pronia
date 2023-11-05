// Navbar and Discount sections
const body = document.querySelector("body")
let movingimage = document.getElementById("movingimage")
let discountbutton1 = document.getElementById("discountbutton1");
let discountopen1 = document.getElementById("discountopen1");

discountbutton1.addEventListener("click", () => {
    
    discountopen1.classList.toggle("active");
});

let discountbutton2 = document.getElementById("discountbutton2");
let discountopen2 = document.getElementById("discountopen2");

discountbutton2.addEventListener("click", () => {
    
    discountopen2.classList.toggle("active");
});

body.addEventListener("mousemove",function(e){
    let x = Math.floor(e.clientX/100);
    let y = Math.floor(e.clientY/100);
    movingimage.style.transform = `translate(${-x}px,${-y}px)`
})

// Accordions
let accli1 = document.getElementById("accli1")
let accli2 = document.getElementById("accli2")
let accli3 = document.getElementById("accli3")
let accli4 = document.getElementById("accli4")

accli1.addEventListener("click",function(e){
    e.preventDefault()
    document.getElementById("ul1").classList.toggle("active")
})
accli2.addEventListener("click",function(e){
    e.preventDefault()
    document.getElementById("ul2").classList.toggle("active")
})
accli3.addEventListener("click",function(e){
    e.preventDefault()
    document.getElementById("ul3").classList.toggle("active")
})
accli4.addEventListener("click",function(e){
    e.preventDefault()
    document.getElementById("ul4").classList.toggle("active")
})
// SidebarOpening and Closing
let sidenavbar = document.getElementById("sidenavbar")
let navopener = document.getElementById("navopener")
let exit = document.getElementById("exit")

navopener.addEventListener("click",function(){
    sidenavbar.classList.toggle("active")
})
exit.addEventListener("click",function(){
    sidenavbar.classList.remove("active")
})



