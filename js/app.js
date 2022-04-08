var closeHeader = document.querySelector('.nav__mobile-close')//buton X
var mobile = document.querySelector('.nav__mobile')// menu mobile
var openButton = document.querySelector('.nav__icon')//menu icon mobile
var overlay = document.querySelector('.nav_mobile-overlay')//overlay mobile
closeHeader.onclick = function() {
    mobile.classList.remove('hidden');
    overlay.classList.remove('hidden')
}
overlay.onclick = function() {
    overlay.classList.remove('hidden');
    mobile.classList.remove('hidden')
}
openButton.onclick = function() {
    mobile.classList.add('hidden');
    overlay.classList.add('hidden')
}
openButton.onclick = function() {
    mobile.classList.add('hidden');
    overlay.classList.add('hidden')
}






