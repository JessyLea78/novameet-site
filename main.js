document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('.acc-q').forEach(q=>{q.addEventListener('click',()=>{q.parentElement.classList.toggle('open');})});
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a=>{if(a.getAttribute('data-page')===path) a.classList.add('active');});
});
function handleContact(e){
  e.preventDefault();
  const name=document.getElementById('c_name').value;
  const email=document.getElementById('c_email').value;
  const type=document.getElementById('c_type').value;
  const msg=document.getElementById('c_msg').value;
  const subject=encodeURIComponent(`[NovaMeet Assistance] ${type} - ${name}`);
  const body=encodeURIComponent(`Nom: ${name}\nEmail compte: ${email}\nType: ${type}\n\nMessage:\n${msg}\n\n---\nEnvoye depuis assistance.html`);
  window.location.href=`mailto:novameet.support@gmail.com?subject=${subject}&body=${body}`;
  document.getElementById('contactMsg').style.display='block';
  document.getElementById('contactMsg').innerHTML='✅ Client mail ouvert vers <b>novameet.support@gmail.com</b>. Envoyez pour finaliser.';
  return false;
}
function handleDelete(e){
  e.preventDefault();
  const email=document.getElementById('d_email').value;
  const pseudo=document.getElementById('d_pseudo').value;
  const reason=document.getElementById('d_reason').value;
  const msg=document.getElementById('d_msg').value;
  const subject=encodeURIComponent(`Demande suppression NovaMeet - ${email}`);
  const body=encodeURIComponent(`DEMANDE SUPPRESSION NOVAMEET\nEmail: ${email}\nPseudo: ${pseudo}\nRaison: ${reason}\nMsg: ${msg}\nJe confirme etre proprietaire et demande suppression definitive sous 30j.`);
  window.location.href=`mailto:novameet.privacy@gmail.com?subject=${subject}&body=${body}&cc=novameet.support@gmail.com`;
  document.getElementById('deleteMsg').style.display='block';
  document.getElementById('deleteMsg').innerHTML='✅ Client mail ouvert vers <b>novameet.privacy@gmail.com</b>. Envoyez pour confirmer.';
  return false;
}
