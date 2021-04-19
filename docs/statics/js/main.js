const headerBarsIcon = document.querySelector('.header-bars-icon');
const mobileMenu = document.getElementById('header-nav');
const angleItems = document.querySelectorAll('.header-nav__item-wrap');
const itemsExpanded = document.querySelectorAll('.header-top__item-expanded');

const navbar = document.querySelector('.navbar');

const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.slide-control-prev');
const nextBtn = document.querySelector('.slide-control-next');
const prevBtnImg = document.querySelector('#slide-control__img-prev');
const nextBtnImg = document.querySelector('#slide-control__img-next');

const newCarsContainer = document.querySelector('#new-cars .container');
const usedCarsContainer = document.querySelector('#used-cars .container');
const dealerTabs = document.querySelectorAll('.dealer-control__link');
const dealerSearchs = document.querySelectorAll('.dealer-search-select__title');
const dealerSearchInputs = document.querySelectorAll('.dealer-search-select__input');
const dealerSearchContents = document.querySelectorAll('.dealer-search-select__content');
const dealerSearchSelectors = document.querySelectorAll('.dealer-search-select');
const dealerSearchItems = document.querySelectorAll('.dealer-search-select__item:not(.dealer-search-select__item--reset)');
const dealerSearchResets = document.querySelectorAll('.dealer-search-select__item--reset');
const dealerSearchResetBtn = document.querySelector('.dealer-search-action__reset');

const specialView = document.querySelector('.special-products');
const specialContainer = document.querySelector('.special-products__container');
let specialColumns = document.querySelectorAll('.special-col');
const dotsContainer = document.querySelector('.special-pagination__dots');

function closeMenuNavbar() {
  angleItems.forEach(angleItem => {
    if (angleItem.classList.contains('active')) {
      // rotate icon
      angleItem.classList.remove('active');
      const collapseElm = angleItem.nextElementSibling;
      collapseElm.style.maxHeight = null;
    }
  });
}

function collapseBars() {
  closeMenuNavbar();

  if(mobileMenu.style.maxHeight) {
    mobileMenu.style.maxHeight = null;
  } else {
    mobileMenu.style.maxHeight = '432px';
  }
}

function toggleNavbar() {
  headerBarsIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    collapseBars();
  })
}
toggleNavbar();


function collapseItem(angleItem) {
  // rotate icon
  angleItem.classList.toggle('active');
      
  // collapse content;
  const collapseElm = angleItem.nextElementSibling;
  if (collapseElm.style.maxHeight) {
    mobileMenu.style.maxHeight = mobileMenu.scrollHeight + 'px';
    collapseElm.style.maxHeight = null;
  } else {
    // reset height of header nav
    mobileMenu.style.maxHeight = 'initial';

    collapseElm.style.maxHeight = collapseElm.scrollHeight + 'px';
  }
}

function toggleMenu() {
  angleItems.forEach(angleItem => {
    angleItem.addEventListener('click', (e) => {
      e.stopPropagation();
      
      collapseItem(angleItem);
      })
  })
}
toggleMenu();


// open list in header top
itemsExpanded.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();

    const itemActived = document.querySelector('.header-top__item.active');
    if (itemActived && !item.classList.contains('active')) {
      const itemShowing = itemActived.querySelector('.header-top__item-list');
      itemActived.classList.remove('active');
      itemShowing.classList.add('d-none');
    }

    item.classList.toggle('active');
    item.querySelector('.header-top__item-list').classList.toggle('d-none');
  })
})


