const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddentElements = document.querySelectorAll(".hidden");
hiddentElements.forEach((element, i) => {
  element.style.transitionDelay = i * 200 + "ms";
  observer.observe(element);
});

let projectButton = document.getElementById("education-button");
let body = document.querySelector("body");
let section = document.querySelector("section");

// projectButton.addEventListener("mouseover", hoverOverHeaderLinks());

// hoverOverHeaderLinks = (event) => {
//   blurScreen();
// };

// blurScreen = () => {
//   body.classList.add("blur-screen");
//   section.classList.add("blur-screen");
// };

let toggleMenu = document.querySelector(".toggleMenu");
let navButton = document.querySelector(".nav-button");
toggleMenu.onclick = () => {
  navButton.classList.toggle("navactive");
};
