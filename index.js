const price = document.querySelector("#price");
const people = document.querySelector("#people");
const tip = document.querySelector("#tip");
const error = document.querySelector(".error");
const countBtn = document.querySelector(".count");
const costMesssage = document.querySelector(".cost-info");
const finalCost = document.querySelector(".cost");

function checkIfInserted() {
    if (price.value === "" || people.value === "") {
        costMesssage.style.display = "none";
        error.textContent = "You have to fill in every field!";
    } else {
        error.textContent = "";
        displaySplittedBill();
    }
}

function displaySplittedBill() {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);

    const sum = (newPrice + newPrice * newTip) / newPeople;

    finalCost.textContent = sum.toFixed(2);
    costMesssage.style.display = "block";
}

countBtn.addEventListener("click", () => {
    checkIfInserted();
});