// sticky navbar
window.onscroll = function() {stickyNavbar()};
function stickyNavbar() {
  const position = navbar.offsetTop;

  if (window.pageYOffset >= position) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

/* slide show */
let slideIndex = 0;
controlImg(slideIndex);
let autoplaySlides = setInterval(plusSlide, 5000);

prevBtn.addEventListener('click', () => {
  clearInterval(autoplaySlides);
  minusSlide();
  autoplaySlides = setInterval(plusSlide, 5000);
})
nextBtn.addEventListener('click', () => {
  clearInterval(autoplaySlides);
  plusSlide();
  autoplaySlides = setInterval(plusSlide, 5000);
})

function minusSlide() {
  slideIndex -= 1;
  showSlide();
}

function plusSlide() {
  slideIndex += 1;
  showSlide();
}


function showSlide() {
  const currentSlide = document.querySelector('.slide:not(.d-none)');
  currentSlide.classList.add('d-none');
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  if (slideIndex > slides.length -1) {
    slideIndex = 0;
  }
  slides[slideIndex].classList.remove('d-none');
  // change image in btn
  controlImg(slideIndex);

}

function controlImg(currentIndex) {
  let prevIndex = currentIndex - 1;
  let nextIndex = currentIndex + 1;
  if (prevIndex < 0) {
    prevIndex = slides.length - 1;
  }
  if (nextIndex > slides.length - 1) {
    nextIndex = 0;
  }
  prevBtnImg.src = slides[prevIndex].querySelector('.slide__img').src;
  nextBtnImg.src = slides[nextIndex].querySelector('.slide__img').src;
}


// import data
import {cars} from './modules/data.js';
const newCars = cars.filter(car => car.state === 'new');
const oldCars = cars.filter(car => car.state === 'old');

document.addEventListener('DOMContentLoaded', () => {
  newCarsContainer.innerHTML = '';
  usedCarsContainer.innerHTML = '';
  
  const newCarsData = dealerHTML(newCars);
  const oldCarsData = dealerHTML(oldCars);
  
  newCarsContainer.innerHTML = newCarsData;
  usedCarsContainer.innerHTML = oldCarsData;
})

function dealerHTML(dealerCars) {
  let data = '';
  let displayOldPrice, displayRoad, displayGas, displayClass;

  dealerCars.forEach(car => {
    if (car.priceOld === "") {displayOldPrice = 'd-none'} else {displayOldPrice = ''};
    if (car.road === "") {displayRoad = 'd-none'} else {displayRoad = ''};
    if (car.gas === "") {displayGas = 'd-none'} else {displayGas = ''};
    if (car.class === "") {displayClass = 'd-none'} else {displayClass = ''};

    data += `
      <div class="dealer-col">
        <a href="#" class="dealer-car__link">
          <div class="dealer-car__img-wrap">
            <div class="overflow"></div>
            <img class="dealer-car__img img-responsive" src=${car.image} alt=${car.name}>
          </div>
          <span class="dealer-car__special">${car.version}</span>
          <div class="dealer-car__model">
            <h6 class="dealer-car__model-name">${car.name}</h6>
            <div class="dealer-car__model-price">
              <h6 class="dealer-car__model-price-old ${displayOldPrice}">&#128;${car.priceOld}</h6>
              <h6 class="dealer-car__model-price-new">&#128;${car.price}</h6>
            </div>
          </div>
          <div class="dealer-car__info">
            <span class="dealer-car__info-item ${displayRoad}">${car.road} <i class="fas fa-road"></i></span>
            <span class="dealer-car__info-item ${displayGas}">${car.gas} <i class="fas fa-gas-pump"></i></span>
            <span class="dealer-car__info-item ${displayClass}">${car.class} <i class="fas fa-car"></i></span>
          </div>
        </a>
      </div>
    `
  })

  return data;
}

// switch between tabs
function switchDealer() {
  dealerTabs.forEach(tab => {
    tab.addEventListener('click', () => activeDealer(tab));
  })
};
switchDealer();

function activeDealer(tab) {
  if (tab.classList.contains('active')) return;
  // remove tab activing
  const tabActived = document.querySelector('.dealer-control__link.active');
  tabActived.classList.remove('active');

  // add d-none to element displaying
  const getIdActived = tabActived.dataset.id;
  const activedContent = document.querySelector(`#${getIdActived}`);
  activedContent.classList.add('d-none');
  
  // active tab clicked
  tab.classList.add('active');

  const getId = tab.dataset.id;
  const contentElm = document.querySelector(`#${getId}`);
  contentElm.classList.remove('d-none');
}
// Search Dropdown
function searchDropDown() {
  // stop Propagation event on search dropdown
  dealerSearchSelectors.forEach(selector => {
    selector.addEventListener('click', (e) => e.stopPropagation());
  })
  // toggle between hide and show dropdown content
  dealerSearchs.forEach(title => {
    title.addEventListener('click', () => openDropDown(title));
  })

  // search when keydown
  dealerSearchInputs.forEach(input => {
    input.addEventListener('keyup', () => searchKey(input));
  })

  // save value selected
  dealerSearchItems.forEach(item => {
    item.addEventListener('click', () => chooseItem(item));
  })

  // reset select field
  dealerSearchResets.forEach(resetElm => {
    resetElm.addEventListener('click', () => resetField(resetElm));
  })

  // reset all select field
  dealerSearchResetBtn.addEventListener('click', () => {
    dealerSearchResets.forEach(resetElm => resetField(resetElm));
  })
}
searchDropDown();

function openDropDown(title) {
  const content = title.nextElementSibling;
  content.classList.toggle('d-none');
}

function searchKey(input) {
  const filter = input.value.toUpperCase();
  console.log(filter);
  const contentElm = input.parentElement.parentElement;
  const itemElms = contentElm.querySelectorAll('.dealer-search-select__item');
  let txtValue;

  itemElms.forEach(item => {
    txtValue = item.innerHTML.toUpperCase();
    if (txtValue.indexOf(filter) > -1) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  })
}

function chooseItem(item) {
  const value = item.innerHTML;
  const selectElm = item.parentElement.parentElement.parentElement;
  const titleElm = selectElm.querySelector('.dealer-search-select__title-text');
  const contentElm = selectElm.querySelector('.dealer-search-select__content');
  // set value to titleElm
  titleElm.innerHTML = value;
  contentElm.classList.add('d-none');
}

function resetField(resetElm) {
  const selectElm = resetElm.parentElement.parentElement.parentElement;
  const titleElm = selectElm.querySelector('.dealer-search-select__title-text');
  const dataReset = titleElm.dataset.reset;
  const contentElm = selectElm.querySelector('.dealer-search-select__content');
  // set value to titleElm
  titleElm.innerHTML = dataReset;
  contentElm.classList.add('d-none');
}



/* special section */
function specialResponsive() {
  const sizeView = specialView.clientWidth;
  let colWidth;
  let totalItemsWidth = 0;
  let colNum = 1;
  let totalItems = specialColumns.length;

  if (window.innerWidth > 768) {
    colNum = 2;
  }
  if (window.innerWidth > 992) {
    colNum = 3;
  }
  // calculate width of column
  colWidth = sizeView / colNum;
  specialColumns.forEach(col => {
    col.style.width = colWidth + 'px';
    totalItemsWidth += colWidth;
  })
  // container width set up
  specialContainer.style.width = totalItemsWidth + 'px';

  // dots number set up
  dotsContainer.innerHTML = '';
  const allDots = Math.ceil(totalItems / colNum);
  for (let i = 1; i <= allDots; i++) {
    const span = document.createElement('span');
    span.classList.add('special-pagination__dots-element');
    if (i === 1) {
      span.classList.add('active');
    }
    span.id = 'dot-' + i;
    dotsContainer.appendChild(span);
  }
}
specialResponsive();

// control slide
function changeSlide(dot) {
  checkDot(dot);
  const stepNum = dot.id.slice(4) - 1;
  const sizeView = specialView.offsetWidth;
  const jumpWidth = stepNum * sizeView;
  specialContainer.style.left = - jumpWidth + 'px';
  specialContainer.classList.add('shifting');
}

function btnControl(btn) {
  const dotsCollection = document.querySelectorAll('.special-pagination__dots-element');
  const activedElm = document.querySelector('.special-pagination__dots-element.active');
  const activedDot = activedElm.id.slice(4) - 1;//start from 0
  const lastIndex = dotsCollection.length - 1;

  if (btn.classList.contains('btn-prev')) {
    if (activedDot === 0) {
      return;
    } else {
      changeSlide(dotsCollection[activedDot - 1]);
    }
  } else {
    if (activedDot === lastIndex) {
      return;
    } else {
      changeSlide(dotsCollection[activedDot + 1]);
    }
  }
}

function checkDot(dot) {
  if (dot.classList.contains('active')) {
    return;
  }
  // remove active class
  const activedElm = document.querySelector('.special-pagination__dots-element.active');
  activedElm.classList.remove('active');
  // add active class to clicked elm
  dot.classList.add('active');
}

function dragSlides() {
  const sizeView = specialView.clientWidth;
  let posX1 = 0,
    dragWidth = 0,
    posInitial,
    posFinal;

  // Mouse events
  specialContainer.onmousedown = dragStart;

  // Touch events
  specialContainer.addEventListener('touchstart', dragStart);

  // Transition events
  specialContainer.addEventListener('transitionend', finishDrag);

  function dragStart(e) {
    e.preventDefault();

    // remove shifting class
    specialContainer.classList.remove('shifting');

    if (e.type == 'touchstart') {
      posX1 = e.touches[0].clientX;
      specialContainer.addEventListener('touchend', dragEnd);
      specialContainer.addEventListener('touchmove', dragAction);
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
  }

  function dragAction(e) {
    if (e.type == 'touchmove') {
      dragWidth = e.touches[0].clientX - posX1;
      posX1 = e.touches[0].clientX;
    } else {
      dragWidth = e.clientX - posX1;
      posX1 = e.clientX;
    }
    posInitial = specialContainer.offsetLeft;
    specialContainer.style.left = (dragWidth + posInitial) + "px";
    posFinal = specialContainer.offsetLeft;

    // changeDot
    moveDot(posFinal);
    // boundary
    const columnWidth = specialColumns[0].offsetWidth;
    const containerWidth = specialContainer.offsetWidth;
    const boundaryLeft = columnWidth / 20; //20 is any
    const boundaryRight = -(containerWidth - sizeView + boundaryLeft);
    if(posFinal > boundaryLeft) {
      if (e.type == 'touchmove') {
        specialContainer.removeEventListener('touchmove', dragAction);
      }else {
        document.onmousemove = null;
      }
    } else if (posFinal < boundaryRight) {
      if(e.type == 'touchmove') {
        specialContainer.removeEventListener('touchmove', dragAction);
      } else {
        document.onmousemove = null;
      }
    }
  }

  function dragEnd(e) {
    const columnWidth = specialColumns[0].offsetWidth;
    const steps = Math.round(posFinal / columnWidth);
    
    specialContainer.classList.add('drag');
    specialContainer.style.left = steps * columnWidth + "px";

    document.onmouseup = null;
    document.onmousemove = null;
  }

  function finishDrag() {
    specialContainer.classList.remove('drag');
    
    moveDot(specialContainer.offsetLeft);
  }

  function moveDot(posFinal) {
    const temp = Math.abs(posFinal / sizeView);
    const dotIndex = Math.floor(temp);
    const thisDot = document.querySelectorAll('.special-pagination__dots-element')[dotIndex];

    checkDot(thisDot);
  }
}

function controlSlides() {
  const dotsCollection = document.querySelectorAll('.special-pagination__dots-element');
  const btnsCollection = document.querySelectorAll('.special-pagination__btn');

  dotsCollection.forEach(dot => {
    dot.addEventListener('click', () => {
      changeSlide(dot);
    })
  })

  btnsCollection.forEach(btn => {
    btn.addEventListener('click', () => {
      btnControl(btn);
    })
  })

  dragSlides();
}
controlSlides();

window.addEventListener('resize', () => {
  specialResponsive();
  controlSlides();
});

// when click outside element clicked display none them;
document.querySelector('body').addEventListener('click', () => {
  const headerTopItem = document.querySelector('.header-top__item.active');
  if (headerTopItem) {
    const headerTopItemList = headerTopItem.querySelector('.header-top__item-list');
    headerTopItem.classList.remove('active');
    headerTopItemList.classList.add('d-none');
  }
  // dealer search
  dealerSearchContents.forEach(item => {
    if (!item.classList.contains('d-none')) {
      item.classList.add('d-none');
    }
  })
})