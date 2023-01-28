//  Burger Toggle menu

const burger = document.querySelector('.burger');
const navBarNav = document.querySelector('.nav_list');
const navLink = document.querySelectorAll('.nav_link');
const body = document.querySelector('body');
// const sidebar = document.querySelector('.sidebar');
// const showSidebar = document.querySelector('.profile_avatar--mobile--span')


burger.addEventListener('click', ()=> {
  
    burger.classList.toggle('active');
    navBarNav.classList.toggle('active');
    body.classList.toggle('locked')
    // sidebar.classList.remove('show')
   
   
})
navLink.forEach((item)=> {
    item.addEventListener('click', ()=> {
      console.log(item.innerHTML);
        burger.classList.remove('active');
        navBarNav.classList.remove('active');
        body.classList.remove('locked')
       
    })

})



    const headerAvatar = document.querySelector(".header__avatar");
    const sidebar = document.querySelector(".sidebar");
    headerAvatar.addEventListener("click", ()=>{
        sidebar.classList.toggle("sidebar--show");
        
    })
     

window.addEventListener('resize', function(event) {
    sidebar.classList.remove("sidebar--show");
    
}, true);
    
   
    
    






