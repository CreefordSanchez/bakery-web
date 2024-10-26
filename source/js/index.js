'use strict';

function selector(selector) {
  return document.querySelector(selector);
}
function selectorAll(selector) {
  return document.querySelectorAll(selector);
}
function listener(selector, event, callback) {
  return selector.addEventListener(event, callback);
}

const heroSlider = selector('.hero-slider');
const heroSliderBtn = [...selector('.hero-bubble-box').children];

heroSliderBtn.forEach((button, index) => {
  listener(button, 'click', () => {
    const parent = [...heroSlider.children];
    let target = parent[index].getBoundingClientRect();
    heroSlider.scrollLeft += target.x;
    console.log("test");
  });
});

const navBtn = selector('.fa-bars');
const navContent = selector('.header-menu');
listener(navBtn, 'click', () => {
  navContent.classList.toggle('header-menu-transition');
});

const leftBtnMenu = selector('.ls-scroll');
const rightBtnMenu = selector('.rs-scroll');
const slideBoxMenu = selector('.slide-menu');
scrollFunction(rightBtnMenu, leftBtnMenu, slideBoxMenu);

const leftBtnOccasion = selector('.ls-scroll-occasion');
const rightBtnOccasion = selector('.rs-scroll-occasion');
const slideBoxOccasion = selector('.slide-occasion');
scrollFunction(rightBtnOccasion, leftBtnOccasion, slideBoxOccasion);

function scrollFunction(rsBtn, lfBtn, boxSlider) {
  const array = [...boxSlider.children];  
  let index = 0; 
  listener(rsBtn, 'click', () => {
    index++;
    
    if(index >= array.length) {
      index--;
    }
    let child = array[index].getBoundingClientRect();
    boxSlider.scrollLeft += child.x;
    
  });
  
  listener(lfBtn, 'click', () => {
    index--;
    
    if(index < 0) {
      index++;
    }
    //gain access to the possition value
    let child = array[index].getBoundingClientRect();
    boxSlider
    .scrollLeft += child.x;
  });
}

const expandBtn = Array.from(selectorAll('.page-title'));
const contents = Array.from(selectorAll('.contents'));
const angleIcon =  Array.from(selectorAll('.fa-angle-down'));
expandBtn.forEach((button, index) => {
  listener(button, 'click', () => {
    contents[index].classList.toggle('content-transition');
    angleIcon[index].classList.toggle('.angle-rotate');
  })
})