'use strict';
let menuHeader = document.querySelector('.menu-header__menu');
let brandDark = document.querySelector('.brand__dark');
let cross = document.querySelector('.brand__cross');

let magnifier = document.querySelector('.menu-header__magnifier')
let magnifierHidden = document.querySelector('.brand-menu-header__magnifier-full_hidden')
let magnifierCross = document.querySelector('.brand-menu-header__cross-magnidier')
let brandMagnifierDark = document.querySelector('.brand__magnifier-dark')

let contactsImg = document.querySelector('.menu-header__contacts')
let contactsCross = document.querySelector('.brand__contacts-cross')
let brandContactsDark = document.querySelector('.brand__contacts-dark')

let baskedImg = document.querySelector('.menu-header__bascet')
let baskedCross = document.querySelector('.brand__cross-basked')
let brandBaskedDark = document.querySelector('.brand__basket-dark')

function toggleMenuTopRight(){
    brandDark.classList.toggle('brand__dark_hidden');
}
cross.addEventListener('click', toggleMenuTopRight);
menuHeader.addEventListener('click', toggleMenuTopRight);

function toggleMagnifier(){
    brandMagnifierDark.classList.toggle('brand__magnifier-dark_hidden');
}
magnifier.addEventListener('click', toggleMagnifier);
magnifierCross.addEventListener('click', toggleMagnifier);

function toggleMenuTopRightContacts(){
    brandContactsDark.classList.toggle('brand__contacts-dark_hidden');
}
contactsImg.addEventListener('click', toggleMenuTopRightContacts);
contactsCross.addEventListener('click', toggleMenuTopRightContacts);

function toggleMenuTopRightBasked(){
    brandBaskedDark.classList.toggle('brand__basket-dark_hidden');
}
baskedImg.addEventListener('click', toggleMenuTopRightBasked);
baskedCross.addEventListener('click', toggleMenuTopRightBasked);