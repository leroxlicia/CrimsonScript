"use strict";
const text = document.querySelector("#section3 h2 span");
const words = ["smart.", "fast.", "free.", "stylish."];
let wordIndex = 0;
let characterIndex = 0;
let isDeleting = false;

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentCharacter = currentWord.substring(0, characterIndex);
  text.innerText = currentCharacter;

  if (!isDeleting && characterIndex < currentWord.length) {
    characterIndex++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && characterIndex > 0) {
    characterIndex--;
    setTimeout(typeEffect, 100);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }
    setTimeout(typeEffect, 1500);
  }
};

typeEffect();
