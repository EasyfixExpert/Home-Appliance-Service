// Load Styles
import '../scss/main.scss';

// Load Bootstrap init
import { initBootstrap } from "./bootstrap.js";

import { gsap } from "gsap";

import { ScrollTrigger } from "gsap/ScrollTrigger.js";

gsap.registerPlugin(ScrollTrigger);

import Swal from 'sweetalert2'


import LocomotiveScroll from 'locomotive-scroll';




// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true,
// });

// Loading bootstrap with optional features
initBootstrap({
  tooltip: true,
  popover: true,
  toasts: true,
});

const swiper = new Swiper('.brandsSwiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  spaceBetween: 40,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});

const testimonials = new Swiper(".testimonialsSwiper", {
  direction: "vertical",
  slidesPerView: 2.5,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }
});

// const servicesSwiper = new Swiper(".servicesSwiper", {
//   slidesPerView: "auto",
//   spaceBetween: 30,
//   // direction: "vertical",
//   // centeredSlides: true,
//   navigation: {
//     nextEl: ".swiper-button-services-next",
//     prevEl: ".swiper-button-services-prev",
//   }, 
//   grabCursor: true,
// });

// new kursor({
//   type: 4, 
//   color: '#3FA2F6',
//   removeDefaultCursor: true
// });

AOS.init({
  duration: 700
});

// Your app code
console.log(`Hello ${process.env.HELLO}`);

function submitGoogleForm() {
  debugger
  const scriptURL = "https://script.google.com/macros/s/AKfycbz232FUBK-o9cKorvtRTZ8WEBNWooUsJ_GiKGmL_tA6V0hxPFSoEKNd1GfORWHwk8kQ/exec";
  const form = document.getElementById("submit-to-google-sheet");

  if (form) {
    var formData = new FormData(form);

    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        Swal.fire("Done", "Submitted Successfully.", "success");
        form.reset(); // Reset form after submission
      })
      .catch((error) => {
        Swal.fire("Error", "Something went wrong. Please try again!", "error");
      });
  }
}
