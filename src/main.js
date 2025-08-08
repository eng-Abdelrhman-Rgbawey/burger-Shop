/*~~~~~~~~~~~~~~~ TOGGLE BUTTON ~~~~~~~~~~~~~~~*/
var menudiv = document.getElementById("menudiv");
var baricon = document.getElementById("baricon");
var closeicon = document.getElementById("close-icon");
var navLink = document.querySelectorAll(".nav__link");
navLink.forEach((link) =>
  link.addEventListener("click", function () {
    menudiv.classList.add("hidden");
  })
);
baricon.addEventListener("click", function () {
  menudiv.classList.remove("hidden");
});
closeicon.addEventListener("click", function () {
  menudiv.classList.add("hidden");
});

/*~~~~~~~~~~~~~~~ TABS ~~~~~~~~~~~~~~~*/
var all = document.querySelectorAll(".item-menu");
var foods = document.querySelectorAll(".food");
var snacks = document.querySelectorAll(".snack");
var bverages = document.querySelectorAll(".bverage");

var tabsMenu = document.querySelectorAll(".tabs__menu ul li");
tabsMenu.forEach((tab) => {
  tab.addEventListener("click", function () {
    tabsMenu.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    var tabvalue = tab.getAttribute("data-tabs");
    // console.log(tabvalue);
    all.forEach((item) => {
      item.style.display = "none";
    });
    if (tabvalue == "food") {
      foods.forEach((item) => {
        item.style.display = "block";
      });
    } 
    else if (tabvalue == "snack") {
      snacks.forEach((item) => {
        item.style.display = "block";
      });
    }
     else if (tabvalue == "bverage") {
      bverages.forEach((item) => {
        item.style.display = "block";
      });
    }
     else  {
      all.forEach((item) => {
        item.style.display = "block";
      });
    }
  });
});

/*~~~~~~~~~~~~~~~ DARK LIGHT THEME ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SHOW SCROLL UP ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ CHANGE BACKGROUND HEADER ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL SECTIONS ACTIVE LINK ~~~~~~~~~~~~~~~*/

/*~~~~~~~~~~~~~~~ SCROLL REVEAL ANIMATION ~~~~~~~~~~~~~~~*/
