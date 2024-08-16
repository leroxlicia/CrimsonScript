"use strict";

let cursor = document.querySelector(".cursor");

window.addEventListener("mousemove", (position) => {
  const positionX = position.clientX;
  const positionY = position.clientY;

  cursor.style.top = `${positionY}px`;
  cursor.style.left = `${positionX}px`;

  cursor.animate(
    {
      top: `${positionY}px`,
      left: `${positionX}px`,
    },
    { fill: "forwards" }
  );
});

let btn = document.querySelector(".innerBtnBig");
btn.addEventListener("mouseover", () => {
  cursor.style.opacity = "0.6";
});
btn.addEventListener("mouseout", () => {
  cursor.style.opacity = "0.3";
});

let arrow = document.querySelector(".scrollArrow");
arrow.addEventListener("click", () => {
  const targetSection = document.getElementById("section1");
  targetSection.scrollIntoView({ behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  const fades = document.querySelectorAll(".fades");
  fades.forEach((fade) => {
    if (isInView(fade)) {
      fade.classList.add("fades--visible");
    }
  });
});

window.addEventListener("scroll", () => {
  const crimson = document.querySelector(".crimson");
  if (isInView(crimson)) {
    crimson.classList.add("crimson--visible");
  }
});

window.addEventListener("scroll", () => {
  const vscode = document.querySelector(".vscode");
  if (isInView(vscode)) {
    vscode.classList.add("vscode--visible");
  }
});

window.addEventListener("scroll", () => {
  const sublime = document.querySelector(".sublime");
  if (isInView(sublime)) {
    sublime.classList.add("sublime--visible");
  }
});

let isInView = (element) => {
  let rect = element.getBoundingClientRect();
  return rect.bottom >= 0 && rect.top <= window.innerHeight - 100;
};

let isInViewImg = (element) => {
  let rect = element.getBoundingClientRect();
  return rect.bottom >= 0 && rect.top <= window.innerHeight + 300;
};

window.addEventListener("scroll", () => {
  const imgs = document.querySelectorAll(".language img");
  imgs.forEach((img, index) => {
    if (isInViewImg(img)) {
      setTimeout(() => img.classList.add("img--visible"), 0 + index * 80);
    }
  });
});

window.addEventListener("scroll", () => {
  const imageAnimation = document.querySelectorAll(".imageAnimation");
  imageAnimation.forEach((image) => {
    if (isInView(image)) {
      image.classList.add("imageAnimation--visible");
    }
  });
});
