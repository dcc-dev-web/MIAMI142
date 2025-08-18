const menuBtn = document.querySelector(".menu-btn");
const navOptions = document.querySelector(".nav-options");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navOptions.classList.toggle("active");
});

//NavBar Scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("solido",window.scrollY>0);
})

window.addEventListener("scroll", function(){
    var icons = document.querySelector(".media-icons");
    icons.classList.toggle("oculto",window.scrollY>0);
})