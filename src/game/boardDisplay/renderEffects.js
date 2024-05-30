import placeShipSFX from "../soundEffects/placeShip.ogg"
import {  greenColor, orangeColor, redColor, blackColor, whiteColor } from "./gameColors";

// renders tables
const renderTables = (playerNum, currentGameBoard) => {
    let currentTable = document.getElementById(`${playerNum}_gameboard`);

    for (let i = 0, row; row = currentTable.rows[i]; i++) {
        for (let j = 0, tile; tile = row.cells[j]; j++) {
            if (currentGameBoard.getBoard()[i][j].shipType == "None") {
                if (currentGameBoard.getBoard()[i][j].tileAttacked == false) {
                    tile.style.backgroundColor = orangeColor;
                } else {
                    tile.style.backgroundColor = blackColor;
                }
            }
            else {
                if (currentGameBoard.getBoard()[i][j].tileAttacked == false && playerNum == "p1") {
                    tile.style.backgroundColor = greenColor;
                } else if (currentGameBoard.getBoard()[i][j].tileAttacked == false && playerNum == "p2"){
                    tile.style.backgroundColor = orangeColor;
                }
                else {
                    tile.style.backgroundColor = redColor;
                }
            }
            console.log("RENDER UPDATED TABLE")
        }
    }
}

// renders the dragged ship while it is being dragged
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

// this function removes ships from standby board after placing on gameboard
const removePlacedShip = (currDivElem) => {
    currDivElem.parentNode.removeChild(currDivElem);
}

//renders hover effect on dragged ships over gameboard
const renderDragOnTables = (playerNum, currentGameBoard) => {
    for (let row=0; row < currentGameBoard.getSize()[1]; row++){
        for (let col=0; col<currentGameBoard.getSize()[0]; col++){
            let currentCell = document.getElementById(`${playerNum}_tile${row}${col}`);
            currentCell.addEventListener("dragover", (e)=> {
                e.preventDefault();
                console.log("dragging something over tile:", `${playerNum}_tile${row}${col}`)
                currentCell.style.borderColor = redColor;
            })
            currentCell.addEventListener("dragend", (e)=> {
                e.preventDefault();
                console.log("dragging something over tile:", `${playerNum}_tile${row}${col}`)
                currentCell.style.borderColor = blackColor;
            })
            currentCell.addEventListener("dragleave", (e)=> {
                e.preventDefault();
                console.log("dragging something over tile:", `${playerNum}_tile${row}${col}`)
                currentCell.style.borderColor = blackColor;
            })
            currentCell.addEventListener("drop", (e)=> {
                e.preventDefault();
                let dragItem = document.querySelector('.dragging');
                console.log(dragItem)
                console.log("dropping something on tile:", `${playerNum}_tile${row}${col}`)
                currentCell.style.borderColor = blackColor;
                if (currentGameBoard.placeShip(col, row, dragItem.dataset.shiptype, dragItem.dataset.axis) == true) {
                    let audio = new Audio(placeShipSFX);
                    audio.play();
                    renderTables(playerNum, currentGameBoard); //update table display
                    removePlacedShip(dragItem);
                }
            })
        }
    }
}

export { renderDragItems, renderDragOnTables, renderTables }