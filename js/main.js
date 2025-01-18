const toggleIcon = document.querySelector(".navbar .nav > i");
toggleIcon.addEventListener("click", () => {
  document.querySelector(".navbar .nav .links").classList.toggle("show");
});

const images = [
  "../img/slider01.jpg",
  "../img/slider02.jpg",
  "../img/slider03.jpg",
];
const landing = document.querySelector(".landing");
let interval = setInterval(() => {
  let randomImage = images[Math.floor(Math.random() * images.length)];
  landing.style.backgroundImage = `url(${randomImage})`;
}, 10000);
const imageSpans = Array.from(
  document.querySelectorAll(".landing .bullets span")
);
imageSpans.forEach((span, index) => {
  span.addEventListener("click", () => {
    imageSpans.forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");
    landing.style.backgroundImage = `url(${images[index]})`;
  });
});

const shuffleSpans = Array.from(document.querySelectorAll(".shuffle span"));
const shuffleImages = Array.from(document.querySelectorAll(".images img"));
shuffleSpans.forEach((span) => {
  span.addEventListener("click", () => {
    shuffleSpans.forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");
    if (span.textContent === "All") {
      shuffleImages.forEach((img) => {
        img.style.display = "block";
      });
    } else {
      shuffleImages.forEach((img) => {
        img.style.display = "none";
      });
      shuffleImages.forEach((img) => {
        if (img.dataset.shuffle === span.textContent) {
          img.style.display = "block";
        }
      });
    }
  });
});

const testimonialsInfo = Array.from(
  document.querySelectorAll(".testimonials .info")
);
const testimonialsSpans = Array.from(
  document.querySelectorAll(".testimonials .bullets span")
);
testimonialsSpans.forEach((span, index) => {
  span.addEventListener("click", () => {
    testimonialsSpans.forEach((span) => {
      span.classList.remove("active");
    });
    span.classList.add("active");
    testimonialsInfo.forEach((info) => {
      info.style.display = "none";
    });
    testimonialsInfo[index].style.display = "block";
  });
});

const scrollToTop = document.querySelector("body > i");
scrollToTop.style.display = "none";
scrollToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
window.addEventListener("scroll", () => {
  if (window.scrollY >= 200) {
    scrollToTop.style.display = "block";
  } else {
    scrollToTop.style.display = "none";
  }
});
