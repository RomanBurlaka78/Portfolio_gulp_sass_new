//  Burger Toggle menu

const burger = document.querySelector('.burger');
const navBarNav = document.querySelector('.nav_list');
const navLink = document.querySelectorAll('.nav_link');
const body = document.querySelector('body');


burger.addEventListener('click', ()=> {
  
    burger.classList.toggle('active');
    navBarNav.classList.toggle('active');
    body.classList.toggle('locked')
   
   
})
navLink.forEach((item)=> {
    item.addEventListener('click', ()=> {
      console.log(item.innerHTML);
        burger.classList.remove('active');
        navBarNav.classList.remove('active');
        body.classList.remove('locked')
       
    })

})


