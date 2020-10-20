// map modal
const popupMap = document.querySelector('.modal-map');
const openPopupButtonMap = document.querySelector('.button-open-map');
const closePopupButtonMap = popupMap.querySelector('.map-modal-close');

openPopupButtonMap.addEventListener('click', function (evtMap) {
  evtMap.preventDefault();
  popupMap.classList.add('modal-show');
});

closePopupButtonMap.addEventListener('click', function (evtMap) {
  evtMap.preventDefault();
  popupMap.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evtMap) {
  if (evtMap.key === 'Escape') {
    if (popupMap.classList.contains('modal-show')) {
      evtMap.preventDefault();
      popupMap.classList.remove('modal-show');
    }
  }
});

// feedback modal
const popupFeedback = document.querySelector('.modal-feedback');
const openPopupButtonFeedback = document.querySelector('.button-open-feedback');
const closePopupButtonFeedback = popupFeedback.querySelector('.feedback-modal-close');
const nameField = popupFeedback.querySelector('.name-field');
const emailField = popupFeedback.querySelector('.email-field');
const form = popupFeedback.querySelector('form');
let isNameStorageSupport = true;
let isEmailStorageSupport = true;
let nameStorage = "";
let emailStorage = "";

try {
  nameStorage = localStorage.getItem('name');
  emailStorage = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

openPopupButtonFeedback.addEventListener('click', function (evtFeedback) {
  evtFeedback.preventDefault();
  popupFeedback.classList.add('modal-show');
  if (nameStorage) {
    nameField.value = nameStorage;
  }
  if (emailStorage) {
    emailStorage.value = emailStorage;
  }
  nameField.focus();
});

closePopupButtonFeedback.addEventListener('click', function (evtFeedback) {
  evtFeedback.preventDefault();
  popupFeedback.classList.remove('modal-show');
  popupFeedback.classList.remove('modal-error');
});

form.addEventListener('submit', function (evtFeedback) {
  if (!nameField.value || !emailField.value) {
    evtFeedback.preventDefault();
    popupFeedback.classList.remove('modal-error');
    popupFeedback.offsetWidth = popupFeedback.offsetWidth;
    popupFeedback.classList.add('modal-error');
  } else {
    if (isStorageSupport) {
      localStorage.setItem('name', nameField.value);
      localStorage.setItem('email', emailField.value);
    }
  }
});

window.addEventListener('keydown', function(evtFeedback) {
  if (evtFeedback.key === 'Escape') {
    if (popupFeedback.classList.contains('modal-show')) {
      evtFeedback.preventDefault();
      popupFeedback.classList.remove('modal-show');
      popupFeedback.classList.remove('modal-error');
    }
  }
});

// sliders: carousel
const carouselSlides = document.querySelectorAll('.carousel-item');
const prevControlSlideButton = document.querySelector('.prev-control-button');
const nextControlSlideButton = document.querySelector('.next-control-button')
const carouselButtons = document.querySelectorAll('.carousel-button')

prevControlSlideButton.addEventListener('click', function (evtPrev) {
  evtPrev.preventDefault();
  for (let i = 0; i < carouselSlides.length; i++) {
    carouselSlides[i].classList.toggle('active');
  }
  for (let j = 0; j < carouselButtons.length; j++) {
    carouselButtons[j].classList.toggle('current');
  }
});

nextControlSlideButton.addEventListener('click', function (evtNext) {
  evtNext.preventDefault();
  for (let i = 0; i < carouselSlides.length; i++) {
    carouselSlides[i].classList.toggle('active');
  }
  for (let j = 0; j < carouselButtons.length; j++) {
    carouselButtons[j].classList.toggle('current');
  }
});

const removeSliderActiveState = function () {
  carouselSlides.forEach(function(btn) {
    btn.classList.remove('active');
  })
  carouselButtons.forEach(function(item) {
    item.classList.remove('current');
  })
}

carouselButtons.forEach(function(element, index) {
  element.addEventListener('click', function () {
    removeSliderActiveState();
    element.classList.add('current');
    carouselSlides[index].classList.add('active');
  });
});

// sliders: tabs
const itemsSlider = document.querySelectorAll('.slider-item');
const sliderButtons = document.querySelectorAll('.slider-button');
const removeActiveState = function () {
  sliderButtons.forEach(function(btn) {
    btn.classList.remove('active');
  })
  itemsSlider.forEach(function(item) {
    item.classList.remove('active');
  })
}

sliderButtons.forEach(function(element, index) {
  element.addEventListener('click', function () {
    removeActiveState();
    element.classList.add('active');
    itemsSlider[index].classList.add('active');
  });
});
