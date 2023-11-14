
window.addEventListener('DOMContentLoaded', () => {

    let swiperResize = function(breakpoint, swiperClass, swiperSettings) {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        let newSwiper = function(className, settings) {
            swiper = new Swiper(className, settings);
        }

        let check = function() {
            if (breakpoint.matches) {
                return newSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', check);
        check();
    }

    swiperResize(
        '(max-width: 767px)',
        '.swiper-container',
        {
            loop: true,
            spaceBetween: 15,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            breakpoint: {
                768: {
                    enable: false,
                }
            }
        },
      );
    
});

let buttonShowAll = document.querySelector('.button-show-all');
let expand = document.querySelector('.expand');
let gridCards = document.querySelector('.swiper-wrapper');
let gridCardsOpenClass = 'swiper-wrapper--open';
let textShowAll = document.querySelector('.show-all');
let textHide = document.querySelector('.hide');
let classHidden = 'hidden';

buttonShowAll.addEventListener('click', () => {
    let expandOpen = document.querySelector('.expand--open');
    if (!expandOpen) {
        expand.classList.add('expand--open');
        textShowAll.classList.add(classHidden);
        textHide.classList.remove(classHidden);
        gridCards.classList.add(gridCardsOpenClass);
    } else {
        expand.classList.remove('expand--open');
        textShowAll.classList.remove(classHidden);
        textHide.classList.add(classHidden);
        gridCards.classList.remove(gridCardsOpenClass);
    }
    
});

