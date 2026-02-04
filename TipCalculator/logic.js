const btnEl = document.getElementById("calculate");
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const totalSpan = document.getElementById("total");

function calculateTotal() {
  const billValue = parseFloat(billInput.value);
  const tipValue = parseFloat(tipInput.value);

  // Validation
  if (isNaN(billValue) || billValue <= 0) {
    alert("Please enter a valid bill amount");
    return;
  }

  if (isNaN(tipValue) || tipValue < 0) {
    alert("Please enter a valid tip percentage");
    return;
  }

  const totalValue = billValue + (billValue * tipValue / 100);

  // Display with currency
  totalSpan.innerText = "₹ " + totalValue.toFixed(2);

  // Small animation effect
  totalSpan.style.transform = "scale(1.1)";
  setTimeout(() => {
    totalSpan.style.transform = "scale(1)";
  }, 200);
}

// Button click
btnEl.addEventListener("click", calculateTotal);

// Press Enter to calculate
document.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    calculateTotal();
  }
});
