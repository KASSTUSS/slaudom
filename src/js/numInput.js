document.addEventListener("DOMContentLoaded", () => {
  // HTML elemnts

  const buttons = document.getElementsByClassName("keys-input__button");
  const input = document.getElementById("chip-input");
  const minusButton = document.getElementById("minus-button");
  const plusButton = document.getElementById("plus-button");
  const priceValue = document.getElementById("prive-value");

  let value = 1;
  const PRICE_ONE = 12;
  const CURRENCY = "BYN";

  const plus = () => {
    if (value < 98) {
      value++;
      changeValue();
    }
  };
  const minus = () => {
    if (value > 1) {
      value--;
      changeValue();
    }
  };

  const changeValue = () => {
    input.value = value;

    priceValue.innerHTML = `${PRICE_ONE * value} ${CURRENCY}`;
  };

  minusButton.addEventListener("click", minus);
  plusButton.addEventListener("click", plus);

  Array.from(buttons).forEach((button) => {
    button.addEventListener('mousedown', (e) => {
      button.classList.toggle("keys-input__button_active");
    });
    button.addEventListener("mouseup", (e) => {
      button.classList.toggle("keys-input__button_active");
    });
  });
});
