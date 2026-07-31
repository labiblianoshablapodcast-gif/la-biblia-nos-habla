const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
if(menuBtn)menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();