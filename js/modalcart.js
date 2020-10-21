// cart modal
const innerPage = document.querySelector('.inner-page');
const popupCart = innerPage.querySelector('.modal-cart');
const popupCartOpenButtons = innerPage.querySelectorAll('.add-basket-button');
const popupCartCloseButtons = popupCart.querySelectorAll('.cart-modal-close')

for (let i = 0; i < popupCartOpenButtons.length; i++) {
  const popupCartOpenButton = popupCartOpenButtons[i];

  popupCartOpenButton.addEventListener('click', function (evtCart) {
    evtCart.preventDefault();
    popupCart.classList.add('modal-show');
  });
}

for (let j = 0; j < popupCartCloseButtons.length; j++) {
  const popupCartCloseButton = popupCartCloseButtons[j];

  popupCartCloseButton.addEventListener('click', function (evtCart) {
    evtCart.preventDefault();
    popupCart.classList.remove('modal-show');
  });
}

window.addEventListener('keydown', function (evtCart) {
  if (evtCart.key === 'Escape') {
    if (popupCart.classList.contains('modal-show')) {
      evtCart.preventDefault();
      popupCart.classList.remove('modal-show')
    }
  }
});
