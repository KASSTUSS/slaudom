document.addEventListener("DOMContentLoaded", () => {
  // HTML elemnts
  const checkbox = document.querySelectorAll(".accordion__item > input");

  const accordion = (e) => {
    e.target.parentNode.lastElementChild.style.display = "block";

    setTimeout(() => {
      e.target.parentNode.lastElementChild.classList.toggle("active");
    }, 0);
  };

  checkbox.forEach((one) => {
    one.addEventListener("change", accordion);
  });
});
