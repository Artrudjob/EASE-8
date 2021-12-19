//Меню 
const header = document.querySelector('.header');
const burgerBtn = document.querySelector('#burger-btn');
const menuBtn = document.querySelector('#menu-btn');
let closeButton;

function toggleMenuBtnVisibility() {
    burgerBtn.classList.toggle('header__burger-btn_visibility_hidden');
    menuBtn.classList.toggle('header__menu-btn_visibility_hidden');
}

function openMenu() {
    const menuTemplate = document.querySelector('#menu').cloneNode(true).content;
    header.prepend(menuTemplate);
    toggleMenuBtnVisibility();
}

burgerBtn.addEventListener('click', () => {openMenu(), addCloseButton()} );
menuBtn.addEventListener('click', () => {openMenu(), addCloseButton()} );

function closeMenu() {
    const menu = closeButton.closest('.header__menu-container');
    menu.remove();
    toggleMenuBtnVisibility();
}

function addCloseButton() {
    closeButton = document.querySelector('.header__close-menu');
    closeButton.addEventListener('click', () => closeMenu());
}

//Анимация секции Looks

const imgs = document.querySelectorAll('.looks__img');
const arrImgs = Array.from(imgs);

function looksAnimate() {
    let totalCount = Math.floor(Math.random() * 3 + 1 );
    for (let i = 0; i < totalCount; i++) {
        const item = arrImgs[Math.floor(Math.random() * arrImgs.length)];
        const set = new Set();
        set.add(item);
        for (let el of set) {
            if (el.classList.contains('looks__fadeOut')) {
                el.classList.remove('looks__fadeOut');
                el.classList.add('looks__fadeIn'); 
                el.classList.remove('looks__img_visibility_hidden');
            } else {
                el.classList.remove('looks__fadeIn');
                el.classList.add('looks__fadeOut');
                setTimeout(function() {
                    el.classList.add('looks__img_visibility_hidden');
                }, 500)
            }
        }    
    } 
}

setInterval(looksAnimate, 3000);