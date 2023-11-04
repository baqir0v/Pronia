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



