const transactionActiveBtn = document.getElementById("transaction-active-btn");
const transactionDeactiveBtn = document.getElementById("transaction-close-btn");
const transactionForm = document.getElementById("transactionform");
const form = document.getElementById("form");
const balanceEl = document.getElementById("balance");
const historyEl = document.getElementById("history");

let balance = 0;

transactionActiveBtn.addEventListener("click", () => {
  transactionForm.style.display = "flex";
});

transactionDeactiveBtn.addEventListener("click", () => {
  transactionForm.style.display = "none";
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const amount = document.getElementById("amount").value.trim();

  if (!name || !amount) {
    alert("Please enter both name and amount.");
    return;
  }

  const amountValue = Number(amount);

  if (isNaN(amountValue) || amountValue === 0) {
    alert("Please enter a valid amount.");
    return;
  }


  const li = document.createElement("li");
  li.classList.add(amountValue > 0 ? "plus" : "minus");
  li.innerHTML = `
    ${name}
    <span>${amountValue > 0 ? "+" : "-"}₹${Math.abs(amountValue)}</span>
  `;
  historyEl.appendChild(li);
  balance += amountValue;
  balanceEl.textContent = `₹${balance}`;
  form.reset();
  transactionForm.style.display = "none";
});
