// region Tours slider
let slides = document.querySelectorAll('.slide-tours');
let texts = document.querySelectorAll('.description-tours__text');


if (!!slides && !!texts && texts.length === slides.length) {
  let stars = document.querySelectorAll('.slide-tours__stars');
  let countSlide = slides.length;
  let activeIndex = 0
  let leftArrow = document.querySelector('.description-tours__btn._left');
  let rightArrow = document.querySelector('.description-tours__btn._right');
  if (!!leftArrow) {
    leftArrow.addEventListener("click", function (e) {
      toggleSlide(-1)
    });
    rightArrow.addEventListener("click", function (e) {
      toggleSlide(1)
    });
  }


  function toggleSlide(pos) {
    let previusIndex = activeIndex;
    activeIndex += pos;
    if (activeIndex >= countSlide) {
      activeIndex = countSlide - activeIndex
    } else if (activeIndex < 0) {
      activeIndex = countSlide + activeIndex;
      console.log(activeIndex)
    }
    slides[previusIndex].classList.remove('_active')
    texts[previusIndex].classList.remove('_active')
    slides[activeIndex].classList.add('_active')
    texts[activeIndex].classList.add('_active')
  }
}

// endregion