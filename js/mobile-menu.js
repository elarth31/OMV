// (() => {
//   const refs = {
//     openMenuBtn: document.querySelector('[data-menu-open]'),
//     closeMenuBtn: document.querySelector('[data-menu-close]'),
//     navList: document.querySelector('.header-nav-list'),
//     menu: document.querySelector('[data-menu]'),
//   };

//   refs.openMenuBtn.addEventListener('click', toggleMenu);
//   refs.closeMenuBtn.addEventListener('click', toggleMenu);
//   refs.navList.addEventListener('click', closeMenu);

//   function toggleMenu() {
//     refs.menu.classList.toggle('header-mobile-menu--is-hidden');
//   }
//   function closeMenu() {
//     refs.menu.classList.add('header-mobile-menu--is-hidden');
//   }
// })();


// // Выбираем элемент списка
// const logoList = document.getElementById("logo-list");

// // Клонируем элементы списка для бесконечной прокрутки
// function cloneLogos() {
//     const clone = logoList.cloneNode(true); // Клонируем весь список
//     logoList.parentElement.appendChild(clone); // Добавляем клон после оригинального списка
// }

// // Запускаем функцию клонирования при загрузке страницы
// window.addEventListener("load", cloneLogos);
