const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
menuBtn.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open)});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
const lightbox=document.querySelector('.lightbox'),lightImg=lightbox.querySelector('img');
document.querySelectorAll('.gallery-item').forEach(b=>b.addEventListener('click',()=>{lightImg.src=b.dataset.src;lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false')}));
function closeBox(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');lightImg.src=''}
lightbox.querySelector('button').addEventListener('click',closeBox);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeBox()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeBox()});
document.getElementById('prayerForm').addEventListener('submit',e=>{e.preventDefault();const d=new FormData(e.currentTarget),name=d.get('name'),email=d.get('email')||'No provisto',request=d.get('request');const subject=encodeURIComponent('Petición de oración — '+name);const body=encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\n\nPetición:\n${request}`);document.getElementById('formNote').textContent='Se abrirá su aplicación de correo para completar el envío.';window.location.href=`mailto:Labiblianoshablapodcast@gmail.com?subject=${subject}&body=${body}`});
document.getElementById('year').textContent=new Date().getFullYear();
