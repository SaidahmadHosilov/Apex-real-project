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


/* -- owl carousel -- */

$(document).ready(function(){
    autoPlayYouTubeModal();
    
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
window.addEventListener('click', function(e){
    console.log(e.target);
    console.log(e.currentTarget);
})

/* Modal video  */

function autoPlayYouTubeModal() {
    var trigger = $('.trigger');
    trigger.click(function(e) {
    e.preventDefault();
    var theModal = $(this).data("target");
    var videoSRC = $(this).attr("src");
    var videoSRCauto = videoSRC + "?autoplay=1";
    $(theModal + ' iframe').attr('src', videoSRCauto);
    $(theModal).on('hidden.bs.modal', function(e) {
        $(theModal + ' iframe').attr('src', '');
    });
    });
};
