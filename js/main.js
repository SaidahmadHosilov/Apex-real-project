/* Header menu */

let menuIcon = document.getElementById('toggle-menu');
let menu = document.querySelector('.right-header-nav');

menuIcon.addEventListener('click', function(){
    menu.classList.toggle('active-menu');
})

/* Header menu */
let arrowTop = document.querySelector('.toTop')

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 676){
        arrowTop.classList.add('toTopActive');
    } else {
        arrowTop.classList.remove('toTopActive');
    }
})