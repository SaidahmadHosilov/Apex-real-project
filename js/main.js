/* Header menu */

let menuIcon = document.getElementById('toggle-menu');
let menu = document.querySelector('.right-header-nav');
let menuIconX = document.getElementById('toggle-menu-x');

menuIcon.addEventListener('click', function(){
    menu.classList.add('active-menu');
    menuIcon.style.display = 'none';
    menuIconX.style.display = 'block'
})
menuIconX.addEventListener('click', function(){
    menu.classList.remove('active-menu');
    menuIconX.style.display = 'none';
    menuIcon.style.display = 'block'
})

/* Header menu */
let arrowTop = document.querySelector('.toTop')

window.addEventListener('scroll', function(){
    if(window.pageYOffset > 676){
        arrowTop.classList.add('toTopActive');
    } else {
        arrowTop.classList.remove('toTopActive');
    }

    // if(window.pageXOffset > 950)
})
window.addEventListener('resize', function(){
    if(document.body.clientWidth <= 950){
        menu.classList.remove('active-menu');
        menuIconX.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        menuIconX.style.display = 'none';
        menuIcon.style.display = 'none';
    }
})


/* Modal-course */
let headerBtn = document.querySelector('.font-header-btn');
let modalCourse = document.querySelector('.modal-course');
let closeModal = document.getElementById('close-modal-course')
let showModalCourse = document.querySelector('#modal-course-btn');

// create cover modal div and show modal
headerBtn.addEventListener('click', function(){
    let coverModalBg = document.createElement('div');
    coverModalBg.classList.add('cover-body-modal');
    document.querySelector('.modal-in').append(coverModalBg);
    
    modalCourse.classList.add('modal-course-active');
    document.body.style.overflow = 'hidden';
})

// close modal
closeModal.addEventListener('click', function(){
    let coverModal = document.querySelector('.cover-body-modal');

    modalCourse.classList.remove('modal-course-active');
    document.querySelector('.modal-in').removeChild(coverModal);
    document.body.style.overflow = 'auto';
})

// close modal with target
window.addEventListener('click', function(event){
    var modalTarget = event.target;
    if(modalTarget.classList.contains('cover-body-modal')){
        modalTarget.parentElement.removeChild(modalTarget);

        modalCourse.classList.remove('modal-course-active');
        modalSubmit.classList.remove('modal-submit-active');
        document.body.style.overflow = 'auto';
    }
})

// submit modal
let closeSubmitBtn = document.querySelector('#close-submit-btn');
let modalSubmit = document.querySelector('.modal-course-submit');

showModalCourse.addEventListener('click', function(){
    let coverModalBg = document.createElement('div');
    coverModalBg.classList.add('cover-body-modal');
    document.querySelector('.modal-in-submit').append(coverModalBg);

    modalCourse.classList.remove('modal-course-active');
    modalSubmit.classList.add('modal-submit-active');

    document.querySelector('.modal-course .modal-in')
    .removeChild(document.querySelector('.modal-course .cover-body-modal'));
})

closeSubmitBtn.addEventListener('click', function(){
    modalSubmit.classList.remove('modal-submit-active');
    document.querySelector('.modal-in-submit')
    .removeChild(document.querySelector('.cover-body-modal'));
    document.body.style.overflow = 'auto';
})

// course part
let courseBtn = document.querySelectorAll('.course-btn');
for(const btn of courseBtn){
    btn.addEventListener('click', function(){
        let coverModalBg = document.createElement('div');
        coverModalBg.classList.add('cover-body-modal');
        document.querySelector('.modal-in').append(coverModalBg);
        
        modalCourse.classList.add('modal-course-active');
        document.body.style.overflow = 'hidden';
    })
}
// course part

// Teacher part

// modal img
let images = document.querySelectorAll('#photos-div .photos img');
let modalImgShow = document.querySelector('.img-modal');
let modalImg = document.querySelector('.img-modal img');
let closeModalImg = document.querySelector('#close-modal-img');

closeModalImg.addEventListener('click', function(){
    modalImgShow.classList.remove('img-modal-active');
    document.body.style.overflow = 'auto';
})
for(const img of images){
    img.addEventListener('click', function(event){
        let targetImgSrc = event.target.getAttribute('src');

        modalImg.src = targetImgSrc;
        modalImgShow.classList.add('img-modal-active');
        document.body.style.overflow = 'hidden';
    })
}
window.addEventListener('click', function(evt){
    if(evt.target.classList == 'modal-img-main'){
        modalImgShow.classList.remove('img-modal-active');
        document.body.style.overflow = 'auto';
    }
})
// modal img
// Teacher part


