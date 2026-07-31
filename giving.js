document.querySelectorAll('.give-btn').forEach(btn=>btn.addEventListener('click',()=>{
const key=btn.dataset.type; const url=window.SITE_CONFIG?.giving?.[key];
if(url){window.open(url,'_blank','noopener')}else{document.getElementById('givingAlert').scrollIntoView({behavior:'smooth'});document.getElementById('givingAlert').classList.add('highlight')}
}));