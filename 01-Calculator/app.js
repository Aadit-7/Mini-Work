const display = document.getElementById("display");

function appendToDisplay(input) {
  if (input === "%") {
    // Handling percentage separately
    const currentValue = parseFloat(display.value);
    const percentValue = currentValue / 100;
    display.value = percentValue;
  } else {
    // For other inputs
    display.value += input;
  }
}

function calculate() {
  try {
    if (display.value === "") {
      console.log("Enter some value");
      return;
    }
    display.value = eval(display.value);
    setTimeout(() => {
      display.value = "";
    }, 10000);
  } catch (err) {
    display.value = "Error";
    setTimeout(() => {
      display.value = "";
    }, 1000);
  }
}

function clearDisplay() {
  display.value = "";
}

function back() {
  display.value = display.value.substring(0, display.value.length - 1);
}