/* Modal-courses end */

// Footer modal
let ftrBtn = document.querySelector('#footer-submit');

ftrBtn.addEventListener('click', function(){
    let coverModalBg = document.createElement('div');
    coverModalBg.classList.add('cover-body-modal');
    document.querySelector('.modal-in-submit').append(coverModalBg);

    modalCourse.classList.remove('modal-course-active');
    modalSubmit.classList.add('modal-submit-active');
})
// Footer modal

/* -- owl carousel -- */

$(document).ready(function(){
    
    // News Carousel
    $("#news-div .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            700:{
                items: 2
            },
            950:{
                items: 2
            },
            1000:{
                items: 3
            },
        }
    })

    // Courses Carousel
    $("#courses-div .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            700:{
                items: 2
            },
            950:{
                items: 2
            },
            1000:{
                items: 3
            },
        }
    })

    // Teachers Carousel
    $("#teachers-div .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            700:{
                items: 2
            },
            950:{
                items: 2
            },
            1000:{
                items: 3
            },
        }
    })

    // Videos Carousel
    $("#videos-div .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            700:{
                items: 2
            },
            950:{
                items: 2
            },
            1000:{
                items: 3
            },
        }
    })

    // Results Carousel
    $("#result-div .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            700:{
                items: 2
            },
            950:{
                items: 2
            },
            1000:{
                items: 3
            },
        }
    })

    // Commits Carousel
    $("#commits-div .owl-carousel").owlCarousel({
        loop: true,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1
            },
            600:{
                items: 1
            },
            700:{
                items: 2
            },
            950:{
                items: 2
            },
            1000:{
                items: 3
            },
        }
    })
})

/* Modal video  */

let closeVideo = document.getElementById('modal-video-close');
let videoModal = document.querySelector('.video-modal');

closeVideo.addEventListener('click', function(){
    let videoCtn = document.querySelector('.video-container');
    let videoIframe = document.querySelector('.video-container iframe');

    videoCtn.removeChild(videoIframe);
    videoModal.classList.remove('video-modal-active');
})

let videosOverlay = document.querySelectorAll('#videos-div .ytp-large-play-button');

for(const overlay of videosOverlay){
    overlay.addEventListener('click', function(event){
        console.log(event.target);
        console.log(event.currentTarget);
        console.log('success');
    })
}

// News Modal
let newsModal = document.querySelector('.new-modal');
let closeNewsModal = document.querySelector('.new-item-top i');
let newsImages = document.querySelectorAll('.new-image');

for(const image of newsImages){
    image.addEventListener('click', function(evt){
        let imgSrc = evt.target.getAttribute('src'); 
        let newsTitle = evt.target.parentElement.querySelector('h3')
        let newsDate = evt.target.parentElement.querySelector('span')

        document.getElementById('new-modal-img').src = imgSrc;
        document.getElementById('title-img-modal').innerHTML = newsTitle.textContent;
        document.getElementById('img-modal-date').innerHTML = newsDate.textContent;
        document.getElementById('some-info').innerHTML = 
        evt.target.parentElement.querySelector('.some-info').textContent;
        document.getElementById('desc_title').innerHTML = 
        evt.target.parentElement.querySelector('.desc_title').textContent;
        document.getElementById('description').innerHTML = 
        evt.target.parentElement.querySelector('.description').textContent;
        

        newsModal.classList.add('new-modal-active');
        document.body.style.overflow = 'hidden';
    })
}

window.addEventListener('click', function(evt){
    if(evt.target.classList[0] == 'modal-new-main'){
        newsModal.classList.remove('new-modal-active');
        document.body.style.overflow = 'auto';
    }
})

closeNewsModal.addEventListener('click', function(){
    newsModal.classList.remove('new-modal-active');
    document.body.style.overflow = 'auto';
})

// News Modal


/* Modal video  */

// function autoPlayYouTubeModal() {
//     var trigger = $('.trigger');
//     trigger.click(function(e) {
//     e.preventDefault();
//     var theModal = $(this).data("target");
//     var videoSRC = $(this).attr("src");
//     var videoSRCauto = videoSRC + "?autoplay=1";
//     $(theModal + ' iframe').attr('src', videoSRCauto);
//     $(theModal).on('hidden.bs.modal', function(e) {
//         $(theModal + ' iframe').attr('src', '');
//     });
//     });
// };
