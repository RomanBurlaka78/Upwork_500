function menuBurger() {
    //  Burger Toggle menu

const burger = document.querySelector('.burger');
const navBarNav = document.querySelector('.navbar_nav');
const navLink = document.querySelectorAll('.nav_link');
const body = document.querySelector('body');
const navBtns = document.querySelector('.nav_btns');

navBarNav.addEventListener("click", ()=> {
    if(navBarNav.classList.contains("active")) {
       navBarNav.classList.toggle('active'); 
       burger.classList.toggle('active');
       body.classList.toggle("locked");
       navBtns.classList.toggle('active');
    }
   
 })

burger.addEventListener('click', ()=> {
    burger.classList.toggle('active');
    navBarNav.classList.toggle('active');
    body.classList.toggle("locked");
    navBtns.classList.toggle('active');

   
   
})
navLink.forEach((item)=> {
    item.addEventListener('click', ()=> {
        if(window.innerWidth<992) {
              burger.classList.remove('active');
        navBarNav.classList.remove('active');
        body.classList.add("active");
        navBtns.classList.toggle('active');
        }
        
       
    })

})

window.addEventListener("resize", ()=> {
    if(window.innerWidth<992) {
        burger.classList.remove('active');
        navBarNav.classList.remove('active');
        body.classList.remove("active");
        navBtns.classList.remove("active");

    }
})




}

//menuBurger-call
menuBurger();