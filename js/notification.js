document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const orderSummary = document.getElementById("order-summary");

  const combos = [
    ["soup", "main", "salad", "drink"],
    ["soup", "main", "drink"],
    ["soup", "salad", "drink"],
    ["main", "salad", "drink"],
    ["main", "drink"],
  ];

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const selectedCategories = Object.keys(order).filter((key) => order[key]);

    const isValidCombo = combos.some((combo) => {
      return (
        selectedCategories.length === combo.length &&
        combo.every((item) => selectedCategories.includes(item))
      );
    });

    if (selectedCategories.length === 0) {
      displayNotification("Ничего не выбрано. Выберите блюда для заказа");
    } else if (!selectedCategories.includes("drink")) {
      displayNotification("Выберите напиток");
    } else if (
      selectedCategories.includes("soup") &&
      !selectedCategories.includes("main") &&
      !selectedCategories.includes("salad")
    ) {
      displayNotification("Выберите главное блюдо/салат/стартер");
    } else if (
      (selectedCategories.includes("salad") ||
        selectedCategories.includes("dessert")) &&
      !selectedCategories.includes("soup") &&
      !selectedCategories.includes("main")
    ) {
      displayNotification("Выберите суп или главное блюдо");
    } else if (
      selectedCategories.includes("drink") &&
      !selectedCategories.includes("main")
    ) {
      displayNotification("Выберите главное блюдо");
    } else if (!isValidCombo) {
      displayNotification("Выберите комбо");
    } else {
      form.submit();
    }
  });

  function displayNotification(message) {
    const existingNotification = document.querySelector(".notification");
    if (existingNotification) existingNotification.remove();

    const notification = document.createElement("div");
    notification.className = "notification";
    notification.style.position = "fixed";
    notification.style.top = "50%";
    notification.style.left = "50%";
    notification.style.transform = "translate(-50%, -50%)";
    notification.style.padding = "20px";
    notification.style.backgroundColor = "#f8d7da";
    notification.style.color = "#721c24";
    notification.style.border = "1px solid #f5c6cb";
    notification.style.borderRadius = "10px";
    notification.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    notification.style.zIndex = "1000";
    notification.style.textAlign = "center";

    const messageElement = document.createElement("p");
    messageElement.textContent = message;
    notification.appendChild(messageElement);

    const button = document.createElement("button");
    button.textContent = "Окей";
    button.style.marginTop = "10px";
    button.style.padding = "10px 20px";
    button.style.backgroundColor = "#f5c6cb";
    button.style.color = "#721c24";
    button.style.border = "none";
    button.style.borderRadius = "5px";
    button.style.cursor = "pointer";
    button.style.transition = "background-color 0.3s, color 0.3s";

    button.addEventListener("mouseover", () => {
      button.style.backgroundColor = "#721c24";
      button.style.color = "#fff";
    });
    button.addEventListener("mouseout", () => {
      button.style.backgroundColor = "#f5c6cb";
      button.style.color = "#721c24";
    });

    button.addEventListener("click", () => {
      notification.remove();
    });

    notification.appendChild(button);

    document.body.appendChild(notification);
  }
});