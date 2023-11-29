// FUNZIONE CHE CREA CELLE 
function create_cell(num){
    let element = document.createElement("div");
    element.classList.add("square");
    element.innerText = num;

    return element;
}

// RECUPERO BUTTON E DIV #GRID 
const grid = document.getElementById("grid");
const button = document.getElementById("play");

button.addEventListener("click", function(){
    grid.innerHTML = " ";
    for(i=1; i<=100; i++){
        let square = create_cell(i);
        grid.appendChild(square);
    }
})