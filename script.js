"use strict";

let height = 25;
let width = 50;

const setPixels = document.querySelector("#pixels");
const reset = document.querySelector("#reset");

const container = document.querySelector("#container");

function fill(width, height) {
  for (let i=0; i<width; i++) {
    const column = document.createElement("div");
    column.setAttribute("class", `col-${i}`);

    for (let j=0; j<height; j++) {
      const row = document.createElement("div");
      row.setAttribute("class", `row-${j}`);

      row.addEventListener("mouseover", function (e) {
        function colorNum(num, range) {
          return Math.floor((num / (width + height)) * range);
        }25
        
        if (e.buttons === 1) {
          row.style.backgroundColor = 
            `hsl(${colorNum(i + j, 720)}, 
              ${colorNum(2 * (i + j), 100)}%,
              ${colorNum(((height + width) / 2) + i + j, 50)}%)`;
        }
      });

      column.appendChild(row);
    }

    container.appendChild(column);
  }
}

reset.addEventListener("click", function () {
  removeAllChildNodes(container);
  fill(width, height);
});

setPixels.addEventListener("click", getPixels);

function getPixels() {
  let tempWidth;
  let tempHeight;

  function getValue(dimension) {
    let val = null;
    val = prompt(`Enter ${dimension} (10 to 100)`);
    if (val == null) return;

    while (true) {
      if (val < 10 || length > 100) {
        val = prompt("Invalid input enter only (10 to 100) only");
        if (val == null) return;
      } else {
        return val;
      }
    }
  }

  tempWidth = getValue("Width");
  if (tempWidth == null) return;
  tempHeight = getValue("Height");
  if (tempHeight == null) return;

  width = +tempWidth;
  height = +tempHeight;

  removeAllChildNodes(container);
  fill(width, height);
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
      parent.removeChild(parent.firstChild);
  }
}

fill(width, height);