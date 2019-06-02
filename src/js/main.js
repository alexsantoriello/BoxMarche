/* jshint esversion: 6 */
/* global window, document, Swiper, TweenMax, TimelineMax */

import Dom from './shared/dom';

export default class App {

    constructor() {}

    init() {
        const body = document.querySelector('body');
        const page = document.querySelector('.page');
        Dom.detect(body);
        body.classList.add('ready');
        app.slider_main();
        app.slider_lob();
        app.slider_case();
        app.slider_detail();
        app.hamburgers();
        app.subnav();
    }

    slider_main() {
        var swiper = new Swiper('.showreel-main', {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 600,
            loop: true,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination-main',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    slider_lob() {
        var swiper = new Swiper('.showreel-lob', {
            spaceBetween: 0,
            centeredSlides: true,
            speed: 600,
            loop: true,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.showreel-lob > .swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.showreel-lob > .swiper-button-next',
                prevEl: '.showreel-lob > .swiper-button-prev',
            },
        });
    }

    slider_case() {
        var swiper = new Swiper('.showreel-case', {
            spaceBetween: 0,
            centeredSlides: true,
            loop: true,
            speed: 600,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    slider_detail() {
        var swiper = new Swiper('.showreel-detail', {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 0,
            centeredSlides: false,
            loop: true,
            speed: 600,
            autoplay: {
                delay: 8000,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    hamburgers() {
        /* $(document).on('click', '.hamburger', function () {
            //$hamburger.on("click", function (e) {
            $(".hamburger").toggleClass("is-active");
            // Do something else, like open/close menu
            $('#nav-mobile').slideToggle("slow", function () {
                // Animation complete. 
            });
        });*/

        var $hamburger = $('.hamburger');
        /* $hamburger.on("click", function (e) {*/
        $($hamburger).click(function () {
            $hamburger.toggleClass("is-active");
            // Do something else, like open/close menu
            $('#nav-mobile').slideToggle("fast", function () {
                // Animation complete. 
            });
        });
    }

    subnav() {
        // https://codepen.io/brenden/pen/Kwbpyj

        $('.nav-toggle').click(function (e) {
            e.preventDefault();

            var $this = $(this);

            if ($this.next().hasClass('show')) {
                $this.next().removeClass('show');
                $this.next().slideUp(250);
            } else {
                $this.parent().parent().find('li .inner').removeClass('show');
                $this.parent().parent().find('li .inner').slideUp(250);
                $this.next().toggleClass('show');
                $this.next().slideToggle(250);
            }
        });
    }

}

var app = new App();

window.onload = () => {
    app.init();
};