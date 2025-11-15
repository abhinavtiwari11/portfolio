
const typedText = document.querySelector(".typed-text");
const words = ["Full Stack Developer",];
let wordIndex = 0;
let charIndex = 0;

function typeEffect() {
  if (charIndex < words[wordIndex].length) {
    typedText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(deleteEffect, 1000);
  }
}

function deleteEffect() {
  if (charIndex > 0) {
    typedText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteEffect, 60);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(typeEffect, 200);
  }
}

typeEffect();



const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

const toggleBtn = document.getElementById("toggle-theme");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");


});



document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(e.target.getAttribute("href"));
    target.scrollIntoView({ behavior: "smooth" });
  });
});
const avatar = document.querySelector(".profile-img");

function floatImage() {
  avatar.animate(
    [
      { transform: "translateY(0px)" },
      { transform: "translateY(-12px)" },
      { transform: "translateY(0px)" }
    ],
    {
      duration: 3500,
      iterations: Infinity
    }
  );
}

floatImage();
