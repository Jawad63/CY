// Fullpage.js sections and slides configuration

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


// Toggle menu

const toggle = document.querySelector('.toggle');
const navigation = document.querySelector('.navigation');

toggle.addEventListener('click', () => {
   toggle.classList.toggle('active');
   navigation.classList.toggle('active');
})




// Header Hover effect 

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


// About Us effect: 

const aboutUsOne = document.getElementById('button-one');
const aboutUsTwo = document.getElementById('button-two');
const aboutUsThree = document.getElementById('button-three');
const aboutUsFour = document.getElementById('button-four');
const aboutUsImage = document.getElementById('image');
const aboutUsText = document.getElementById('text');

aboutUsOne.addEventListener('click', () => {
   aboutUsText.innerText = 'This text is about Consultancy.';
   aboutUsImage.src = './images/image-one.jpg';
});

aboutUsTwo.addEventListener('click', () => {
   aboutUsText.innerText = 'This text is about Digital-Marketing.';
   aboutUsImage.src = './images/image-two.jpg';
});

aboutUsThree.addEventListener('click', () => {
   aboutUsText.innerText = 'This text is about Construction-Advice.';
   aboutUsImage.src = './images/image-three.jpg';
});

aboutUsFour.addEventListener('click', () => {
   aboutUsText.innerText = 'This text is about Web-Development.';
   aboutUsImage.src = './images/image-four.jpg';
});