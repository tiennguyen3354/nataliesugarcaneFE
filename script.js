let burger = document.querySelector(".burger");
let navList = document.querySelector(".navList");

burger.addEventListener('click', ()=>{
    burger.classList.toggle("active");
    
    navList.classList.toggle("menu");
})