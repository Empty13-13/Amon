document.addEventListener("DOMContentLoaded", () => {
  let moneyData = [1000, 2000, 3000, 4000]

// region Tours slider
  let slides = document.querySelectorAll('.slide-tours');
  let texts = document.querySelectorAll('.description-tours__text');
  let btns = document.querySelectorAll('.description-tours__more-btn');


  if (!!slides && !!texts) {
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

    function toggleSlide(pos = 1) {
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
      btns[previusIndex].classList.remove('_active')
      slides[activeIndex].classList.add('_active')
      texts[activeIndex].classList.add('_active')
      btns[activeIndex].classList.add('_active')
    }

    if (document.documentElement.clientWidth < 479.98) {
      setInterval(toggleSlide, 3800);
    }
  }

// endregion

// region addStar
  let stars = document.querySelectorAll('.slide-tours__stars');
  if (!!stars) {
    stars.forEach(item => {
      let countStar = item.dataset.star
      let string = '<img src="http://oldoman.com/wp-content/themes/gernaldo/gernaldo/img/icons/star.png" alt="">'
      let result = []
      for (let i = 0; i < countStar; i++) {
        result.push(string)
      }
      // console.log(result)
      result = result.join('')
      item.innerHTML = result
    })
  }
// endregion

// region block-excursions__btn
  let btnsExcursions = document.querySelectorAll('.block-excursions__btn');
  let btnsMore = document.querySelectorAll('.more-popup__btn2')

  btnsExcursions.forEach((item, index) => {
    item.addEventListener("click", function (e) {
      let title = item.parentNode.querySelector('.block-excursions__title')?.textContent
      let nameTours = document.querySelectorAll('#nameTour');
      nameTours.forEach(tour => {
        tour.value = title.trim();
      })

      let money = moneyData[index]
      let moneyInput = document.querySelectorAll('#allMoney');
      moneyInput.forEach(tour => {
        tour.value = money;
      })
    });
  })
  btnsMore.forEach((item, index) => {
    item.addEventListener("click", function (e) {
      let title = item.parentNode.parentNode.querySelector('.more-popup__name')?.textContent
      let nameTours = document.querySelectorAll('#nameTour');
      nameTours.forEach(tour => {
        tour.value = title.trim();
      })

      let money = moneyData[index]
      let moneyInput = document.querySelectorAll('#allMoney');
      moneyInput.forEach(tour => {
        tour.value = money;
      })
    });
  })
// endregion

// region pwp3
  let selectTour = document.querySelector('#tourPWP3');
  let parent = selectTour.parentNode.parentNode
  if (!!selectTour) {
    let optionTour = document.querySelectorAll('#tourPWP3option')
    let options = []
    parent.querySelector('#allMoney').value = moneyData[0];
    optionTour.forEach(item => {
      options.push(item.textContent)
    })
    selectTour.addEventListener("change", (e) => {
      let tour = selectTour.value
      let money = moneyData[options.indexOf(selectTour.value)]
      parent.querySelector('#allMoney').value = money;
      console.log(parent.querySelector('#allMoney').value)
    })
  }
  
//   endregion


  $(function(){
    let mask = "+9 (999) 999-99 99"
    $("#tel").mask(mask);
    $("#tel2").mask(mask);
    $("#tel3").mask(mask);
    $("#tel4").mask(mask);
    $("#tel5").mask(mask);
  });
});

