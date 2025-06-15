document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("customSelect");
  const selectedOption = document.getElementById("selectedOption");
  const optionsContainer = document.getElementById("optionsContainer");
  const options = optionsContainer.querySelectorAll(".select__option");

  let isActive = false;
  let timeoutId = null;

  // Обработчик клика по селекту
  select.addEventListener("click", function (e) {
    if (!e.target.closest(".select__option")) {
      toggleSelect();
    }
  });

  // Обработчики для опций
  options.forEach((option) => {
    option.addEventListener("click", function () {
      const value = this.getAttribute("data-value");
      selectOption(value);
      closeSelect();
      console.log("Selected value:", value);
    });
  });

  // Обработчик кликов вне селекта
  document.addEventListener("click", (e) => {
    if (!select.contains(e.target) && isActive) {
      closeSelect();
    }
  });

  function toggleSelect() {
    isActive ? closeSelect() : openSelect();
  }

  function openSelect() {
    if (isActive) return;
    isActive = true;
    select.classList.add("select_active");
    optionsContainer.style.display = "flex";

    // Очищаем предыдущие анимации
    optionsContainer.classList.remove(
      "select__options_entering",
      "select__options_exiting"
    );

    optionsContainer.style.opacity = 0;
    // Запускаем анимацию открытия
    setTimeout(() => {
      optionsContainer.classList.add("select__options_entering");
    }, 10);

    // Убираем класс анимации после завершения
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        
    optionsContainer.style.opacity = 1;
      optionsContainer.classList.remove("select__options_entering");
    }, 250);
  }

  function closeSelect() {
    if (!isActive) return;
    isActive = false;
    select.classList.remove("select_active");

    // Очищаем предыдущие анимации
    optionsContainer.classList.remove(
      "select__options_entering",
      "select__options_exiting"
    );

    // Запускаем анимацию закрытия
    optionsContainer.classList.add("select__options_exiting");

    // Скрываем контейнер после завершения анимации
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      optionsContainer.style.display = "none";
      optionsContainer.classList.remove("select__options_exiting");
    }, 250);
  }

  function selectOption(value) {
    // Обновляем выбранную опцию
    options.forEach((option) => {
      if (option.getAttribute("data-value") === value) {
        option.classList.add("select__option_active");
        selectedOption.textContent = option.textContent;

        select.classList.add("select_selected");
      } else {
        option.classList.remove("select__option_active");
      }
    });
  }
});
