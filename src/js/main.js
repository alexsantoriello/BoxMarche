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
    }

    slider_main() {
        var swiper = new Swiper('.showreel-main', {
            spaceBetween: 0,
            centeredSlides: true,
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

    slider_lob() {
        var swiper = new Swiper('.showreel-lob', {
            spaceBetween: 0,
            centeredSlides: true,
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

    slider_case() {
        var swiper = new Swiper('.showreel-case', {
            spaceBetween: 0,
            centeredSlides: true,
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

}

var app = new App();

window.onload = () => {
    app.init();
};