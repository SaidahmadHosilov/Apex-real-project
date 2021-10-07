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
headerBtn.addEventListener('click', function(e){
    e.preventDefault();
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

showModalCourse.addEventListener('click', function(e){
    e.preventDefault();
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

ftrBtn.addEventListener('click', function(e){
    e.preventDefault();
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

// Course intro
let courseIntroX = document.getElementById('course-intro-close');
let courseIntroModal = document.querySelector('.course-modal-intro');
let introImages = document.querySelectorAll('.course-main img');
let introCrsH3 = document.querySelectorAll('.course-main h3');

document.querySelector('.course-btn-info').addEventListener('click', function(){
    courseIntroModal.classList.remove('course-modal-intro-active');
    let coverModalBg = document.createElement('div');
    coverModalBg.classList.add('cover-body-modal');
    document.querySelector('.modal-in').append(coverModalBg);
    
    modalCourse.classList.add('modal-course-active');
})

for(const h of introCrsH3){
    h.addEventListener('click', function(){
        courseIntroModal.classList.add('course-modal-intro-active');
        document.body.style.overflow = 'hidden';   
    })
}
for(const img of introImages){
    img.addEventListener('click', function(evt){
        var parentE = evt.target.parentElement; 

        document.querySelector('.item-top-left img').src = 
            parentE.querySelector('img').getAttribute('src');
        document.querySelector('.item-top-right h2').innerHTML = 
            parentE.querySelector('.course-content h3').textContent;
        document.querySelector('.item-top-right span').innerHTML = 
            parentE.querySelector('.course-content p').textContent;
        document.querySelector('.course-modal-intro h3').innerHTML = 
            parentE.querySelector('.hidden h1').textContent;
        document.querySelector('.course-modal-intro .introP1').innerHTML = 
            parentE.querySelector('.hidden p').textContent;
        document.querySelector('.course-modal-intro .introP2').innerHTML = 
            parentE.querySelector('.hidden span').textContent;

        courseIntroModal.classList.add('course-modal-intro-active');
        document.body.style.overflow = 'hidden';   
    })
}
window.addEventListener('click', function(evt){
    if(evt.target.classList == 'course-intro-in'){
        courseIntroModal.classList.remove('course-modal-intro-active');
        document.body.style.overflow = 'auto';    
    }
})
courseIntroX.addEventListener('click', function(){
    courseIntroModal.classList.remove('course-modal-intro-active');
    document.body.style.overflow = 'auto';
})

// !Course intro

/* Modal video  */

// ******************** YouTube Video Link ********************** \\

let videoIframes = document.querySelectorAll('#videos-div .video-iframe');

for( const ifr of videoIframes ) {
    // quality options: low, medium, high, max | default is max.
    var thumbnail = get_youtube_thumbnail( ifr.getAttribute('src'), 'medium');
    var img = ifr.parentElement.querySelector('img');

    img.src = thumbnail;
}


// var thumbnail = get_youtube_thumbnail('https://youtu.be/WZKW2Hq2fks', 'medium');



function get_youtube_thumbnail(url, quality){
    if(url){
        var video_id, thumbnail, result;
        if(result = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/))
        {
            video_id = result.pop();
        }
        else if(result = url.match(/youtu.be\/(.{11})/))
        {
            video_id = result.pop();
        }

        if(video_id){
            if(typeof quality == "undefined"){
                quality = 'high';
            }
        
            var quality_key = 'maxresdefault'; // Max quality
            if(quality == 'low'){
                quality_key = 'sddefault';
            }else if(quality == 'medium'){
                quality_key = 'mqdefault';
            } else if (quality == 'high') {
                quality_key = 'hqdefault';
            }

            var thumbnail = "http://img.youtube.com/vi/"+video_id+"/"+quality_key+".jpg";
            return thumbnail;
        }
    }
    return false;
}

let trgVideos = document.querySelectorAll('#videos-div .video-cover');
let videoModal = document.querySelector('.video-modal');
let videoClose = document.getElementById('modal-video-close');

for(const trgVideo of trgVideos){
    trgVideo.addEventListener('click', function(){
        let ifr = trgVideo.parentElement.querySelector('.video-iframe');
        let modalIfr = videoModal.querySelector('.video-container iframe');

        modalIfr.src = ifr.getAttribute('src');

        document.body.style.overflow = 'hidden';
        videoModal.classList.add('video-modal-active');
    })
}

// close
videoClose.addEventListener('click', function(){
    document.body.style.overflow = 'auto';
    videoModal.classList.remove('video-modal-active');
    document.querySelector('.video-container iframe').setAttribute("src",'')
})

window.addEventListener('click', function(evt){
    if(evt.target.classList == 'modal-video-main'){
        document.querySelector('.video-container iframe').setAttribute("src",'')
        document.body.style.overflow = 'auto';
        videoModal.classList.remove('video-modal-active');
    }
})

// ******************** YouTube Video Link ********************** \\
