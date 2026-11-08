
document.addEventListener('DOMContentLoaded', ()=>{
  document.querySelectorAll('.acc-q').forEach(q=>{
    q.addEventListener('click',()=>{
      const item=q.parentElement;
      item.classList.toggle('open');
    })
  });
  // active nav
  const path=location.pathname.split('/').pop()||'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a=>{
    if(a.getAttribute('data-page')===path) a.classList.add('active');
  });

  // Forms handling - NOT functional without backend
  const handleForm = (id, msgId) => {
    const f=document.getElementById(id);
    if(!f) return;
    f.addEventListener('submit', (e)=>{
      e.preventDefault();
      const out=document.getElementById(msgId);
      if(out){
        out.style.display='block';
        out.innerHTML = "⚠️ Formulaire non opérationnel : backend à connecter. <br><br>Pour le rendre fonctionnel, connectez ce formulaire à votre backend Supabase / API NovaMeet. <br>Voir README section 'Connexion backend'.";
      }
    })
  }
  handleForm('contactForm','contactMsg');
  handleForm('deleteForm','deleteMsg');

  // TOC highlight
  const tocLinks=document.querySelectorAll('.toc a');
  const sections=document.querySelectorAll('section[id]');
  const obs=new IntersectionObserver((entries)=>{
    entries.forEach(ent=>{
      if(ent.isIntersecting){
        tocLinks.forEach(l=>l.classList.remove('active'));
        const a=document.querySelector(`.toc a[href="#${ent.target.id}"]`);
        if(a) a.classList.add('active');
      }
    })
  },{rootMargin:'-40% 0px -50% 0px'});
  sections.forEach(s=>obs.observe(s));
});
