var $hamburger = document.querySelector('.hamburger');
var $menu = document.querySelector('.menu-bar');
var $cartModal = document.querySelector('#card-modal');
var $cartButton = document.querySelector('.header__menu--cart');
var $cartClose = document.querySelector('#cart-modal__close');

function toggleMenu() {
    $menu.classList.toggle('active-mobile');
}

function toggleCart() {
    $cartModal.classList.toggle('cart-modal--on');
}

function hideCart() {
    $cartModal.classList.remove('cart-modal--on');
}

$hamburger.addEventListener('click', toggleMenu);
$cartButton.addEventListener('click', toggleCart);
$cartClose.addEventListener('click', hideCart);

