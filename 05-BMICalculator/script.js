const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  const result2 = document.querySelector("#results2");

  if (height === "" || height < 0 || isNaN(height)) {
    result.innerHTML = `Please give the correct value of ${height}`;
  } else if (weight === "" || weight < 0 || isNaN(weight)) {
    result.innerHTML = `Please give the correct value of ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}</span>`;
    if (bmi < 18.6) {
      result2.innerHTML = `<span>"You are under wight"</span>`;
    }
    if (18.6 <= bmi <= 24.9) {
      result2.innerHTML = `<span>"You are in normal range"</span>`;
    }
    if (bmi > 24.9) {
      result2.innerHTML = `<span>"You are over wight"</span>`;
    }
  }
});
