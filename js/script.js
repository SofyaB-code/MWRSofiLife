const sClick = new Audio('sounds/click.wav');
const sPaper = new Audio('sounds/paper.wav');
const sChime = new Audio('sounds/chime.wav');

document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.btn,.join').forEach(el=>{
    el.addEventListener('mouseenter', ()=>{ try{sClick.currentTime=0;sClick.play()}catch(e){} });
  });
  document.querySelectorAll('.pcard').forEach(el=>{
    el.addEventListener('mouseenter', ()=>{ try{sChime.currentTime=0;sChime.play()}catch(e){} });
  });
  const air = document.querySelector('.airwin');
  if(air){
    air.addEventListener('click', e=>{
      e.preventDefault();
      window.open('https://mwrlife.online/Sofiaruby777/', '_blank', 'noopener');
    });
  }
  const phone = document.querySelector('.phone');
  if(phone){
    phone.addEventListener('click', ()=>{
      window.open('https://mwrlife.online/Sofiaruby777/', '_blank', 'noopener');
    });
  }
  const modal = document.getElementById('licensesModal');
  document.querySelectorAll('[data-open="licenses"]').forEach(b=>{
    b.addEventListener('click', (e)=>{
      e.preventDefault();
      modal.style.display='flex';
      try{sPaper.currentTime=0;sPaper.play()}catch(e){}
    });
  });
  document.getElementById('closeModal').addEventListener('click', ()=> modal.style.display='none');
  modal.addEventListener('click', (e)=>{ if(e.target===modal) modal.style.display='none' });
});
