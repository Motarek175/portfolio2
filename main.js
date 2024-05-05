let headerlinks = document.querySelector(".header .container .links");
let logo = document.querySelector(".header .container .logo");
let theme = document.querySelector(".theme");
let landtext = document.querySelector(".landing .container .text");
let landimg = document.querySelector(".landing .container .img img");
let body = document.querySelector("body");
let front = document.querySelector(".front");
let back = document.querySelector(".back");

let mainTitleWorks = document.querySelector(".works .main-title");
let cardsWorks = document.querySelector(".works .container .cards");

let mainTitleSkills = document.querySelector(".my-skills .main-title");
let imgsSkills = document.querySelector(".my-skills .container .imgs");

let contacth2 = document.querySelector(".contact .container h2");
let contactButton = document.querySelector(".contact .container button");
let contactMe = document.querySelector(".contact .me");

let myCopyRight = document.querySelector("footer");

let upToTop = document.querySelector(".header button");

window.onload = () => {
  logo.style.cssText = "transform: scale(1);";
  headerlinks.style.cssText = "transform: scale(1);";
  theme.style.cssText = "transform: scale(1);";
  landtext.style.cssText = "transform: scale(1);";
  landimg.style.cssText = "transform: scale(1);";
};

theme.addEventListener("click", () => {
  body.classList.toggle("light");
  if (body.classList.contains("light")) {
    front.style.cssText = "transform: scale(0)";
    back.style.cssText = " transition-delay:0.1s; transform: scale(1)";
  } else {
    back.style.cssText = "transform: scale(0)";
    front.style.cssText = " transition-delay:0.1s; transform: scale(1)";
  }
});

window.onscroll = () => {
  console.log(window.scrollY);
  if (window.scrollY >= 270) {
    landtext.style.cssText = "transform: scale(0);";
    landimg.style.cssText = "transform: scale(0);";
  } else {
    landtext.style.cssText = "transform: scale(1);";
    landimg.style.cssText = "transform: scale(1);";
  }

  if (window.scrollY >= 280 && window.scrollY < 1250) {
    mainTitleWorks.style.cssText = "transform: scale(1);";
    cardsWorks.style.cssText = "transform: scale(1);";
  } else {
    mainTitleWorks.style.cssText = "transform: scale(0);";
    cardsWorks.style.cssText = "transform: scale(0);";
  }

  if (window.scrollY >= 1250 && window.scrollY < 2500) {
    mainTitleSkills.style.cssText = "transform: scale(1);";
    imgsSkills.style.cssText = "transform: scale(1);";
  } else {
    mainTitleSkills.style.cssText = "transform: scale(0);";
    imgsSkills.style.cssText = "transform: scale(0);";
  }

  if (window.scrollY >= 2500) {
    contacth2.style.cssText = "transform: scale(1);";
    contactButton.style.cssText = "transform: scale(1);";
    contactMe.style.cssText = "transform: scale(1);";
    myCopyRight.style.cssText = "transform: scale(1);";
  } else {
    contacth2.style.cssText = "transform: scale(0);";
    contactButton.style.cssText = "transform: scale(0);";
    contactMe.style.cssText = "transform: scale(0);";
    myCopyRight.style.cssText = "transform: scale(0);";
  }
  if (window.scrollY > 200) {
    upToTop.style.cssText = "transform : scale(1)";
  } else {
    upToTop.style.cssText = "transform : scale(0)";
  }
};

upToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
