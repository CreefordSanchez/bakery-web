'use strict';

function selector(selector) {
  return document.querySelector(selector);
}

function listener(selector, event, callback) {
  return selector.addEventListener(event, callback);
}
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
    let child = array[index].getBoundingClientRect();
    boxSlider
    .scrollLeft += child.x;
    
  });
}
