function toggleScrollClass() {
    let nav = document.querySelectorAll('header')[0];
    window.pageYOffset > 0? nav.classList.add('fade') : nav.classList.remove('fade');
}
window.addEventListener('scroll', function () {toggleScrollClass()});
toggleScrollClass();