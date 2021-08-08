const gridPictures = document.querySelectorAll('.photo-grid__item')
const popup = document.querySelector('.popup')
const closeButton = popup.querySelector('.popup__close-button')
const backgroundImage = popup.querySelector('.popup__background-image')
const imageTitle = popup.querySelector('.popup__image-title')
const placeImages = document.querySelectorAll('.place__image')

function openPopup(event) {
  backgroundImage.src = event.target.src

  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupByClickOnEsc);
};

const closePopupByClickOnEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  }
}

function closePopupByClickOnOverlay(event) {
  if (event.target === event.currentTarget)
    closePopup(event.target);
}

function closePopup() {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupByClickOnEsc);
}

closeButton.addEventListener('click', closePopup)


gridPictures.forEach((picture) => {
  picture.addEventListener('click', openPopup)
})

placeImages.forEach((picture) => {
  picture.addEventListener('click', openPopup)
})

popup.addEventListener('click', closePopupByClickOnOverlay)