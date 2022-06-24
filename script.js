//=======================burger======================

const iconMenu = document.querySelector('.menu__icon');
const Header = document.querySelector('.header');
const burger = document.querySelectorAll('.burger');
const headerContainer = document.querySelector('.header__container');
if (iconMenu) {
   iconMenu.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      Header.classList.toggle('active');
      for (let i = 0; i < burger.length; i++) {
         if (iconMenu.classList.contains('active')) {
            burger[i].style.display = 'flex';
            headerContainer.classList.remove('_container')
         }
         else {
            burger[i].style.display = 'none';
            headerContainer.classList.add('_container')

         }
      }
   });
};

//======================aside=====================

const asideButton = document.querySelector('.aside__btn');
const aside = document.querySelector('.aside__block');
const asideText = document.querySelector('.aside__text');
if (asideButton) {
   asideButton.addEventListener('click', function () {
      asideButton.classList.toggle('active');
      aside.classList.toggle('active');
      asideText.classList.toggle('active');

      if (asideButton.classList.contains('active')) {
         const goto = scrollY + 380;
         window.scrollTo
            ({
               top: goto,
               behavior: "smooth"
            });
      }
   })
};

//======================popup===============

const popupOpen = document.querySelector('.contacts__link');
const popup = document.querySelector('.popup');
const popusClose = document.querySelector('.popup__close');
if (popup) {
   popupOpen.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      popup.classList.add('active');
   })
   popusClose.addEventListener('click', function () {
      document.body.classList.toggle('lock');
      popup.classList.remove('active');
   })
}

//=============popup phone=============

$(function () {
   $("#phone").mask("+7(999)999-99-99");
});

const tel = document.querySelector('.popup__input');
const popupBtn = document.querySelector('.popup__btn');
const popupCheckbox = document.querySelector('.checkbox__mask');

popupCheckbox.addEventListener('click', function () {
   popupCheckbox.classList.toggle('active');
})
popupBtn.addEventListener('click', function () {
   if (popupCheckbox.classList.contains('active') && tel.value !== '') {
      alert(`Ваша заявка принята${tel.value}`);
   }
   else if (tel.value == '') alert('введите номер');
   else alert('политика конфиденциальности');
});












