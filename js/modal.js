const modal = () => {
  const modal = document.querySelector('.search-model');
  const modalBtn = document.querySelector('.icon_search');
  const modalClose = modal.querySelector('.search-close-switch');
  const modalInput = document.querySelector('#search-input');

  modalBtn.addEventListener('click', () => {
    modal.style.display = 'block';
  })

  modalClose.addEventListener('click', () => {
    modal.style.display = 'none';
  })

  modalInput.addEventListener('input', (event) => {
    console.log(event.target.value);
  })
}

modal();