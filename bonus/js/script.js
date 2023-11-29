// FUNZIONE CHE CREA CELLE 
function create_cell(num, cellInRow){
    let element = document.createElement("div");
    element.classList.add("square");
    element.innerText = num;
    element.style.width = `calc(80vh / ${cellInRow})`
    element.style.height = `calc(80vh / ${cellInRow})`
    return element;
}

// RECUPERO BUTTON E DIV #GRID 
const grid = document.getElementById("grid");
const button = document.getElementById("play");

// FUNZIONE GRIGLIA 
function new_grid(){
    let level_selector = document.getElementById("difficulty");
    let level = parseInt(level_selector.value);
    let num_cell;
    let cellInRow;

    switch(level){
        case 1:
            num_cell = 100;
            cellInRow = 10;
            break;
        case 2:
            num_cell = 81;
            cellInRow = 9;
            break;
        case 3:
            num_cell = 49;
            cellInRow = 7;
            break;
        default:
            num_cell = 100;
            cellInRow = 10;
            break;
        }
        button.addEventListener("click", function(){
            for(i=1; i<=num_cell; i++){
                let square = create_cell(i);
                grid.appendChild(square);
                square.addEventListener("click", function(){
                    this.classList.toggle("bg_lightblue");
                    console.log(square.innerText)
                })
            }
        
        })
}

new_grid()


