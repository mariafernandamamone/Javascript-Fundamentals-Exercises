/*
Real-Time Search Filter

Objective: Practice interaction between DOM events and JavaScript logic.

Exercise:
Create a page with:

a text input
a predefined list of items
Behavior:
While the user types, the list updates in real time
Only items that contain the typed text remain visible

Example:
["Dog", "Cat", "Fish"]
User types "Ca" → only "Cat" remains
*/

const input = document.getElementById("searchInput");
const items = document.querySelectorAll("#list li");

input.addEventListener("input", function () {
  const search = input.value.toLowerCase();

  items.forEach(function (item) {
    const text = item.textContent.toLowerCase();

    if (text.includes(search)) {
      item.style.display = "list-item";
    } else {
      item.style.display = "none";
    }
  });
});