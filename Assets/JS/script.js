// Header

const header = document.querySelector(".header_wrapper");
const headerLogo = document.querySelector(".header_logo")

window.onscroll = (() => {
  if(window.pageYOffset >= 70) {
   header.classList.add("header_scroll")
   headerLogo.classList.add("header_logo_scroll")
  } else {
    header.classList.remove("header_scroll")
    headerLogo.classList.remove("header_logo_scroll")
  }
})

// Slide

var swiper = new Swiper(".mySwiper", {
  // loop: true,
  spaceBetween: 12,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: true,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});


// Tab

const changeTab = (e, tabName) => {
    const tabContents = document.querySelectorAll(".information_item");
    tabContents.forEach(tabContent => {
      tabContent.style.display = "none"
    })
    const tabLinks = document.querySelectorAll(".information_tab_item");
    tabLinks.forEach(tabLink => {
      tabLink.className = tabLink.className.replace(" information_tab_item_active", "")
    })
    document.querySelector(tabName).style.display = "block";
    e.currentTarget.classList += " information_tab_item_active"
}