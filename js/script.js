// Звуковые эффекты
const sClick = new Audio('sounds/click.wav');
const sPaper = new Audio('sounds/paper.wav');
const sChime = new Audio('sounds/chime.wav');

document.addEventListener('DOMContentLoaded', () => {

  // Клик и hover на кнопках
  document.querySelectorAll('.btn, .join').forEach(el => {
    el.addEventListener('mouseenter', () => {
      try {
        sClick.currentTime = 0;
        sClick.play();
      } catch (e) {}
    });
  });

  // Наведение на фото
  document.querySelectorAll('.pcard').forEach(el => {
    el.addEventListener('mouseenter', () => {
      try {
        sChime.currentTime = 0;
        sChime.play();
      } catch (e) {}
    });
  });

  // Кнопка "Смотреть презентацию"
  const air = document.querySelector('.airwin');
  if (air) {
    air.addEventListener('click', (e) => {
      e.preventDefault();
      window.open('https://mwrlife.online/Sofiaruby777/', '_blank', 'noopener');
    });
  }

  // Телефон с видео
  const phone = document.querySelector('.phone');
  if (phone) {
    phone.addEventListener('click', () => {
      window.open('https://mwrlife.online/Sofiaruby777/', '_blank', 'noopener');
    });
  }

  // Модальное окно с лицензиями
  const modal = document.getElementById('licensesModal');
  const closeBtn = document.getElementById('closeModal');

  document.querySelectorAll('[data-open="licenses"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.style.display = 'flex';
      try {
        sPaper.currentTime = 0;
        sPaper.play();
      } catch (e) {}
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  }

  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  }
});
