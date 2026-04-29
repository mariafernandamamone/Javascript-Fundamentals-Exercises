/* Background _Bacground_Color Changer

Objective: Practice JavaScript events and DOM style manipulation.

Exercise:
Create a web page with a button that says "Change _Bacground_Color". Every time the user clicks the button, the background _Bacground_Color of the page should change to a random _Bacground_Color. */

const button = document.getElementById("changeColorBtn");

// function getRandomColor() {
//   const r = Math.floor(Math.random() * 256);
//   const g = Math.floor(Math.random() * 256);
//   const b = Math.floor(Math.random() * 256);

//   return `rgb(${r}, ${g}, ${b})`;
// }

// button.addEventListener("click", function () {
//   const color = getRandomColor();

//   console.log(color); // 

//   document.body.style.backgroundColor = color;
// });


function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

button.addEventListener("click", function () {
  const color = getRandomColor();
  console.log(color);
  document.body.style.backgroundColor = color;
});