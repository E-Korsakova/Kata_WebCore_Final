!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(2)},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var o;n(1);function r(){var e=document.querySelector(".price__swiper");if(e){e.remove();var t=document.querySelector(".price--grid"),n=document.querySelector(".grid__header");t.classList.remove("hidden"),n.classList.remove("hidden")}}!function(){var e=!1,t=document.querySelector(".sidemenu"),n=document.querySelector(".top-menu-button--burger-menu"),o=document.querySelector(".top-menu-button--burger-menu--open"),r=document.querySelector(".main-page");function i(){t.classList.toggle("sidemenu--hide"),r.classList.toggle("main-page--low-opacity")}document.querySelector(".site").addEventListener("click",(function(r){r.target===n?(i(),e=!0):!e||r.target!==o&&t.contains(r.target)||(i(),e=!1)}))}(),function(){var e=document.body.clientWidth,t=document.querySelector(".form__feedback"),n=document.querySelector(".form__request-call"),o=null,r=null,i=null,c=document.querySelector(".main-page"),u=document.querySelector(".sidemenu");function d(e){var t=document.body.clientWidth;e.classList.toggle("form--hide"),i=e.querySelector(".form-button--close"),t>=748&&(c.classList.toggle("main-page--low-opacity"),u.classList.toggle("sidemenu--low-opacity"))}(e<748||e>=1360)&&(o=document.querySelector(".sidemenu .support-button--call"),r=document.querySelector(".sidemenu .support-button--chat")),e>=748&&e<1360&&(o=document.querySelector(".main-page .support-button--call"),r=document.querySelector(".main-page .support-button--chat")),o.addEventListener("click",(function(){d(n),i.addEventListener("click",(function(){d(n)}))})),r.addEventListener("click",(function(){d(t),i.addEventListener("click",(function(){d(t)}))}))}(),function(){var e=document.querySelector(".repairable-brands__button"),t=document.querySelector(".equipment-brands__button"),n=document.querySelector(".equipment__wrapper"),o=document.querySelector(".brands__wrapper");function r(e,t){var n=e.querySelector(".expand"),o=e.querySelector(".section-button--show-all"),r=e.querySelector(".section-button--hide");t.classList.toggle("cards-wrapper--show-all"),n.classList.toggle("expand--open"),o.classList.toggle("hidden"),r.classList.toggle("hidden")}e.addEventListener("click",(function(){r(e,o)})),t.addEventListener("click",(function(){r(t,n)}))}(),function(){var e=document.body.clientWidth,t=document.querySelector(".sidemenu"),n=document.querySelector(".content__support-buttons"),o=document.querySelector(".main-page"),i=document.querySelector(".main-page__header"),c=document.querySelector(".header__support-buttons"),u=document.querySelector(".top-menu-button--burger-menu--open");function d(){e>=1360?(t.classList.remove("sidemenu--hide"),u.classList.add("hidden"),n.classList.remove("hidden"),o.classList.remove("main-page--low-opacity"),i.classList.add("hidden"),r()):(document.querySelector(".sidemenu--hide")?o.classList.remove("main-page--low-opacity"):t.classList.add("sidemenu--hide"),e>=768?(c.classList.remove("hidden"),r()):c.classList.add("hidden"),n.classList.add("hidden"),i.classList.remove("hidden"),u.classList.remove("hidden"))}d(),window.addEventListener("resize",(function(){e=document.body.clientWidth,d()}))}(),window.addEventListener("DOMContentLoaded",((o=function(e,t,n){var o=new Swiper(t,n),r=function(){return e.matches?o:void(void 0!==o&&o.destroy)};return(e=window.matchMedia(e)).addEventListener("change",r),r()})("(max-width: 374px)",".swiper",{loop:!0,spaceBetween:15,slidesPerView:1.2,pagination:{el:".swiper-pagination",clickable:!0}}),o("(max-width: 424px)",".swiper",{loop:!0,spaceBetween:15,slidesPerView:1.5,pagination:{el:".swiper-pagination",clickable:!0}}),void o("(max-width: 767px)",".swiper",{loop:!0,spaceBetween:15,slidesPerView:1.75,pagination:{el:".swiper-pagination",clickable:!0}})))}]);
//# sourceMappingURL=bundle.js.map