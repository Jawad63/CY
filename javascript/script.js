// Fullpage.js sections and slides configuration

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  anchors: ["section-one", "section-two", "section-three", "section-four"],
  navigationTooltips: ["Home", "Work", "About us", "Contact"],
  showActiveTooltip: true,
  scrollingSpeed: 1200,
  controlArrows: false,
  slidesNavigation: true,
});

// Toggle menu

const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

// About Us effect:

const aboutUsOne = document.getElementById("button-one");
const aboutUsTwo = document.getElementById("button-two");
const aboutUsThree = document.getElementById("button-three");
const aboutUsFour = document.getElementById("button-four");
const aboutUsImage = document.getElementById("image");
const aboutUsText = document.getElementById("text");

aboutUsOne.addEventListener("click", () => {
  aboutUsText.innerText = "This text is about Consultancy.";
  aboutUsImage.src = "./images/about-us/marketing-1.jpg";
});

aboutUsTwo.addEventListener("click", () => {
  aboutUsText.innerText = "This text is about Digital-Marketing.";
  aboutUsImage.src = "./images/about-us/seo.jpg";
});

aboutUsThree.addEventListener("click", () => {
  aboutUsText.innerText = "This text is about Construction-Advice.";
  aboutUsImage.src = "./images/about-us/web-1.jpg";
});

aboutUsFour.addEventListener("click", () => {
  aboutUsText.innerText = "This text is about Web-Development.";
  aboutUsImage.src = "./images/about-us/web-2.jpg";
});
