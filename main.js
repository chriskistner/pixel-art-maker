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

let activeColor = '';
let colorWheel = 'colorWheel';
const update = function(event) {
    if(!selected.classList.contains(event.target.classList.item(1))) {
        selected.className = "";
        selected.classList.add("selected",event.target.classList.item(1))
        activeColor = selected.classList.item(1);
    } 
    else {selected.className = "selected"}
}
const change = function (event) {
    if (!event.target.classList.contains(activeColor)) {
        event.target.classList.add(activeColor);
      }
}

const wheelUpdate = function () {
    colorWheel.style.backgroundColor = wheel.value;
    selected.classList.add('colorWheel')
}
const clear = function (event) {
    return Array.from(cells).forEach( function(cell) {
        if(cell.classList.contains("pixel")) {
            cell.className = "";
            cell.classList.add("pixel")
        }
    })
}
//Cell Interactivity
cells.forEach(cell => cell.addEventListener("mousedown", change));
cells.forEach(cell => cell.addEventListener("click",change))
selectors.forEach(color => color.addEventListener("click", update))
wheel.addEventListener('click', wheelUpdate);
button.addEventListener("click", clear);
});

