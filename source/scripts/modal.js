
const modal = document.querySelector('#modal');
const modalWrapper = document.querySelector('#modal-wrapper');
const customButtons = document.querySelectorAll('.custom');
const navigationButtons = document.querySelectorAll('.navigation button:not([data-next]):not([data-back])');

function openModalHandler() {
  modal.classList.toggle('modal--close');
}

function modalCloseEscHandler(evt) {
  if (evt.key === 'Escape') {
    modal.classList.toggle('modal--close');
  }
}

function modalCloseClickHandler(evt) {
  const withinBoundaries = evt.composedPath().includes(modalWrapper);
  if (!withinBoundaries) {
    modal.classList.toggle('modal--close');
  }
}


navigationButtons.forEach((button) => {
  button.addEventListener('click', openModalHandler);
});

customButtons.forEach((button) => {
  button.addEventListener('click', openModalHandler);
});

document.addEventListener('keydown', modalCloseEscHandler);

modal.addEventListener('click', modalCloseClickHandler);
