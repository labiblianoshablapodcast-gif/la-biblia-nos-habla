const menuBtn=document.querySelector('.menu-btn');
const nav=document.querySelector('.nav');
if(menuBtn) menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

const filters=[...document.querySelectorAll('.gallery-filter')];
const cards=[...document.querySelectorAll('.photo-card')];
filters.forEach(btn=>btn.addEventListener('click',()=>{
  filters.forEach(x=>x.classList.remove('active'));
  btn.classList.add('active');
  const filter=btn.dataset.filter;
  cards.forEach(card=>{
    const visible=filter==='all'||card.dataset.category===filter;
    card.classList.toggle('hidden',!visible);
  });
}));

const modal=document.querySelector('.gallery-modal');
const modalImg=modal.querySelector('img');
const modalCaption=modal.querySelector('figcaption');
const closeBtn=modal.querySelector('.gallery-modal-close');
const prevBtn=modal.querySelector('.gallery-modal-prev');
const nextBtn=modal.querySelector('.gallery-modal-next');
let current=0;

function visibleButtons(){
  return cards.filter(c=>!c.classList.contains('hidden')).map(c=>c.querySelector('button'));
}
function show(index){
  const items=visibleButtons();
  current=(index+items.length)%items.length;
  const btn=items[current];
  modalImg.src=btn.dataset.full;
  modalCaption.textContent=btn.dataset.caption||'';
  modal.classList.add('open');
  modal.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
}
cards.forEach(card=>card.querySelector('button').addEventListener('click',()=>{
  const items=visibleButtons();
  show(items.indexOf(card.querySelector('button')));
}));
function close(){
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}
closeBtn.addEventListener('click',close);
prevBtn.addEventListener('click',()=>show(current-1));
nextBtn.addEventListener('click',()=>show(current+1));
modal.addEventListener('click',e=>{if(e.target===modal)close()});
document.addEventListener('keydown',e=>{
  if(!modal.classList.contains('open'))return;
  if(e.key==='Escape')close();
  if(e.key==='ArrowLeft')show(current-1);
  if(e.key==='ArrowRight')show(current+1);
});
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();