'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(Ele => Ele.addEventListener('click', openModal))

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

let btnLearn = document.getElementById('learnMore')
let sections = document.querySelectorAll('.section')
let sec1 =  sections[0]
btnLearn.addEventListener('click', function(e) {
  window.scrollTo({
    top: sec1.getBoundingClientRect().top + window.pageYOffset,
    let: sec1.getBoundingClientRect().left + window.pageXOffset, 
    behavior: 'smooth'
  })
  // sec1.scrollIntoView({behavior: 'smooth'})
})

document.querySelector('nav').addEventListener('click', function(e) {
  e.preventDefault()
  if(e.target.classList.contains('nav__link')) {
    let currSection = document.querySelector(e.target.getAttribute('href'));
    window.scrollTo({
      top: currSection.getBoundingClientRect().top + window.pageYOffset,
      left: currSection.getBoundingClientRect().left + window.pageXOffset,
      behavior: 'smooth'
    })
    // window.scrollTo({
    //   top: currSection.getBoundingClientRect().top + window.pageYOffset,
    //   left: currSection.getBoundingClientRect().left + window.pageXOffset,
    //   behavior: 'smooth'
    // });
    // currSection.scrollIntoView({behavior: 'smooth'})
  }
})

// implementing operations 
let container = document.querySelector('.operations__tab-container');
let tabs = document.querySelectorAll('.operations__tab');
let content = document.querySelectorAll('.operations__content');

container.addEventListener('click', function(e) {
  let tab = e.target.closest('.operations__tab')
  if(!tab) return
  tabs.forEach(tab => tab.classList.remove('operations__tab--active'))
  tab.classList.add('operations__tab--active')
  let num = tab.getAttribute('data-tab')
  let selected_container = document.querySelector(`.operations__content--${num}`)
  content.forEach(cont => cont.classList.remove('operations__content--active'))
  selected_container.classList.add('operations__content--active')
})

// implementing fade effect
let nav = document.querySelector('nav')
let links = nav.querySelectorAll('a')
let logo = nav.querySelector('.nav__logo')

let fading = function(e) {
  if(!e.target.classList.contains('nav__link')) return
  let seclected_link = e.target
  logo.style.opacity = this
  links.forEach(link => link.style.opacity = this)
  seclected_link.style.opacity = 1
}
nav.addEventListener('mouseover', fading.bind(0.5))
nav.addEventListener('mouseout', fading.bind(1))

// implementing sticky scroll
let section1 = document.querySelector('#section--1');
let section1_cord = section1.getBoundingClientRect()

// window.addEventListener('scroll', function(e) {
//   if(this.scrollY > section1_cord.top) {
//     nav.classList.add('sticky')
//   }
//   else {
//     nav.classList.remove('sticky')
//   }
// })

let header = document.querySelector('header')
let navHeight = getComputedStyle(nav).height;

let sticky_function = function(entries, observer) {
  let entry = [...entries][0]
  if(entry.isIntersecting == false){
    nav.classList.add('sticky')
  }
  else {
    nav.classList.remove('sticky')
  }
}

let sticky_object = {
  root: null,
  threshold: 0,
  // rootMargin: `-${Number.parseInt(navHeight)}px`,
  // rootMargin: `-${navHeight}`,
  rootMargin: `-${nav.getBoundingClientRect().height}px`
}

let observer = new IntersectionObserver(sticky_function, sticky_object) 
observer.observe(header)

// implementing appear
let section_function = function(entries, observer) {
  let target = [...entries][0].target
  let intersection_stat = [...entries][0].isIntersecting
  if(intersection_stat) {
    target.classList.remove('section--hidden')
    observer.unobserve(target)
  }
}

let section_object = {
  root: null,
  threshold: 0.15,
}

let section_observer = new IntersectionObserver(section_function, section_object)
sections.forEach(section => {
  section_observer.observe(section)
  section.classList.add('section--hidden')
})

// img lazy looding feature impelementation
let img_function = function(entries, observer) {
  let img = [...entries][0].target
  let intersection_stat = [...entries][0].isIntersecting
  if(!intersection_stat) return
  img.src = img.getAttribute('data-src')
  img.addEventListener('load', function() {
    img.classList.remove('lazy-img')
  })
  observer.unobserve(img)
}

let imgObserver = new IntersectionObserver(img_function, {
  root: null,
  threshold: 0,
})

let images = document.querySelectorAll('img[data-src]')
images.forEach(image => imgObserver.observe(image))

// implementing slider
let slider = document.querySelector('.slider')
let slids = document.querySelectorAll('.slide')
let dot_container = document.querySelector('.dots')
slids.forEach((slide, i) => {
  dot_container.insertAdjacentHTML('beforeend', `<button class="dots__dot" data_slide="${i}"></button>`)
})
let dots
let goToSlide = function(s) {
  slids.forEach((slide, i) => slide.style.translate = `${(i - s) * 100}%`)
  dots = document.querySelectorAll('.dots__dot')
  let dot_2 = dots[s]
  dots.forEach(dot => dot.classList.remove('dots__dot--active'))
  dot_2.classList.add('dots__dot--active')
}
goToSlide(0)
let left_btn = document.querySelector('.slider__btn--left')
let right_btn = document.querySelector('.slider__btn--right')
let currSlide = 0;
let maxSlides = slids.length

let slidingRt = function() {
  if(currSlide >= maxSlides - 1) currSlide = 0
  else currSlide++
  goToSlide(currSlide)
}
let slidingLt = function() {
  if(currSlide <= 0) currSlide = maxSlides - 1
  else currSlide--
  goToSlide(currSlide)
}

dot_container.addEventListener('click', function(e) {
  let dot
  if(e.target.classList.contains('dots__dot')) {
    dot = e.target
    currSlide = dot.getAttribute('data_slide')
    goToSlide(currSlide)
  }
})

right_btn.addEventListener('click', slidingRt)
left_btn.addEventListener('click', slidingLt)
document.addEventListener('keydown', function(e) {
  if(e.key == 'ArrowLeft') slidingLt()
  else if (e.key == 'ArrowRight') slidingRt()
})

window.addEventListener('beforeunload', function(e) {
  e.preventDefault();
  e.returnValue = ''
})