const EMAIL='pasina.avocat@gmail.com',PHONE='+33354162279';
const h=document.getElementById('h');
addEventListener('scroll',()=>h.classList.toggle('s',scrollY>80||h.dataset.inner==='1'),{passive:true});
const dlg=document.getElementById('dlg');
if(dlg){document.querySelectorAll('.press figure').forEach(f=>f.addEventListener('click',()=>{const i=f.querySelector('img');if(!i)return;dlg.querySelector('img').src=i.src;dlg.showModal()}));dlg.addEventListener('click',()=>dlg.close())}
const f=document.getElementById('f');
if(f)f.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(f),s=document.getElementById('fs');
location.href='mailto:'+EMAIL+'?subject='+encodeURIComponent('Demande de rendez-vous – '+d.get('n'))+'&body='+encodeURIComponent(d.get('m')+'\n\nContact : '+d.get('c'));s.textContent='Votre messagerie s’ouvre pour envoyer la demande.'});

/* ===== Animations discrètes ===== */
(()=>{
if(matchMedia('(prefers-reduced-motion: reduce)').matches||!('IntersectionObserver' in window))return;
const bar=document.createElement('div');bar.id='bar';document.body.prepend(bar);
document.querySelectorAll('.hero h1,.phero h1').forEach(el=>{
  const words=el.textContent.trim().split(/\s+/);el.textContent='';
  words.forEach((w,i)=>{const o=document.createElement('span');o.className='w';const n=document.createElement('span');n.textContent=w;n.style.setProperty('--i',i);o.appendChild(n);el.appendChild(o);if(i<words.length-1)el.appendChild(document.createTextNode(' '))});
  el.classList.add('split');el.setAttribute('aria-label',words.join(' '));
});
const sel='section>h2,section>div>h2,.lead,.prob a,.trust>div,.about>div,.pillars>div,.dom article,.team figure,.pgrid figure,.wide,.portrait,.banner,.steps li,.fees,section>details,.map,.links,#contact form,.call>div';
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12,rootMargin:'0px 0px -8% 0px'});
document.querySelectorAll(sel).forEach(el=>{
  if(el.getBoundingClientRect().top<innerHeight*.9)return;
  const sibs=[...el.parentElement.children].filter(x=>x.matches(sel));
  el.style.setProperty('--d',(sibs.indexOf(el)%3)*.1+'s');
  el.classList.add('rv');io.observe(el);
});
const gate=document.querySelector('.gate'),mm=document.querySelector('.mm');let last=scrollY,tick=false;
addEventListener('scroll',()=>{if(tick)return;tick=true;requestAnimationFrame(()=>{
  const y=scrollY,m=document.documentElement.scrollHeight-innerHeight;
  bar.style.transform='scaleX('+(m>0?y/m:0)+')';
  if(gate&&y<innerHeight)gate.style.transform='translateY('+(y*.1)+'px)';
  if(y>500&&y>last+6&&!(mm&&mm.open))h.classList.add('hide');else if(y<last-6||y<200)h.classList.remove('hide');
  last=y;tick=false})},{passive:true});
})();

/* Ouverture de la robe */
(()=>{const r=document.getElementById('robe'),html=document.documentElement;if(!r)return;
if(!html.classList.contains('robe-on')){r.remove();return}
const end=skip=>{html.classList.add('robe-done');if(skip)html.classList.remove('robe-on');r.remove()};
r.querySelector('.skip').addEventListener('click',()=>end(true));
r.querySelector('.rp.r').addEventListener('animationend',e=>{if(e.animationName==='openR')end(false)});
setTimeout(()=>end(false),5000);})();
