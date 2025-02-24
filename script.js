let display = document.getElementById('display');

// Function to append values to the display
function appendToDisplay(value) {
  display.value += value;
}

// Function to clear the display
function clearDisplay() {
  display.value = '';
}

// Function to calculate the expression on the display
function calculate() {
  try {
    display.value = eval(display.value); // Using eval() for simplicity
  } catch (e) {
    display.value = 'Error';
  }
}
