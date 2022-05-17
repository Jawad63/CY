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



const imageOne = document.getElementById('image-1'); 
const imageTwo = document.getElementById('image-2');
const imageThree = document.getElementById('image-3');


function mouseHoverNone() {
   imageOne.style.display = "none";
   imageTwo.style.display = "none";
   imageThree.style.display = "none";
}


function mouseHoverOne() {
   imageOne.style.display = "block";
   imageTwo.style.display = "none";
   imageThree.style.display = "none";
}
    
function mouseHoverTwo() {
   imageOne.style.display = "none";
   imageTwo.style.display = "block";
   imageThree.style.display = "none";
}

function mouseHoverThree() {
   imageOne.style.display = "none";
   imageTwo.style.display = "none";
   imageThree.style.display = "block";
}


