new fullpage('#fullpage', {
   autoScrolling: true,
   navigation: true,
   anchors:
   [
      'section-one',
      'section-two',
      'section-three',
      'section-four',
   ],
   navigationTooltips: ['Home', 'Work', 'About us', 'Contact'],
   showActiveTooltip: true,
   scrollingSpeed: 1200,
   controlArrows: false,
   slidesNavigation: true,
});


const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
   toggle.classList.toggle('active');
   navigation.classList.toggle('active');
})