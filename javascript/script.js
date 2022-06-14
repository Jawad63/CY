// Fullpage.js sections and slides configuration

new fullpage("#fullpage", {
  autoScrolling: true,
  navigation: true,
  anchors: ["section-one", "section-two", "section-three", "section-four"],
  navigationTooltips: ["Home", "Work", "About us", "Contact"],
  horizontalNavigationToolTip: ["tooltip1", "tooltip2"],
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
  aboutUsImage.src = "./images/body-images/slide-one.jpg";
  aboutUsText.innerText =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n" +
    " tempora minima reiciendis vero similique dolores quisquam itaque dolorem sit \n " +
    " maiores, illum quaerat omnis quod, inventore odit rerum. \n " +
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n";
  (" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n");
  (" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n");
});

aboutUsTwo.addEventListener("click", () => {
  aboutUsImage.src = "./images/body-images/slide-two.jpg";
  aboutUsText.innerText =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. sed mollitia in sint \n" +
    " doloribus eaque enim eos? Accusamus sit, ducimus ipsum asperiores \n " +
    " temporibus amet. Culpa, iusto. Lorem, ipsum dolor sit amet consectetur adipisicing elit. \n " +
    " Cupiditate placeat ad sed. sit amet consectetur \n";
  (" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n");
  (" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n");
});

aboutUsThree.addEventListener("click", () => {
  aboutUsImage.src = "./images/body-images/slide-three.jpg";
  aboutUsText.innerText =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n" +
    " tempora minima reiciendis vero similique dolores quisquam itaque dolorem sit \n " +
    " maiores, illum quaerat omnis quod, inventore odit rerum. \n " +
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n";
  (" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n");
  (" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n");
});

aboutUsFour.addEventListener("click", () => {
  aboutUsImage.src = "./images/body-images/slide-four.jpg";
  aboutUsText.innerText =
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum sed mollitia in sint \n" +
    " doloribus eaque enim eos? Accusamus sit, ducimus ipsum asperiores saepe, porro obcaecati \n " +
    " temporibus amet. Culpa, iusto. \n " +
    " Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed. \n";
  (" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n");
  (" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate placeat ad sed \n");
});
