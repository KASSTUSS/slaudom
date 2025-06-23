document.addEventListener("DOMContentLoaded", () => {
  // HTML elemnts
  const burgerButton = document.getElementById("burger");
  const burgerContainer = document.getElementById("menu");
  const menuItems = document.getElementsByClassName("menu-item");

  let isActive = false;
  // Functions
  function toggleIsActive() {
    isActive = !isActive;
  }

  function toggleBurgerMenu() {
    toggleIsActive();

    document.body.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    burgerButton.classList.toggle("active");

    if (isActive) {
      document.body.style.overflow = isActive ? "hidden" : "";
      burgerContainer.style.display = isActive ? "flex" : "none";

      setTimeout(() => {
        burgerContainer.classList.toggle("active");
      }, 0);
    } else {
      setTimeout(() => {
        burgerContainer.classList.toggle("active");

        setTimeout(() => {
          document.body.style.overflow = isActive ? "hidden" : "";
          burgerContainer.style.display = isActive ? "flex" : "none";
        }, 500);
      }, 0);
    }
  }

  function closeBurgerMenu() {
    if (isActive) {
      toggleBurgerMenu();
    }
  }

  function burgerButtonClickHandle(e) {
    e.preventDefault();
    toggleBurgerMenu();
  }
  function menuItemsClickHandle(e) {
    e.preventDefault();
    closeBurgerMenu();

    setTimeout(() => {
      window.location = e.target.getAttribute("href");
    }, isActive ? 400 : 0);
  }
  function windowResizeHandle() {
    closeBurgerMenu();

    if (window.innerWidth > 950) {
      isActive = false;
      burgerContainer.style.display = "";
    }
  }

  // Event litsteners
  burgerButton.addEventListener("click", burgerButtonClickHandle);

  for (let menuItem of menuItems) {
    menuItem.addEventListener("click", menuItemsClickHandle);
  }

  window.addEventListener("resize", windowResizeHandle);
});
