const dropdownButton = document.getElementById("dropdownButton");
const dropdownContent = document.getElementById("dropdownContent");

const onClickDropdown = (e) => {
  dropdownContent.classList.toggle("vissible");
};

dropdownButton.addEventListener("click", onClickDropdown, false);

// =========================================================================

const mobileMenuButton = document.getElementById("mobileMenuButton");
const mobileMenu = document.getElementById("mobileMenu");

const onClickMobileMenu = (e) => {
  mobileMenu.classList.toggle("vissible");
};

mobileMenuButton.addEventListener("click", onClickMobileMenu, false);
// =========================================================================

const headerMobLinks = document.querySelectorAll("a.header-mob-links");
headerMobLinks.forEach((item) => {
  item.addEventListener("click", onClickMobileMenu, false);
});
