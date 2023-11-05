// Navbar and Discount sections
const body = document.querySelector("body")
let movingimage = document.getElementById("movingimage")

let discountbutton1 = document.getElementById("discountbutton1");
let discountopen1 = document.getElementById("discountopen1");
let discountbutton2 = document.getElementById("discountbutton2");
let discountopen2 = document.getElementById("discountopen2");

discountbutton1.addEventListener("click", () => {
    if (discountopen2.classList.contains("active")) {
        discountopen2.classList.remove("active");
    }
    discountopen1.classList.toggle("active");
});

discountbutton2.addEventListener("click", () => {
    if (discountopen1.classList.contains("active")) {
        discountopen1.classList.remove("active");
    }
    discountopen2.classList.toggle("active");
});



body.addEventListener("mousemove", function (e) {
    let x = Math.floor(e.clientX / 100);
    let y = Math.floor(e.clientY / 100);
    movingimage.style.transform = `translate(${-x}px,${-y}px)`
})




// Accordions
let accli1 = document.getElementById("accli1")
let accli2 = document.getElementById("accli2")
let accli3 = document.getElementById("accli3")
let accli4 = document.getElementById("accli4")

accli1.addEventListener("click", function (e) {
    e.preventDefault()
    document.getElementById("ul1").classList.toggle("active")
})
accli2.addEventListener("click", function (e) {
    e.preventDefault()
    document.getElementById("ul2").classList.toggle("active")
})
accli3.addEventListener("click", function (e) {
    e.preventDefault()
    document.getElementById("ul3").classList.toggle("active")
})
accli4.addEventListener("click", function (e) {
    e.preventDefault()
    document.getElementById("ul4").classList.toggle("active")
})
// SidebarOpening and Closing
let sidenavbar = document.getElementById("sidenavbar")
let navopener = document.getElementById("navopener")
let exit = document.getElementById("exit")

navopener.addEventListener("click", function () {
    sidenavbar.classList.toggle("active")
})
exit.addEventListener("click", function () {
    sidenavbar.classList.remove("active")
})


let x = document.getElementById("x")
let search = document.getElementById("search")
let searchopen = document.getElementById("searchopen")

searchopen.addEventListener("click",function(){
    search.classList.add("active")
})

x.addEventListener("click", () => {
    search.classList.remove("active");
});

let shopx = document.getElementById("shopx")
let shoppingcart = document.getElementById("shoppingcart")
let shoppingopen = document.getElementById("shoppingopen")


shoppingopen.addEventListener("click",function(){
    shoppingcart.classList.add("active")
})
shopx.addEventListener("click",function(){
    shoppingcart.classList.remove("active")
})