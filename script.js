"use strict";

let height = 100;
let width = 100;


const container = document.querySelector("#container");

for (let i=0; i<width; i++) {
  const column = document.createElement("div");
  column.setAttribute("class", `col-${i}`);

  for (let j=0; j<height; j++) {
    const row = document.createElement("div");
    row.setAttribute("class", `row-${j}`);

    row.addEventListener("mouseover", function (e) {
      function colorNum(num, range) {
        return Math.floor((num / (width + height)) * range);
      }
      
      if (e.buttons === 1) {
        row.style.backgroundColor = 
          `hsl(${colorNum(i + j, 720)}, 
            ${colorNum(2 * (i + j), 100)}%,
            ${colorNum(50 + i + j, 60)}%)`;
      }
    });

    column.appendChild(row);
  }

  container.appendChild(column);
}

