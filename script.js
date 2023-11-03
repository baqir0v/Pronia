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


let movingimage = document.getElementById("movingimage")

movingimage.addEventListener("click",function(e){
    const mouseX = e.clientX
    const mouseY = e.clientY

    const newX = mouseX - movingimage.width/2
    const newY = mouseY - movingimage.height/2
    
    movingimage.style.left =newX + "px",
    movingimage.style.top =newY + "px"
})
