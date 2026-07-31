const menuBtn=document.querySelector('.menu-btn'),nav=document.querySelector('.nav');
if(menuBtn)menuBtn.addEventListener('click',()=>nav.classList.toggle('open'));

const services=[{day:0,hour:10,name:'Servicio Dominical'},{day:3,hour:20,name:'Servicio del Miércoles'},{day:6,hour:20,name:'Servicio del Sábado'}];
function getNYNow(){return new Date(new Date().toLocaleString('en-US',{timeZone:'America/New_York'}))}
function nextService(){
  const nowNY=getNYNow(); let best=null;
  services.forEach(s=>{let d=new Date(nowNY);let add=(s.day-nowNY.getDay()+7)%7;d.setDate(d.getDate()+add);d.setHours(s.hour,0,0,0);if(d<=nowNY)d.setDate(d.getDate()+7);if(!best||d<best.date)best={...s,date:d};});
  return best;
}
function update(){
  const nowNY=getNYNow(), s=nextService(), diff=s.date-nowNY;
  document.getElementById('nextServiceName').textContent=s.name;
  document.getElementById('nextServiceDate').textContent=s.date.toLocaleString('es-US',{weekday:'long',month:'long',day:'numeric',hour:'numeric',minute:'2-digit'})+' — hora del Este';
  document.getElementById('days').textContent=String(Math.floor(diff/86400000)).padStart(2,'0');
  document.getElementById('hours').textContent=String(Math.floor(diff%86400000/3600000)).padStart(2,'0');
  document.getElementById('minutes').textContent=String(Math.floor(diff%3600000/60000)).padStart(2,'0');
  document.getElementById('seconds').textContent=String(Math.floor(diff%60000/1000)).padStart(2,'0');
  const live=services.some(x=>x.day===nowNY.getDay()&&nowNY.getHours()===x.hour&&nowNY.getMinutes()<90);
  const el=document.getElementById('liveStatus');el.classList.toggle('live',live);el.querySelector('strong').textContent=live?'EN VIVO AHORA':'Próximo servicio';
}
setInterval(update,1000);update();

const devotionals=[
['Porque de tal manera amó Dios al mundo, que ha dado a su Hijo unigénito...','Juan 3:16','El amor que salva','Dios no se quedó distante. En Cristo se acercó a nosotros para ofrecer perdón, vida nueva y esperanza.','Señor, gracias por amarme y darme salvación en Jesucristo.'],
['Todo lo puedo en Cristo que me fortalece.','Filipenses 4:13','Fortaleza para hoy','La fuerza del creyente no nace del orgullo, sino de depender de Cristo en cada situación.','Jesús, fortalece mi corazón y ayúdame a caminar en obediencia.'],
['Clama a mí, y yo te responderé.','Jeremías 33:3','Dios escucha','La oración no es un último recurso. Es el privilegio de hablar con un Dios que oye y responde conforme a Su voluntad.','Padre, enséñame a buscarte con fe y perseverancia.'],
['Lámpara es a mis pies tu palabra, y lumbrera a mi camino.','Salmo 119:105','Dirección segura','La Palabra de Dios ilumina el próximo paso, aun cuando no podamos ver todo el camino.','Señor, dirige mis decisiones por medio de Tu Palabra.'],
['Echando toda vuestra ansiedad sobre él, porque él tiene cuidado de vosotros.','1 Pedro 5:7','Él cuida de usted','Puede entregar a Dios cada preocupación. Su cuidado es real, cercano y constante.','Padre, pongo mis cargas en Tus manos y descanso en Tu cuidado.'],
['El Señor es mi pastor; nada me faltará.','Salmo 23:1','El Buen Pastor','Dios guía, protege y sustenta a quienes confían en Él.','Señor, ayúdame a seguir Tu voz y descansar en Tu provisión.'],
['Si Dios es por nosotros, ¿quién contra nosotros?','Romanos 8:31','Esperanza firme','Las dificultades no tienen la última palabra cuando nuestra vida está en las manos de Dios.','Señor, afirma mi fe y recuérdame que no estoy solo.']
];
const d=devotionals[new Date().getDay()];
['dailyVerse','dailyReference','dailyTitle','dailyThought','dailyPrayer'].forEach((id,i)=>document.getElementById(id).textContent=d[i]);
const y=document.getElementById('year');if(y)y.textContent=new Date().getFullYear();