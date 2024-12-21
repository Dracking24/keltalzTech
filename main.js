
document.addEventListener('DOMContentLoaded', () => {
  const myPara = document.querySelectorAll('.btn-like-buttons');

  myPara.forEach((para) => {
    para.addEventListener('click', () => {
      myPara.forEach((btn) => btn.classList.remove('activeButton'));
      para.classList.add('activeButton');
    });
  });
});


document.addEventListener('DOMContentLoaded', () => {
  const myPara = document.querySelectorAll('.btn-like-buttons');
  const specialImg = document.querySelector('.special-img');

  if (myPara.length > 0) {
    myPara[0].addEventListener('click', (event) => {
      specialImg.src = 'images/kids.jfif';
    });
    myPara[1].addEventListener('click', (event) => {
      specialImg.src = 'images/Corpers promo.jpg';
    });
    myPara[2].addEventListener('click', (event) => {
      specialImg.src = 'images/keltalz tech skill.jpg';
    });
    myPara[3].addEventListener('click', (event) => {
      specialImg.src = 'images/holiday season.jpg';
    });
  }
});

//bouncing images
(function () {
  'use strict';

  const flexContainer = document.getElementById('flex-container');
  const flexItem1 = document.querySelector('.flex-item1');
  const flexItem2 = document.querySelector('.flex-item2');
  const flexItem3 = document.querySelector('.flex-item3');

  // Only need two positions since item1 and item3 move together
  let position1 = 0;  // This will control both item1 and item3
  let position2 = 120;

  const speed = 0.5;

  let direction1 = 1;  // This will control both item1 and item3
  let direction2 = 1;

  function bounceItem(item, position, direction) {
    position += speed * direction;

    if (position >= flexContainer.offsetHeight - item.offsetHeight || position <= 0) {
      direction *= -1;
    }

    item.style.top = position + 'px';

    return { position, direction };
  }

  function animate() {
    // Update item1 and use its values
    const result1 = bounceItem(flexItem1, position1, direction1);
    const result2 = bounceItem(flexItem2, position2, direction2);

    // Use item1's position for item3
    flexItem3.style.top = position1 + 'px';

    // Update positions and directions
    position1 = result1.position;
    direction1 = result1.direction;

    position2 = result2.position;
    direction2 = result2.direction;

    requestAnimationFrame(animate);
  }

  animate();
})();

(function () {

  'use strict'


  const testimonials = document.querySelector('.testimonials');
  const testimonialsArray = document.querySelectorAll('.testimonial');
  const totalTestimonials = testimonialsArray.length;
  let currentIndex = 0;

  // Calculate the width of a single testimonial including gap
  function getSlideWidth() {
    const testimonialWidth = testimonialsArray[0].offsetWidth;
    const computedStyle = window.getComputedStyle(testimonials);
    const gap = parseInt(computedStyle.gap);
    return testimonialWidth + gap;
  }

  // Update testimonial position
  function updateTestimonialPosition() {
    const slideWidth = getSlideWidth();
    const offset = currentIndex * -slideWidth;
    testimonials.style.transform = `translateX(${offset}px)`;
  }

  document.getElementById('next').addEventListener('click', () => {
    currentIndex++;
    if (currentIndex > totalTestimonials - 2) { // Show last two testimonials
      currentIndex = 0;
    }
    updateTestimonialPosition();
  });

  document.getElementById('prev').addEventListener('click', () => {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalTestimonials - 2;
    }
    updateTestimonialPosition();
  });

  setInterval(() => {
    currentIndex++;
    if (currentIndex > totalTestimonials - 2) {
      currentIndex = 0;
    }
    updateTestimonialPosition();
  }, 5000);

  window.addEventListener('resize', updateTestimonialPosition);

  window.addEventListener('load', updateTestimonialPosition);

})();


(function () {

  'use strict'

  const innerCards = document.querySelectorAll('.flip-card-inner');
  let currentIndex = 0;

  function isMobileScreen() {
    return window.innerWidth <= 500;
  }

  function updateCardDisplay() {

    innerCards.forEach(card => {
      if (isMobileScreen()) {
        card.style.display = 'none'; card.classList.remove('mobile-animated');
      } else {
        card.style.display = 'block';
      }
    });

    innerCards[currentIndex].style.display = 'block';

    if (isMobileScreen()) {
      innerCards[currentIndex].classList.add('mobile-animated');
    }
  }

  function nextCard() {
    currentIndex++; if (currentIndex >= innerCards.length) {
      currentIndex = 0;
    }
    updateCardDisplay();
  }

  setInterval(nextCard, 5000);

  window.addEventListener('resize', updateCardDisplay);

  updateCardDisplay();

})();








