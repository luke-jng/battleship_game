const renderTables = (playerNum, currentGameBoard) => {
    let currentTable = document.getElementById(`${playerNum}_gameboard`);

    for (let i = 0, row; row = currentTable.rows[i]; i++) {
        for (let j = 0, tile; tile = row.cells[j]; j++) {
            if (currentGameBoard.getBoard()[i][j].shipType == "None") {
                if (currentGameBoard.getBoard()[i][j].tileAttacked == false) {
                    tile.style.backgroundColor = "yellow";
                } else {
                    tile.style.backgroundColor = "black";
                }
            }
            else {
                if (currentGameBoard.getBoard()[i][j].tileAttacked == false) {
                    tile.style.backgroundColor = "green";
                } else {
                    tile.style.backgroundColor = "red";
                }
            }
            console.log("LOOP WORKING")
        }
    }
}


const renderDragItems = () => {
    let allDraggableItems = document.querySelectorAll(".draggable");
    allDraggableItems.forEach(item => {
        item.addEventListener("dragstart", ()=>{
            item.classList.add("dragging");
        })
        item.addEventListener("dragend", ()=>{
            item.classList.remove("dragging");
        })
    })
}
const removePlacedShip = (currDivElem) => {
    currDivElem.parentNode.removeChild(currDivElem);
}

const renderDragOnTables = (playerNum, currentGameBoard) => {
    for (let row=0; row < currentGameBoard.getSize()[1]; row++){
        for (let col=0; col<currentGameBoard.getSize()[0]; col++){
            let currentCell = document.getElementById(`${playerNum}_tile${row}${col}`);
            currentCell.addEventListener("dragover", (e)=> {
                e.preventDefault();
                console.log("dragging something over tile:", `${playerNum}_tile${row}${col}`)
                currentCell.style.borderColor = "black"
            })
            currentCell.addEventListener("dragend", (e)=> {
                e.preventDefault();
                console.log("dragging something over tile:", `${playerNum}_tile${row}${col}`)
                currentCell.style.borderColor = "white"
            })
            currentCell.addEventListener("dragleave", (e)=> {
                e.preventDefault();
                console.log("dragging something over tile:", `${playerNum}_tile${row}${col}`)
                currentCell.style.borderColor = "white"
            })
            currentCell.addEventListener("drop", (e)=> {
                e.preventDefault();
                let dragItem = document.querySelector('.dragging');
                console.log(dragItem)
                console.log("dropping something on tile:", `${playerNum}_tile${row}${col}`)
                currentCell.style.borderColor = "white"
                if (currentGameBoard.placeShip(col, row, dragItem.dataset.shiptype, dragItem.dataset.axis) == true) {
                    renderTables(playerNum, currentGameBoard); //update table display
                    removePlacedShip(dragItem);
                }
            })
        }
    }
}

export { renderDragItems, renderDragOnTables, renderTables }