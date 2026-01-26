const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayEl.value;

  if (!birthdayValue) {
    resultEl.innerText = "Please select a date!";
    return;
  }

  const birthDate = new Date(birthdayValue);
  const today = new Date();

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  if (days < 0) {
    months--;
    days += new Date(today.getFullYear(), today.getMonth(), 0).getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  resultEl.innerText = `${years} Years, ${months} Months, ${days} Days`;
}

btnEl.addEventListener("click", calculateAge);
