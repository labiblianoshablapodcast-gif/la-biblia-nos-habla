const grid=document.getElementById('sermonGrid');
const filterBox=document.getElementById('sermonFilters');
const search=document.getElementById('sermonSearch');
const empty=document.getElementById('emptyState');
let items=[],active='Todos';

function card(item){
  return `<article class="sermon-card">
    <div class="sermon-thumb">
      <span class="sermon-category">${item.category}</span>
      <div class="play-mark">▶</div>
    </div>
    <div class="sermon-card-body">
      <p class="sermon-scripture">${item.scripture}</p>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <div class="sermon-tags">${item.tags.map(t=>`<span>${t}</span>`).join('')}</div>
      <a class="text-link" href="${item.url}" target="_blank" rel="noopener">Buscar en YouTube →</a>
    </div>
  </article>`;
}
function render(){
  const q=search.value.trim().toLowerCase();
  const shown=items.filter(x=>{
    const cat=active==='Todos'||x.category===active;
    const text=[x.title,x.category,x.description,x.scripture,...x.tags].join(' ').toLowerCase();
    return cat&&text.includes(q);
  });
  grid.innerHTML=shown.map(card).join('');
  empty.hidden=shown.length>0;
}
fetch('sermons.json').then(r=>r.json()).then(data=>{
  items=data;
  const cats=['Todos',...new Set(items.map(x=>x.category))];
  filterBox.innerHTML=cats.map(c=>`<button class="sermon-filter ${c==='Todos'?'active':''}" data-cat="${c}">${c}</button>`).join('');
  filterBox.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{
    filterBox.querySelectorAll('button').forEach(x=>x.classList.remove('active'));
    btn.classList.add('active');active=btn.dataset.cat;render();
  }));
  render();
});
search.addEventListener('input',render);
const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
if(menuBtn)menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();