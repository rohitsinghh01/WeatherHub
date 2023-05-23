const burger=document.querySelector('.burger')
const nav=document.querySelector('.nav')
const navbar=document.querySelector('.navbar')

burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav-resp')
    nav.classList.toggle('v-nav-resp')


})