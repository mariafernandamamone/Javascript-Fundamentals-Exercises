/* 
3. Dynamic List 

Objective: Work with creating, deleting, and manipulating DOM elements.

Exercise:
Create a page with:

a text input
a button ("Add")
an empty list
Behavior:
When the user types something and clicks Add, it should appear as a new list item
Each item must have a delete button to remove it
*/

const input = document.getElementById("inputText");
const button = document.getElementById("addBtn");
const list = document.getElementById("list");

button.addEventListener("click", function () {
  const li = document.createElement("li");
  li.textContent = input.value;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteBtn);
  list.appendChild(li);

  input.value = "";
});