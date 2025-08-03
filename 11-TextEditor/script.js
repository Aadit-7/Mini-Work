const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");

// Button references
const upperBtn = document.querySelector(".uppercase");
const lowerBtn = document.querySelector(".lowercase");
const capitalBtn = document.querySelector(".capitalize");
const boldBtn = document.querySelector(".bold");
const italicBtn = document.querySelector(".italic");
const underlineBtn = document.querySelector(".underline");

// Display input as you type
inputField.addEventListener("input", () => {
  outputField.textContent = inputField.value;
  resetStyles(); // Reset formatting styles when text is changed
});

// Function to reset formatting styles
function resetStyles() {
  outputField.style.fontWeight = "normal";
  outputField.style.fontStyle = "normal";
  outputField.style.textDecoration = "none";
}

// Uppercase
upperBtn.addEventListener("click", () => {
  outputField.textContent = inputField.value.toUpperCase();
});

// Lowercase
lowerBtn.addEventListener("click", () => {
  outputField.textContent = inputField.value.toLowerCase();
});

// Capitalize
capitalBtn.addEventListener("click", () => {
  const words = inputField.value.toLowerCase().split(" ");
  const capitalized = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  outputField.textContent = capitalized.join(" ");
});

// Bold
boldBtn.addEventListener("click", () => {
  outputField.style.fontWeight =
    outputField.style.fontWeight === "bold" ? "normal" : "bold";
});

// Italic
italicBtn.addEventListener("click", () => {
  outputField.style.fontStyle =
    outputField.style.fontStyle === "italic" ? "normal" : "italic";
});

// Underline
underlineBtn.addEventListener("click", () => {
  outputField.style.textDecoration =
    outputField.style.textDecoration === "underline" ? "none" : "underline";
});
