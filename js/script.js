
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
let popupFeedback = document.querySelector('.modal-feedback');
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

