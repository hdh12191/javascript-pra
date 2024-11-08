const arithmetic = () => {
  const selectValue = document.querySelector("select").value;
  const result = document.querySelector("h2");

  const firstValue = Number(document.getElementById("firstValue").value);

  const secondValue = Number(document.getElementById("secondValue").value);

  if (firstValue === 0 && secondValue === 0) {
    result.innerHTML = "값을 입력해주세요.";
    return;
  }

  if (selectValue === "add") {
    result.innerHTML = firstValue + secondValue;
  } else if (selectValue === "minus") {
    result.innerHTML = firstValue - secondValue;
  } else if (selectValue === "multiply") {
    result.innerHTML = firstValue * secondValue;
  } else if (selectValue === "divide") {
    result.innerHTML = firstValue / secondValue;
  } else {
    result.innerHTML = firstValue % secondValue;
  }
};
