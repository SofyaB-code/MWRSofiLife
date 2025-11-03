function playVideo(){
  const video = document.getElementById('travelVideo');
  const btn = document.querySelector('.play');

  if (video.style.display === 'block'){
    video.pause();
    video.currentTime = 0;
    video.style.display = 'none';
    if (btn) btn.style.display = 'block';
    return;
  }

  video.style.display = 'block';
  video.play().catch(()=>{ /* без звука автоплей может блокироваться — клика хватает */ });
  if (btn) btn.style.display = 'none';

  // При завершении — вернуть кнопку и скрыть видео
  video.onended = () => {
    video.style.display = 'none';
    if (btn) btn.style.display = 'block';
  };
}
