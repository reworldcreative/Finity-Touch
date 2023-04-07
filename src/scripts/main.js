import * as functions from "./modules/functions.js";

functions.isWebp();

let selectorBtn = document.querySelector(".language_show");
let items = document.querySelectorAll(".language__item");
items.forEach((item) => {
  item.addEventListener("click", function () {
    selectorBtn.innerHTML = item.text;
    selectorBtn.value = item.dataset.value;
    // console.log(
    //   `innerHTML: ${selectorBtn.innerHTML}, value: ${selectorBtn.value}`
    // );
  });
});

const ideas_swiper = new Swiper(".ideas__swiper", {
  // slidesPerView: 4,
  // spaceBetween: 40,
  // loop: true,
  touchRatio: 2,
  watchOwerflow: true,
  grabCursor: true,
  breakpoints: {
    300: {
      slidesPerView: 1.3,
      spaceBetween: 51,
      loop: true,
    },
    376: {
      slidesPerView: 1.3,
      spaceBetween: 40,
      loop: false,
    },
    765: {
      slidesPerView: 1.8,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 2.5,
      spaceBetween: 40,
    },
    1700: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

const team_swiper = new Swiper(".team__slider", {
  grabCursor: true,
  autoHeight: false,
  // grid: {
  //   rows: 2,
  //   fill: "row",
  // },
  // slidesPerView: 4,
  // slidesPerGroup: 2,
  // slidesPerColumn: 2,
  // centeredSlides: true,
  watchOwerflow: true,
  // spaceBetween: 47,
  observeParents: true,
  observeSlideChildren: true,
  observer: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    375: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 10,
      // grid: {
      //   rows: 1,
      //   fill: "row",
      // },
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 47,
      // slidesPerGroup: 1,
      // grid: {
      //   rows: 1,
      //   fill: "row",
      // },
    },
    993: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 47,
      // grid: {
      //   rows: 2,
      //   fill: "row",
      // },
    },
    1350: {
      slidesPerView: 4,
      slidesPerGroup: 2,
      spaceBetween: 47,
      // grid: {
      //   rows: 2,
      //   fill: "row",
      // },
    },
  },
});

const partners_swiper = new Swiper(".partners__slider", {
  grabCursor: true,
  watchOwerflow: true,
  slidesPerView: 5,
  spaceBetween: 60,

  breakpoints: {
    375: {
      spaceBetween: 76,
      slidesPerView: 1.8,
      slidesPerGroup: 1,
      loop: true,
    },
    768: {
      spaceBetween: 60,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    992: {
      spaceBetween: 60,
      slidesPerView: 3,
    },
    1200: {
      spaceBetween: 60,
      slidesPerView: 4.5,
      loop: true,
    },
  },
});

const tokenideas_swiper = new Swiper(".token-ideas__swiper", {
  touchRatio: 2,
  // slidesPerView: 3,
  watchOwerflow: true,
  grabCursor: true,
  // spaceBetween: 40,

  breakpoints: {
    300: {
      slidesPerView: 1.1,
      spaceBetween: 30,
    },
    375: {
      slidesPerView: 1.5,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 1.9,
      spaceBetween: 35,
    },
    992: {
      slidesPerView: 2.3,
      spaceBetween: 40,
    },
    1700: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});

window.onload = function () {
  CanvasJS.addColorSet("greenShades", [
    //colorSet Array

    "#FF7C1E",
    "#42F4FF",
    "#905BFF",
    "#DB73FF",
    "#FF9344",
    "#76FFEF",
    "#F36AFF",
    "#FA5454",
  ]);
  var chart = new CanvasJS.Chart("chartContainer", {
    // title: {
    //   text: "Controlling Radius of Doughnut/Pie Chart",
    // },
    colorSet: "greenShades",
    backgroundColor: "transparent",
    data: [
      {
        type: "doughnut",
        radius: "190%",
        indexLabelPlacement: "outside",
        startAngle: 260,
        indexLabelMaxWidth: 120,
        indexLabelTextAlign: "center",
        indexLabelFontColor: "white",
        indexLabelFontStyle: "bold",
        indexLabelFontSize: 20,
        radius: "90%", //change the radius here.
        innerRadius: "80%",
        dataPoints: [
          { x: 10, y: 15, label: "1.5% Airdrop" },
          { x: 20, y: 25, label: "2.5% Private Sale" },
          { x: 30, y: 66, label: "6.6% Public Sale" },
          { x: 40, y: 74, label: "7.4% Seedround" },
          { x: 50, y: 120, label: "12% Team" },
          { x: 60, y: 150, label: "15% Fund" },
          { x: 70, y: 250, label: "25% Reserved" },
          { x: 80, y: 300, label: "20% Ecosystem" },
        ],
      },
    ],
  });

  chart.render();
};
