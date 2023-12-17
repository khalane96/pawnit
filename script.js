const header=document.querySelector('header')
const openBtn=document.getElementById('open-menu-btn')
const closeBtn=document.getElementById('close-menu-btn')

openBtn.addEventListener('click', ()=>{
  header.classList.toggle('show-mobile-menu')  
})

closeBtn.addEventListener('click', ()=>{
    openBtn.click();  
  })
  