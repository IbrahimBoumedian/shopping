// Add an effect to header on scrolling
let header = document.querySelector("header");
window.addEventListener("scroll", (e) => {
  header.classList.toggle("sticky", window.scrollY > 300);
});
// Show nav menu in mobile
const settingTime = document.querySelector(".setting-time");
const menuIcon = document.querySelector("header .nav-menu");
let nav = document.querySelector("header nav");
menuIcon.addEventListener("click", (e) => {
  nav.classList.toggle("active");
  if (nav.classList.contains("active")) {
    menuIcon.setAttribute("name", "close-outline");
    settingTime.classList.add("hide");
  } else {
    menuIcon.setAttribute("name", "menu-outline");
    settingTime.classList.remove("hide");
  }
});

// Add active class to nav links
const navLinks = Array.from(
  document.querySelectorAll("header nav .nav-link , header .btns > a")
);
navLinks.forEach((item, index) => {
  item.addEventListener("click", (e) => {
    nav.classList.remove("active");
    menuIcon.setAttribute("name", "menu-outline");
    navLinks.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  });
});

// Fac Section  Accordion
var acc = document.getElementsByClassName("accordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

// Show header buttons on scrolling for small devices

const navMobileBtns = document.querySelector(".mobile-btns");

window.addEventListener("scroll", (e) => {
  if (window.scrollY > 500) {
    header.classList.add("mobile");
    navMobileBtns.classList.add("mobile");
  } else {
    header.classList.remove("mobile");
    navMobileBtns.classList.remove("mobile");
  }
});

// Flip services card on click event
const servicesCards = Array.from(
  document.querySelectorAll("#services .services-items .flip-card")
);
servicesCards.forEach((element) => {
  element.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
    servicesCards.forEach((item) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
  });
});

// Scroll to fast quote on i click on the button

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    let sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach((li) => {
    li.classList.remove("active");
    document
      .querySelector("header nav .nav-link[href*= " + current + "]")
      .classList.add("active");
  });
});

// Scroll to top
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let progressValue = document.getElementById("progress-value");
  let pos = document.documentElement.scrollTop;
  let calcHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100) / calcHeight);
  if (pos > 100) {
    scrollProgress.style.display = "grid";
  } else {
    scrollProgress.style.display = "none";
  }
  scrollProgress.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
  });
  scrollProgress.style.background = `conic-gradient(#118ac5 ${scrollValue}%, #d7d7d7 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// Show Login Form on i click on the login icon
const loginIcon = document.querySelector("header .login-icon");
const loginForm = document.querySelector(".form-screen");
loginIcon.addEventListener("click", (e) => {
  loginForm.classList.toggle("active");
  nav.classList.remove("active");
  menuIcon.setAttribute("name", "menu-outline");
});

// Hide login form

let hideIcon = document.querySelector(".form-screen .close-icon");
hideIcon.addEventListener("click", (e) => {
  loginForm.classList.remove("active");
  menuIcon.setAttribute("name", "menu-outline");
});
