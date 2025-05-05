const levels = document.querySelectorAll('.navigation__list');
const dataNext = document.querySelectorAll('[data-next]');

dataNext.forEach((button) => {
  button.addEventListener('click', () => {
    const nextId = button.getAttribute('data-next');
    levels.forEach((level) => {
      level.hidden = true;
    });
    document.getElementById(nextId).hidden = false;
  });
});

document.querySelectorAll('[data-back]').forEach((button) => {
  button.addEventListener('click', () => {
    const current = button.closest('.navigation__list');
    current.hidden = true;
    const prevLevel = current.dataset.level - 1;
    document.querySelector(`.navigation__list[data-level="${prevLevel}"]`).hidden = false;
  });
});
