

(function () {
  "use strict"

  const accordions = document.querySelectorAll('.accordion');

  accordions.forEach((accordion) => {
    accordion.addEventListener('click', function () {

      accordions.forEach((otherAccordion) => {
        if (otherAccordion !== this) {
          otherAccordion.classList.remove('active-accordion');
          let otherPanel = otherAccordion.nextElementSibling;
          if (otherPanel.classList.contains('show')) {
            otherPanel.classList.remove('show');
          }
        }
      });

      // Toggle the clicked accordion
      this.classList.toggle('active-accordion');
      let panel = this.nextElementSibling;

      if (panel.classList.contains('show')) {
        panel.classList.remove('show');
      } else {
        panel.classList.add('show');
      }
    });
  });
})();


(function () {
  'use strict';

  const studentsTrained = document.querySelector('.count1');
  const maxCount = 97;

  function numOfSTudents() {
    let i = 0;

    const interval = setInterval(() => {
      studentsTrained.innerHTML = i + '+';
      if (i >= maxCount) {
        clearInterval(interval);
      }
      i++;
    }, 20);
  }


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        numOfSTudents();
        observer.unobserve(studentsTrained);
      }
    });
  });

  observer.observe(studentsTrained);
})();


(function () {

  'use strict'

  numOfProjects()

  const projectsCompleted = document.querySelector('.count2');
  const maxCount = 11;

  function numOfProjects() {
    let i = 0;

    const interval = setInterval(() => {
      projectsCompleted.innerHTML = i + '+';
      i++;

      if (i >= maxCount) {
        clearInterval(interval);
      }
    }, 180)

  }


  // Observer to trigger counting when the element is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        numOfProjects(); // Start counting
        observer.unobserve(projectsCompleted); // Stop observing after the animation starts
      }
    });
  });

  // Observe the element
  observer.observe(projectsCompleted);

})();


(function () {

  'use strict'


  const yrsOfExperience = document.querySelector('.count3');
  const maxCount = 7;

  experience();

  function experience() {
    let i = 0;

    const interval = setInterval(() => {
      yrsOfExperience.innerHTML = i + '+';
      i++;

      if (i >= maxCount) {
        clearInterval(interval);
      }
    }, 200);


  }

})();


