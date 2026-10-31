const frame=document.getElementById('photoFrame');
const bar=document.getElementById('progress');
const fullPhotoToggle=document.getElementById('fullPhotoToggle');
let touching=false, fullReveal=false;
function positionReveal(x,y){
  const r=frame.getBoundingClientRect();
  const px=Math.max(0,Math.min(100,(x-r.left)/r.width*100));
  const py=Math.max(0,Math.min(100,(y-r.top)/r.height*100));
  frame.style.setProperty('--mx',px+'%');frame.style.setProperty('--my',py+'%');
}
function showReveal(e){if(fullReveal)return;positionReveal(e.clientX,e.clientY);frame.classList.add('active')}
function hideReveal(){if(!fullReveal)frame.classList.remove('active')}
frame.addEventListener('pointerenter',e=>{if(e.pointerType==='mouse')showReveal(e)});
frame.addEventListener('pointermove',e=>{if(e.pointerType==='mouse'||touching)showReveal(e)});
frame.addEventListener('pointerleave',e=>{if(e.pointerType==='mouse')hideReveal()});
frame.addEventListener('pointerdown',e=>{
  if(e.pointerType==='touch'||e.pointerType==='pen'){
    touching=true;frame.setPointerCapture(e.pointerId);
  }
  showReveal(e);
});
function finishTouch(e){
  if(e.pointerType==='touch'||e.pointerType==='pen'){
    touching=false;hideReveal();
  }
}
frame.addEventListener('pointerup',finishTouch);
frame.addEventListener('pointercancel',finishTouch);
frame.addEventListener('lostpointercapture',()=>{touching=false;hideReveal()});
frame.addEventListener('focus',()=>{if(!fullReveal){frame.style.setProperty('--mx','50%');frame.style.setProperty('--my','50%');frame.classList.add('active')}});
frame.addEventListener('blur',hideReveal);
fullPhotoToggle.addEventListener('click',()=>{
  fullReveal=!fullReveal;
  frame.classList.toggle('full-reveal',fullReveal);
  frame.classList.toggle('active',fullReveal);
  fullPhotoToggle.setAttribute('aria-pressed',String(fullReveal));
  fullPhotoToggle.textContent=fullReveal?'SHOW SILHOUETTE ↗':'REVEAL FULL PHOTO ↗';
});
function scrollProgress(){const max=document.documentElement.scrollHeight-innerHeight;bar.style.width=(max>0?scrollY/max*100:0)+'%'}addEventListener('scroll',scrollProgress,{passive:true});scrollProgress();
