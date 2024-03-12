import Ship from "./components/ship";
import Player from "./components/player";
import gameBoard from "./components/gameBoard";
import loadGame from "./game/game";


const testingFunc = function(){
    let p1 = Player(true, false); // actual player and has turn
    let p2 = Player(false, true); // cpu and does not have turn
    let p1gb = gameBoard(10, 10);
    let p2gb = gameBoard(10, 10);

    //randomly generate ship placement for player 2 gameboard
    const cpuGenShipPlacement = (targetGameBoard) => {
        let axises = ["horizontal", "vertical"]
        let availableShips = ["battleship", "carrier", "cruiser", "patrolBoat", "submarine"]

        for (let s = 0; s < availableShips.length; s++){
            // generate random coords for ship placement
            let boardSize = targetGameBoard.getSize();
            console.log(boardSize[0], boardSize[1])
            let randomXCoord = Math.floor(Math.random() * boardSize[0]);
            let randomYCoord = Math.floor(Math.random() * boardSize[1]);
            console.log(randomXCoord, randomYCoord);
            let randomAxis = Math.floor(Math.random() * axises.length)
            while (targetGameBoard.placeShip(randomXCoord, randomYCoord, availableShips[s], axises[randomAxis]) == false) {
                randomXCoord = Math.floor(Math.random() * boardSize[0]);
                randomYCoord = Math.floor(Math.random() * boardSize[1]);
                randomAxis = Math.floor(Math.random() * axises.length)
            }
            console.log(`${availableShips[s]} is set on ${randomXCoord}, ${randomYCoord}`)
        }
    }
    cpuGenShipPlacement(p2gb);

    //add ships for player 2's gameboard
    // p2gb.placeShip(0, 0, "battleship", "horizontal")
    // p2gb.placeShip(0, 1, "carrier", "horizontal")
    // p2gb.placeShip(0, 2, "cruiser", "horizontal")
    // p2gb.placeShip(0, 3, "patrolBoat", "horizontal")
    // p2gb.placeShip(0, 4, "submarine", "horizontal")



    const flipShipAxis = () => {
        let flipButton = document.getElementById('flip');
        let allDraggableItems = document.querySelectorAll(".draggable");
        flipButton.addEventListener('click', ()=>{
            allDraggableItems.forEach(item => {
                if (item.dataset.axis == "horizontal") {
                    item.dataset.axis = "vertical";
                    item.id = item.id + "_vertical"
                } else {
                    item.dataset.axis = "horizontal";
                    item.id = (item.id).split("_vertical")[0]
                }
            })
        })
    }
    flipShipAxis();

    //render draggable items
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
    renderDragItems();

    //remove ship from pieces box
    const removePlacedShip = (currDivElem) => {
        currDivElem.parentNode.removeChild(currDivElem);
    }
    //render hover effect
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
    renderDragOnTables("p1", p1gb);

    //render tables
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

    renderTables("p1", p1gb);
    renderTables("p2", p2gb);

    let startButton = document.getElementById("start_game");
    startButton.addEventListener("click", ()=>{
        if (p1gb.isAllShipPlaced() == true && p2gb.isAllShipPlaced() == true) {
            loadGame(p1, p2, p1gb, p2gb);
        }
        else {
            console.log("NOT ALL SHIPS ARE PLACED")
        }
    })
    
    console.log("hello world")
}


testingFunc()

// export {testingFunc}
