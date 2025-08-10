/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
var nightmoodinmobile = document.getElementById("nightmood-inmobile");
var menudiv = document.getElementById("menudiv");
var baricon = document.getElementById("baricon");
var closeicon = document.getElementById("close-icon");
var navLink = document.querySelectorAll(".nav__link");
navLink.forEach((link) =>
  link.addEventListener("click", function () {
    menudiv.classList.add("hidden");
    menudiv.classList.remove("bg-primary-light");
    nightmoodinmobile.classList.add("inline-block");
    nightmoodinmobile.classList.remove("hidden");
  })
);
baricon.addEventListener("click", function () {
  menudiv.classList.remove("hidden");
  menudiv.classList.add("bg-primary-light");
  nightmoodinmobile.classList.remove("inline-block");
  nightmoodinmobile.classList.add("hidden");
});
closeicon.addEventListener("click", function () {
  menudiv.classList.add("hidden");
  menudiv.classList.remove("bg-primary-light");
  nightmoodinmobile.classList.add("inline-block");
  nightmoodinmobile.classList.remove("hidden");
});

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
var all = document.querySelectorAll(".item-menu");
var foods = document.querySelectorAll(".food");
var snacks = document.querySelectorAll(".snack");
var sauces = document.querySelectorAll(".sauces");
var desserts = document.querySelectorAll(".desserts");
var bverages = document.querySelectorAll(".bverage");

var tabsMenu = document.querySelectorAll(".tabs__menu ul li");

function showItems(items) {
  items.forEach((item) => {
    item.style.display = "block";
    item.classList.remove("animate-left");
    void item.offsetWidth;
    item.classList.add("animate-left");
  });
}

tabsMenu.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabsMenu.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    var tabvalue = tab.getAttribute("data-tabs");

    all.forEach((item) => {
      item.style.display = "none";
    });

    if (tabvalue == "food") {
      showItems(foods);
    } else if (tabvalue == "snack") {
      showItems(snacks);
    } else if (tabvalue == "sauces") {
      showItems(sauces);
    } else if (tabvalue == "desserts") {
      showItems(desserts);
    } else if (tabvalue == "bverage") {
      showItems(bverages);
    } else {
      showItems(all);
    }
  });
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/
var themeToggle = document.getElementById("theme-toggle");
var sliderCircle = document.getElementById("slider-circle");
var sliderIcon = document.getElementById("slider-icon");

var themeToggle2 = document.getElementById("theme-toggle-2");
var sliderCircle2 = document.getElementById("slider-circle-2");
var sliderIcon2 = document.getElementById("slider-icon-2");

let isDark = localStorage.getItem("theme") === "dark";

function applyTheme(sliderCircle, sliderIcon) {
  if (isDark) {
    // document.documentElement.classList.add('dark');
    document.body.style.backgroundColor = "#000";
    document.getElementById("header").classList.add("dark-header");
    document.getElementById("menudiv").classList.add("dark-menu");
    // document.getElementById("promocard-1").classList.add("dark-promo");
    // document.getElementById("promocard-2").classList.add("dark-promo");
    // document.querySelectorAll(".dark-item").forEach((list) => {
    //   list.classList.add("dark-menue");
    // });
    document.querySelectorAll(".bg-primary-light").forEach((list) => {
      list.classList.add("dark-menue");
    });
    document.querySelectorAll(".bg-primary-light").forEach((list) => {
      list.classList.add("dark-menue");
    });
    document.querySelectorAll(".bg-primary").forEach((list) => {
      list.classList.add("dark-review-card");
    });
    sliderCircle.style.transform = "translateX(100%)";
    sliderIcon.className =
      "ri-sun-line text-black text-lg transition-all duration-300";
  } else {
    // document.documentElement.classList.remove('dark');
    document.body.style.backgroundColor = "";
    document.getElementById("header").classList.remove("dark-header");
    document.getElementById("menudiv").classList.remove("dark-menu");
    // document.getElementById("promocard-1").classList.remove("dark-promo");
    // document.getElementById("promocard-2").classList.remove("dark-promo");
    // document.querySelectorAll(".dark-item").forEach((list) => {
    //   list.classList.remove("dark-menue");
    // });
    document.querySelectorAll(".bg-primary-light").forEach((list) => {
      list.classList.remove("dark-menue");
    });
    document.querySelectorAll(".bg-primary").forEach((list) => {
      list.classList.remove("dark-review-card");
    });
    sliderCircle.style.transform = "translateX(0)";
    sliderIcon.className =
      "ri-moon-line text-black text-lg transition-all duration-300";
  }
}

function toggleTheme(sliderCircle, sliderIcon) {
  isDark = !isDark;
  localStorage.setItem("theme", isDark ? "dark" : "light");
  applyTheme(sliderCircle, sliderIcon);
}

applyTheme(sliderCircle, sliderIcon);
applyTheme(sliderCircle2, sliderIcon2);

themeToggle.addEventListener("click", () => {
  toggleTheme(sliderCircle, sliderIcon);
});

themeToggle2.addEventListener("click", () => {
  toggleTheme(sliderCircle2, sliderIcon2);
});

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/
function scrollup() {
  var scrolBtn = document.getElementById("scrol-btn");
  if (window.scrollY >= 250) {
    scrolBtn.classList.remove("-bottom-1/2");
    scrolBtn.classList.add("bottom-4");
  } else {
    scrolBtn.classList.add("-bottom-1/2");
    scrolBtn.classList.remove("bottom-4");
  }
}
window.addEventListener("scroll", scrollup);

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/
function scrollheader() {
  var header = document.getElementById("header");
  if (window.scrollY >= 50) {
    header.classList.add("border-b", "border-secondary");
  } else {
    header.classList.remove("border-b", "border-secondary");
  }
}
window.addEventListener("scroll", scrollheader);
/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/
function activeLink() {
  var section = document.querySelectorAll("section");
  var navlink = document.querySelectorAll(".nav__link");
  var curerent = "home";
  section.forEach((section) => {
    var sectionTop = section.offsetTop;
    if (this.scrollY >= sectionTop - 60) {
      curerent = section.getAttribute("id");
    }
  });
  navlink.forEach((item) => {
    item.classList.remove("text-secondary");
    if (item.href.includes(curerent)) {
      item.classList.add("text-secondary");
    }
  });
}
window.addEventListener("scroll", activeLink);
/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
var sr = ScrollReveal({
  origin: "top",
  distance: "80px",
  duration: 2500,
  dellay: 400,
});
sr.reveal(".home__image");
sr.reveal(".home__content", { origin: "bottom" });
sr.reveal(".category__card", { interval: 300 });

sr.reveal(".promo__card_1", { origin: "top" });
sr.reveal(".promo__card_2", { origin: "bottom" });

sr.reveal(".about__image", { origin: "bottom" });
sr.reveal(".about__content", { origin: "top" });

sr.reveal(".menu__items", { origin: "left" });
