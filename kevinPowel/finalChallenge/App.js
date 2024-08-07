const menuBtn = document.querySelector('.menu-bar-btn');
const navListDiv = document.querySelector('.nav-list-div');

menuBtn.addEventListener('click', ()=>{
    navListDiv.classList.toggle("displayNone");
})

