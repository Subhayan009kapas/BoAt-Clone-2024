// For search item start
let search = document.querySelector("input");
let search_item = document.querySelector(".search-item");

let display = "none";
search.addEventListener("click", () => {
  if (display === "none") {
    search_item.style.display = "block";
    search_item.style.transform = "translateZ(100px)";
    display = "block";
  } else {
    search_item.style.display = "none";
    display = "none";
  }
});

// To hide the search item on click outside
document.addEventListener("click", (event) => {
  if (display === "block" && event.target !== search) {
    search_item.style.display = "none";
    display = "none";
  }
});
// For search item END

// For categorize dropdown
let categorise = document.querySelector(".Catagorise");
let categorise_item = document.querySelector(".categorise-item");
let cat_dis = "none";

categorise.addEventListener("click", () => {
  categorise_item.style.display = "grid";

  cat_dis = "block";
});
document.addEventListener("click", (event) => {
  if ((cat_dis = "block" && event.target !== categorise)) {
    categorise_item.style.display = "none";
    cat_dis = "none";
  }
});
// For categorize dropdown

// Image Slider and Dot Navigation
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
const totalSlides = slideImages.length;
let currentSlideIndex = 0;
let dots = document.querySelectorAll(".dot");

// Initialize the slider and dots
function updateSlide() {
  slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  activedot();
}

function activedot() {
  dots.forEach((dot) => (dot.style.backgroundColor = "black"));
  dots[currentSlideIndex].style.backgroundColor = "white";
}

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = totalSlides - 1;
  } else {
    currentSlideIndex = index;
  }
  updateSlide();
}

// Event listeners for slide buttons
document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentSlideIndex + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentSlideIndex - 1);
});

// Initialize the first slide and dots
updateSlide();

// Automatic slide change every 2 seconds
setInterval(() => {
  showSlide(currentSlideIndex + 1);
}, 2000);

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

// time counter
let x= setInterval(() => {
  const end_date = "6 August 2024  7:37 PM";
  const now = new Date();
  const end = new Date(end_date);
  console.log((end - now) / 1000);

  let day = document.querySelector(".days");
  let hours = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  let seconds = document.querySelector(".sec");

  let distance = (end - now) / 1000;
  const days = Math.floor(distance / 60 / 60 / 24);
  const hour = Math.floor((distance / 3600) % 24);
  const minutes = Math.floor((distance / 60) % 60);
  const sec = Math.floor(distance % 60);

  day.innerText = days;
  hours.innerText = hour;
  minute.innerText = minutes;
  seconds.innerText = sec;

  if(distance<0){
    clearInterval(x)
    day.innerText = "0";
  hours.innerText = "0";
  minute.innerText = "0";
  seconds.innerText = "0";
  }
}, 1000);

// time counter

// vedio

const video = document.querySelectorAll("#hoverVideo");
video.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});

// News paper sliding
let currentCustomSlide = 0;

function changeCustomSlide(direction) {
  const slides = document.querySelector(".custom-slides");
  const totalSlides = slides.children.length;

  currentCustomSlide += direction;

  if (currentCustomSlide >= totalSlides) {
    currentCustomSlide = 0;
  } else if (currentCustomSlide < 0) {
    currentCustomSlide = totalSlides - 1;
  }

  slides.style.transform = `translateX(-${currentCustomSlide * 100}%)`;
}

// for login section
let card = document.createElement("div");
let profile_card = document.querySelector(".profile-card");
let user = document.querySelector(".user-icon");
let dismiss = document.querySelector(".dismiss");
profile_display = "none";
user.addEventListener("click", () => {
  profile_card.style.visibility = "visible";
  profile_display = "visible";
});
dismiss.addEventListener("click", () => {
  profile_card.style.visibility = "hidden";
});
// for login section

// for cart section slide bar

cart = document.querySelector(".cart");
cart_slide = document.querySelector(".cartbar");
cart.addEventListener("click", () => {
  cart_slide.style.visibility = "visible";
  cart_slide.style.transform = "translate(-500px)";
});
closebar = document.querySelector("#closebar");
closebar.addEventListener("click", () => {
  cart_slide.style.visibility = "hidden";
  cart_slide.style.transform = "translate(400px)";
});
// for cart section slide bar


// For option in Nav bar
const more_card = document.querySelector(".more");
const morebtn = document.querySelector(".morebtn");
let more_card_display = "none";

morebtn.addEventListener("click", () => {
  if (more_card_display === "none") {
    more_card.style.display = "block";
    more_card_display = "block";
  } else {
    more_card.style.display = "none";
    more_card_display = "none";
  }
});

document.addEventListener("click", (event) => {
  if (more_card_display === "block" && event.target !== morebtn) {
    more_card.style.display = "none";
    more_card_display = "none";
  }
});

// For option in Nav bar




// chat card 
let chat=document.querySelector(".chat");
let chat_card=document.querySelector(".chat-widget-card");
chat.addEventListener("click",()=>{
  chat_card.style.visibility="visible";
  chat_card.style.transform="translate(-450px)"
})

let chat_close=document.querySelector(".chat-widget-close-icon");
chat_close.addEventListener("click",()=>{
  chat_card.style.visibility="hidden";
  chat_card.style.transform="translate(450px)"
})
// chat card