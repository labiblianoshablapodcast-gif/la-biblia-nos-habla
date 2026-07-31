const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
if(menuBtn)menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.1});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const lb=document.querySelector('.lightbox');if(lb){const img=lb.querySelector('img');document.querySelectorAll('.gallery-item').forEach(b=>b.addEventListener('click',()=>{img.src=b.dataset.src;lb.classList.add('open')}));lb.querySelector('button').onclick=()=>lb.classList.remove('open');}
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();
const w=document.getElementById('whatsappJoin');if(w)w.addEventListener('click',()=>{const u=window.SITE_CONFIG?.whatsappStudyLink;if(u)window.open(u,'_blank');else document.getElementById('whatsappNote').classList.add('highlight')});