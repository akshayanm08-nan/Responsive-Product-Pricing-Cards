const billingSwitch = document.getElementById("billing-switch");
const monthlyLabel = document.getElementById("monthly-label");
const yearlyLabel = document.getElementById("yearly-label");

const pricingCards = document.querySelectorAll(".pricing-card");

function updatePricing(isYearly) {
billingSwitch.setAttribute("aria-checked", String(isYearly));

billingSwitch.setAttribute(
    "aria-label",
    isYearly ? "Switch to monthly billing" : "Switch to yearly billing"
);

monthlyLabel.classList.toggle("active", !isYearly);
yearlyLabel.classList.toggle("active", isYearly);

pricingCards.forEach(card => {
    const monthlyPrice = Number(card.dataset.monthly);
    const yearlyPrice = Number(card.dataset.yearly);

    const priceAmount = card.querySelector(".price-amount");
    const pricePeriod = card.querySelector(".price-period");
    const billingNote = card.querySelector(".billing-note");

    const displayedPrice = isYearly ? yearlyPrice : monthlyPrice;

    priceAmount.textContent = displayedPrice;
    pricePeriod.textContent = isYearly ? "/month" : "/month";

    billingNote.textContent = isYearly
        ? `Billed yearly: ₹${yearlyPrice * 12} per year`
        : "Billed monthly";
});

}

billingSwitch.addEventListener("click", () => {
const isYearly = billingSwitch.getAttribute("aria-checked") !== "true";
updatePricing(isYearly);
});

updatePricing(false);
