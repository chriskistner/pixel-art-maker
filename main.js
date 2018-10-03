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
const change = function (event) {
    if (!event.target.classList.contains("styleBlack")) {
        event.target.classList.add('styleBlack');
      } else {
        event.target.classList.remove('styleBlack');
      
    }
}
const renderField = createGrid(3101);
mainBody.innerHTML = renderField.join('\n');
//Color Selection
const blackCell = document.querySelector(".styleBlack")

//Cell Interactivity
const cells = document.querySelectorAll(".pixel");
cells.forEach(cell => cell.addEventListener("click", change));

});

