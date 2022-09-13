// Header

const header = document.querySelector("header");
const headerLogo = document.querySelector(".header_logo");

window.onscroll = () => {
  if (window.pageYOffset >= 70) {
    header.classList.add("header_scroll");
    headerLogo.classList.add("header_logo_scroll");
  } else {
    header.classList.remove("header_scroll");
    headerLogo.classList.remove("header_logo_scroll");
  }
  hideShow();
};

// Slide

const perView = new Swiper(".mySwiper", {
  spaceBetween: 12,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,

  //   breakpoints: {
  //     425: {
  //         slidesPerView: 3,
  //     },
  // },
});

const view = new Swiper(".mySwiper2", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 12,
  autoplay: {
    delay: 4500,
  },
  thumbs: {
    swiper: perView,
  },
});

// Tab

const changeTab = (e, tabName) => {
  const tabContents = document.querySelectorAll(".information_item");
  tabContents.forEach((tabContent) => {
    tabContent.style.display = "none";
  });
  const tabLinks = document.querySelectorAll(".information_tab_item");
  tabLinks.forEach((tabLink) => {
    tabLink.className = tabLink.className.replace(
      " information_tab_item_active",
      ""
    );
  });
  document.querySelector(tabName).style.display = "block";
  e.currentTarget.classList += " information_tab_item_active";
};

// Quantity product input

const changeQuantity = (event) => {
  let quantity = parseInt(
    document.querySelector(".product_quantity_input").value
  );
  if (event == "plus") {
    quantity < 99 ? quantity++ : alert("Max");
  } else {
    quantity > 1 ? quantity-- : alert("Error! ");
  }
  document.querySelector(".product_quantity_input").value =
    formatNumber(quantity);
};

// Format number
const formatNumber = (number) => {
  if (number < 10 && number > -10) {
    return `0${number}`;
  } else {
    return number;
  }
};

// change active Slide

const tabs = document.querySelectorAll(".product_tab_item");
tabs.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabs.forEach((ele) => {
      ele.classList.remove("product_tab_item_active");
    });
    this.classList.add("product_tab_item_active");
  });
});
// Change slide

const listImage = {
  classic: [
    "classic-1",
    "classic-2",
    "classic-3",
    "classic-4",
    "classic-5",
    "classic-6",
    "classic-1",
    "classic-2",
    "classic-3",
    "classic-4",
    "classic-5",
    "classic-6",
  ],
  ebony: [
    "classic-1",
    "classic-2",
    "classic-3",
    "classic-4",
    "classic-5",
    "classic-6",
    "classic-1",
  ],
  rose: [
    "classic-1",
    "classic-2",
    "classic-3",
    "classic-4",
    "classic-5",
    "classic-6",
    "classic-1",
    "classic-2",
    "classic-3",
  ],
};
const changeSlide = (name) => {
  name ? (name = name) : (name = "classic");

  const slideView = document.querySelector(".product_slide_view_JS");
  while (slideView.hasChildNodes()) {
    slideView.removeChild(slideView.firstChild);
  }
  const slidePreview = document.querySelector(".product_slide_preview_JS");
  while (slidePreview.hasChildNodes()) {
    slidePreview.removeChild(slidePreview.firstChild);
  }
  listImage[name].forEach((ele) => {
    const slidesPreviewChild = ` 
      <div class="swiper-slide product_slide_item product_slide_preview_item">
        <img class="product_slide_image product_slide_preview_image" src="./Assets/Image/${ele}.png" />
      </div>
    `;
    const slidesViewChild = ` 
      <div class="swiper-slide product_slide_item product_slide_view_item">
        <img class="product_slide_image" src="./Assets/Image/${ele}.png" />
      </div>
    `;
    perView.appendSlide(slidesPreviewChild);
    view.appendSlide(slidesViewChild);
  });
};

changeSlide();

// Back to top

const goToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

// Hide and show button go to top

const topBtn = document.querySelector(".go_to_top");
const hideShow = () => {
  if (window.pageYOffset >= 70) {
    topBtn.style.display = "flex";
  } else {
    topBtn.style.display = "none";
  }
};

// Add to cart

const addToCart = () => {
  const quantity = parseInt(
    document.querySelector(".product_quantity_input").value
  );
  if (quantity >= 2) {
    openModal("modal-fail");
  } else {
    openModal("modal-success");
  }
};

// Modal

const modals = document.querySelectorAll(".modal");
const btnClose = document.querySelectorAll(".modal_btn");

btnClose.forEach(ele => {
  ele.addEventListener("click", function () {
    modals.forEach(modal => {
      modal.style.display = "none";
    })
  });
})



const openModal = (modalName) => {
  const modal = document.querySelector("." + modalName);
  modal.style.display= "block";
}

const closeModal = (modalName) => {
  const modal = document.querySelector("." + modalName);
  modal.style.display = "none";
}

