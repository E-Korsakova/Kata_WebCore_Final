!function(e){var i={};function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}t.m=e,t.c=i,t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,i){if(1&i&&(e=t(e)),8&i)return e;if(4&i&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&i&&"string"!=typeof e)for(var s in e)t.d(n,s,function(i){return e[i]}.bind(null,s));return n},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,i){return Object.prototype.hasOwnProperty.call(e,i)},t.p="",t(t.s=0)}([function(e,i,t){e.exports=t(2)},function(e,i,t){},function(e,i,t){"use strict";t.r(i);var n;t(1);function s(){var e=document.querySelector(".price__swiper");e&&(e.classList.add("hidden"),document.querySelector(".price-grid").classList.remove("hidden"))}!function(){var e=!1,i=document.querySelector(".sidemenu"),t=document.querySelector(".top-menu-button--burger-menu"),n=document.querySelector(".top-menu-button--burger-menu--open"),s=document.querySelector(".main-page");function r(){i.classList.toggle("sidemenu--hide"),document.querySelector(".sidemenu--hide")?s.classList.remove("main-page--low-opacity"):s.classList.add("main-page--low-opacity")}document.querySelector(".site").addEventListener("click",(function(i){i.target===t?(r(),e=!0):e&&(i.target===n||s.contains(i.target))&&(r(),e=!1)}))}(),function(){var e=!1,i=document.body.clientWidth,t=document.querySelector(".form__feedback"),n=document.querySelector(".form__request-call"),s=null,r=null,d=null,o=null,c=null,l=document.querySelector(".main-page"),u=document.querySelector(".sidemenu");function a(i){var t=document.body.clientWidth;i.classList.toggle("form--hide"),c=i.querySelector(".form-button--close"),t>=748&&(e?l.classList.add("main-page--low-opacity"):l.classList.remove("main-page--low-opacity"))}function p(){s.addEventListener("click",(function(){e=!0,a(n),c.addEventListener("click",(function(){e=!1,a(n)}))})),d.addEventListener("click",(function(){e=!0,a(t),c.addEventListener("click",(function(){e=!1,a(t)}))}))}i<748||i>=1360?(s=document.querySelector(".sidemenu .support-button--call"),d=document.querySelector(".sidemenu .support-button--chat"),p()):(s=document.querySelector(".main-page .support-button--call"),d=document.querySelector(".main-page .support-button--chat"),r=document.querySelector(".sidemenu .support-button--call"),o=document.querySelector(".sidemenu .support-button--chat"),p(),r.addEventListener("click",(function(){e=!0,u.classList.add("sidemenu--hide"),a(n),c.addEventListener("click",(function(){e=!1,u.classList.remove("sidemenu--hide"),a(n),l.classList.add("main-page--low-opacity")}))})),o.addEventListener("click",(function(){e=!0,u.classList.add("sidemenu--hide"),a(t),c.addEventListener("click",(function(){e=!1,u.classList.remove("sidemenu--hide"),a(t),l.classList.add("main-page--low-opacity")}))})))}(),function(){var e=document.querySelector(".repairable-brands__button"),i=document.querySelector(".equipment-brands__button"),t=document.querySelector(".equipment__wrapper"),n=document.querySelector(".brands__wrapper"),s=document.querySelector(".article__button");function r(e,i){var t=e.querySelector(".expand"),n=e.querySelector(".section-button--show-all"),s=e.querySelector(".section-button--hide");i.classList.toggle("cards-wrapper--show-all"),t.classList.toggle("expand--open"),n.classList.toggle("hidden"),s.classList.toggle("hidden")}e.addEventListener("click",(function(){r(e,n)})),i.addEventListener("click",(function(){r(i,t)})),s.addEventListener("click",(function(){document.querySelector(".post__article").classList.add("post__article--read-all"),s.classList.add("hidden")}))}(),window.addEventListener("DOMContentLoaded",((n=function(e,i,t){var n=new Swiper(i,t),s=function(){return e.matches?n:void(void 0!==n&&n.destroy)};return(e=window.matchMedia(e)).addEventListener("change",s),s()})("(min-width: 320px)",".repairable-brands__swiper",{loop:!0,spaceBetween:15,pagination:{el:".swiper-pagination--brands",clickable:!0},breakpoints:{320:{slidesPerView:1.3},340:{slidesPerView:1.4},375:{slidesPerView:1.5},400:{slidesPerView:1.6},425:{slidesPerView:1.7},450:{slidesPerView:1.8},475:{slidesPerView:1.9},500:{slidesPerView:2},530:{slidesPerView:2.1},560:{slidesPerView:2.2},600:{slidesPerView:2.3},650:{slidesPerView:2.5},700:{slidesPerView:2.7},750:{slidesPerView:2.9},768:{enabled:!1}}}),n("(min-width: 320px)",".repairable-equipment__swiper",{loop:!0,spaceBetween:15,pagination:{el:".swiper-pagination--equipment",clickable:!0},breakpoints:{320:{slidesPerView:1.3},340:{slidesPerView:1.4},375:{slidesPerView:1.5},400:{slidesPerView:1.6},425:{slidesPerView:1.7},450:{slidesPerView:1.8},475:{slidesPerView:1.9},500:{slidesPerView:2},530:{slidesPerView:2.1},560:{slidesPerView:2.2},600:{slidesPerView:2.3},650:{slidesPerView:2.5},700:{slidesPerView:2.7},750:{slidesPerView:2.9},768:{enabled:!1}}}),void n("(min-width: 320px)",".price__swiper",{loop:!0,spaceBetween:15,pagination:{el:".swiper-pagination--price",clickable:!0},breakpoints:{320:{slidesPerView:1.2},340:{slidesPerView:1.3},375:{slidesPerView:1.4},400:{slidesPerView:1.5},425:{slidesPerView:1.6},450:{slidesPerView:1.7},475:{slidesPerView:1.8},500:{slidesPerView:1.9},530:{slidesPerView:2},560:{slidesPerView:2.1},600:{slidesPerView:2.2},650:{slidesPerView:2.4},700:{slidesPerView:2.6},750:{slidesPerView:2.8},768:{enabled:!1}}}))),function(){var e=document.body.clientWidth,i=document.querySelector(".sidemenu"),t=document.querySelector(".content__support-buttons"),n=document.querySelector(".main-page"),r=document.querySelector(".main-page__header"),d=document.querySelector(".header__support-buttons"),o=document.querySelector(".top-menu-button--burger-menu--open"),c=document.querySelector(".price__swiper"),l=document.querySelector(".price-grid");function u(){e>=1360?(i.classList.remove("sidemenu--hide"),o.classList.add("hidden"),t.classList.remove("hidden"),n.classList.remove("main-page--low-opacity"),r.classList.add("hidden"),s()):(document.querySelector(".sidemenu--hide")?n.classList.remove("main-page--low-opacity"):i.classList.add("sidemenu--hide"),e>=768?(d.classList.remove("hidden"),c.classList.add("hidden"),l.classList.remove("hidden"),s()):(d.classList.add("hidden"),c.classList.remove("hidden"),l.classList.add("hidden")),t.classList.add("hidden"),r.classList.remove("hidden"),o.classList.remove("hidden"))}u(),window.addEventListener("resize",(function(){e=document.body.clientWidth,u()}))}()}]);
//# sourceMappingURL=bundle.js.map