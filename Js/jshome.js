// swiper JS
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
})

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
})

// Text drop animation
const controlImg = document.querySelectorAll('.controls_img')

function scrollAnimation(){
    gsap.from('.islands_title', {opacity: 0, duration: .4, delay: .4, y: -20})
    gsap.from('.islands_desciption', {opacity: 0, duration: .5, delay: .5, y: -20})
    gsap.from('.islands_buttons', {opacity: 0, duration: .3, delay: .3, y: -30})
}

controlImg.forEach(c => c.addEventListener('click', scrollAnimation))