/* Click Counter

Objective: Practice event handling and updating DOM content.

Exercise:
Create a page with a button that says "Count clicks" and a text that initially shows "Clicks: 0". Each time the button is clicked, the text should update to show the total number of clicks. */

const button = document.getElementById("countBtn");
const counterText = document.getElementById("counterText");

let count = 0;

button.addEventListener("click", function () {
  count++;
  counterText.textContent = `Clicks: ${count}`;
});