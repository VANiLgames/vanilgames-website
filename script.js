const menu=document.querySelector('.menu-toggle');const links=document.querySelector('.nav-links');if(menu)menu.addEventListener('click',()=>links.classList.toggle('open'));
document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>io.observe(e));
const vio=new IntersectionObserver(entries=>entries.forEach(e=>{const v=e.target;if(e.isIntersecting)v.play().catch(()=>{});else v.pause()}),{threshold:.45});document.querySelectorAll('video[data-autoplay]').forEach(v=>vio.observe(v));
const slides=[...document.querySelectorAll('.slide')],dots=[...document.querySelectorAll('.dot')];let slideIndex=0,timer;function showSlide(i){if(!slides.length)return;slideIndex=(i+slides.length)%slides.length;slides.forEach((s,n)=>s.classList.toggle('active',n===slideIndex));dots.forEach((d,n)=>d.classList.toggle('active',n===slideIndex))}function cycle(){timer=setInterval(()=>showSlide(slideIndex+1),3800)}dots.forEach((d,i)=>d.addEventListener('click',()=>{clearInterval(timer);showSlide(i);cycle()}));showSlide(0);cycle();
const medals=[...document.querySelectorAll('.medal')];let medalIndex=0;const medalCounter=document.querySelector('.medal-counter');function showMedal(i){if(!medals.length)return;medalIndex=(i+medals.length)%medals.length;medals.forEach((m,n)=>m.classList.toggle('active',n===medalIndex));if(medalCounter)medalCounter.textContent=`${medalIndex+1} / ${medals.length}`}document.querySelector('[data-medal-prev]')?.addEventListener('click',()=>showMedal(medalIndex-1));document.querySelector('[data-medal-next]')?.addEventListener('click',()=>showMedal(medalIndex+1));showMedal(0);

// Accessible fighter profiles: hover on desktop, tap to toggle on touch devices.
document.querySelectorAll('.fighter-card').forEach(card=>{
  card.addEventListener('click',e=>{
    const open=card.classList.contains('is-open');
    document.querySelectorAll('.fighter-card.is-open').forEach(c=>c.classList.remove('is-open'));
    if(!open) card.classList.add('is-open');
    e.stopPropagation();
  });
});
document.addEventListener('click',()=>document.querySelectorAll('.fighter-card.is-open').forEach(c=>c.classList.remove('is-open')));

// Lightweight YouTube embeds. A real player is created only after the visitor clicks Play.
document.querySelectorAll('.youtube-lite').forEach(player=>{
  const id=player.dataset.youtubeId;
  const start=player.dataset.start||'0';
  player.style.backgroundImage=`url(https://i.ytimg.com/vi/${id}/hqdefault.jpg)`;
  if(location.protocol==='file:') player.classList.add('local-file');
  player.querySelector('.youtube-play')?.addEventListener('click',()=>{
    if(location.protocol==='file:'){
      window.open(`https://www.youtube.com/watch?v=${id}&t=${start}s`,'_blank','noopener');
      return;
    }
    const iframe=document.createElement('iframe');
    iframe.title=player.dataset.title||'YouTube video';
    iframe.allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.allowFullscreen=true;
    iframe.referrerPolicy='strict-origin-when-cross-origin';
    const origin=encodeURIComponent(location.origin);
    iframe.src=`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&start=${start}&rel=0&playsinline=1&origin=${origin}`;
    player.replaceChildren(iframe);
  });
});

// Rotate the four metal miniature photos in the compact statistics icon.
const jetFrames=[...document.querySelectorAll('.jet-rotator .stat-frame')];
if(jetFrames.length){let jetIndex=0;setInterval(()=>{jetFrames[jetIndex].classList.remove('active');jetIndex=(jetIndex+1)%jetFrames.length;jetFrames[jetIndex].classList.add('active')},1800)}


function cycleFrames(selector, interval){
  const frames=[...document.querySelectorAll(selector)];
  if(frames.length<2)return;
  let index=0;
  setInterval(()=>{
    frames[index].classList.remove('active');
    index=(index+1)%frames.length;
    frames[index].classList.add('active');
  },interval);
}
cycleFrames('.carrier-gallery-image',3600);
cycleFrames('.weapon-gallery-image',2400);

// Play selected local videos once when they first enter the viewport, then show a replay control.
(() => {
  const videos = document.querySelectorAll('video[data-play-once]');
  if (!videos.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting && !video.dataset.hasPlayed) {
        video.dataset.hasPlayed = 'true';
        video.play().catch(() => {});
      } else if (!entry.isIntersecting && !video.ended) {
        video.pause();
      }
    });
  }, { threshold: .45 });
  videos.forEach(video => {
    const frame = video.closest('.home-studio-video');
    const replay = frame?.querySelector('.video-replay');
    video.addEventListener('ended', () => frame?.classList.add('video-ended'));
    replay?.addEventListener('click', () => {
      frame?.classList.remove('video-ended');
      video.dataset.hasPlayed = 'true';
      video.currentTime = 0;
      video.play().catch(() => {});
    });
    observer.observe(video);
  });
})();
