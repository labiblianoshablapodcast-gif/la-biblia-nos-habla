const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
if(menuBtn)menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

const select=document.getElementById('requestType');
document.querySelectorAll('.connection-card').forEach(card=>{
  card.addEventListener('click',()=>{
    select.value=card.dataset.request;
    document.querySelectorAll('.connection-card').forEach(x=>x.classList.remove('selected'));
    card.classList.add('selected');
    document.getElementById('formulario').scrollIntoView({behavior:'smooth'});
  });
});
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();