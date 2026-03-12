const hamburger=document.querySelector(".hamburger")
const navMenu=document.querySelector(".nav-menu")
const header=document.querySelector("header")

hamburger.onclick=()=>{

hamburger.classList.toggle("active")
navMenu.classList.toggle("active")

}

window.addEventListener("scroll",()=>{

if(window.scrollY>50){

header.classList.add("scrolled")

}else{

header.classList.remove("scrolled")

}

})

window.addEventListener("scroll",()=>{

document.querySelectorAll(".reveal").forEach(el=>{

let top=el.getBoundingClientRect().top
let windowHeight=window.innerHeight

if(top<windowHeight-100){

el.classList.add("active")

}

})

})