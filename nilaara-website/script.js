const menuToggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuToggle?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.textContent=open?'×':'☰';});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuToggle?.setAttribute('aria-expanded','false');if(menuToggle)menuToggle.textContent='☰';}));
const year=document.getElementById('year');if(year)year.textContent=new Date().getFullYear();
const form=document.getElementById('enquiry-form');
form?.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const message=`Hi Nilaara! I would like to enquire about Nilaara Herbal Hair Oil.\nName: ${d.get('name')}\nContact: ${d.get('phone')}\nMessage: ${d.get('message')||'Please share price and availability.'}`;const hint=document.getElementById('form-hint');hint.textContent='Opening WhatsApp. Please review and press Send in WhatsApp to deliver your enquiry.';window.open('https://wa.me/918111033515?text='+encodeURIComponent(message),'_blank','noopener,noreferrer');});
