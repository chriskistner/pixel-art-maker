document.addEventListener('DOMContentLoaded', function() {
    //Grid Render
    const mainBody = document.querySelector("main");
    function pixel () {
        return `
        <div class = "pixel">
        </div>`
    }
    function createGrid (num) {
        const artfield = [];
        for (let i = 0; i <= num; i++) {
        artfield.push(pixel(i))
    }
    return artfield;
}
const renderField = createGrid(3101);
mainBody.innerHTML = renderField.join('\n');

//Color Selection
const selectors = document.querySelectorAll(".selectors");
const selected = document.querySelector(".selected");
const button = document.querySelector('button');
const cells = document.querySelectorAll(".pixel");
const wheel = document.getElementById('colorWheel')
const colorWheel = document.querySelector(".wheelSelect")
let activeColor = '';
let mouseDown = 'false';

const update = function(event) {
    if(!selected.classList.contains(event.target.classList.item(1))) {
        selected.className = "";
        selected.classList.add("selected",event.target.classList.item(1))
        activeColor = selected.classList.item(1);
    } 
    else {selected.className = "selected"}
}
const change = function (event) {
    if (mouseDown) {
        if (!event.target.classList.contains(activeColor)) {
        event.target.className = "pixel";
        event.target.classList.add(activeColor);
      }
    }
}
const wheelUpdate = function () {
    if (!selected.classList.contains(wheelColor)) {
        wheelSelect.style.backgroundColor = wheel.value;
        selected.classList.add('wheelColor')
    }
}
const clear = function (event) {
    selected.className = "selected";
    activeColor = ''
    return Array.from(cells).forEach( function(cell) {
        if(cell.classList.contains("pixel")) {
            cell.className = "";
            cell.classList.add("pixel")
        }
    })
}
const onMouseDown = function () {
    mouseDown = true;
}

const onMouseUp = function () {
    mouseDown = false;
}

//Cell Interactivity
cells.forEach(cell => cell.addEventListener("mousedown", onMouseDown));
cells.forEach(cell => cell.addEventListener("mouseover", change));
cells.forEach(cell => cell.addEventListener("mouseup", onMouseUp));
selectors.forEach(color => color.addEventListener("click", update))
wheel.addEventListener('submit', wheelUpdate);
button.addEventListener("click", clear);
});

