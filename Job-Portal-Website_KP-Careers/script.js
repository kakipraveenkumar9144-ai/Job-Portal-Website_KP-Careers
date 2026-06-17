const search = document.getElementById("search");
// Search functionality
search.addEventListener("keyup", function () {
  let value = search.value.toLowerCase();
  let cards = document.querySelectorAll(".job-card");
  cards.forEach(function (card) {
    let text = card.innerText.toLowerCase();

    if (text.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});
// Apply button functionality
const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
  button.addEventListener("click", function () {
    button.innerText = "Applied ✓";
    button.style.backgroundColor = "gray";
    button.disabled = true;
  });
});
